const path = require("path");
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const jsonMark = require("jsonmark");
const AWS = require("aws-sdk");

const S3_BUCKET = process.env.S3_BUCKET;
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const S3_ACCESS_SECRET = process.env.S3_ACCESS_SECRET;

AWS.config.update({ region: "REGION" });

const s3 = new AWS.S3({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_ACCESS_SECRET,
  region: "eu-central-1",
  Bucket: S3_BUCKET,
});

const localMotifUiComponents = path.resolve(
  __dirname,
  "./motif-ui-components/"
);
const localScreenshots = path.resolve(__dirname, "./screenshots");

async function readDirectory(directory) {
  return fs.promises.readdir(directory, (err) => {
    if (err) {
      console.log("Could not list the directory.", err);
      process.exit(1);
    }
  });
}

async function extractComponents(subdirectories) {
  let components = [];
  for (const subdirectory of subdirectories) {
    const eachComponent = {};
    if (!subdirectory.includes(".") && subdirectory !== "scripts") {
      await fs.promises
        .readFile(
          localMotifUiComponents + "/" + subdirectory + "/package.json",
          "utf-8"
        )
        .then((stringContentOfPackageJson) => {
          const packageJsonAsJson = JSON.parse(stringContentOfPackageJson);
          if (packageJsonAsJson.keywords !== undefined) {
            eachComponent.name = packageJsonAsJson.name;
            eachComponent.keywords = packageJsonAsJson.keywords;
          }
        });
      await fs.promises
        .readFile(
          localMotifUiComponents + "/" + subdirectory + "/README.md",
          "utf-8"
        )
        .then((stringContentOfReadMe) => {
          const readmeAsJson = jsonMark.parse(stringContentOfReadMe);
          const stringifiedJSON = JSON.stringify(readmeAsJson);
          eachComponent.readme = stringifiedJSON;
        });
    }

    if (!subdirectory.includes(".") && subdirectory !== "scripts") {
      await fs.promises
        .readdir(
          localMotifUiComponents + "/" + subdirectory + "/src",
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        )
        .then((result) => {
          result.forEach((filename) => {
            if (filename.indexOf(".story.tsx") !== -1) {
              eachComponent.pathToStoryFile =
                localMotifUiComponents +
                "/" +
                subdirectory +
                "/src/" +
                filename;
            }
          });
        });
    }
    if (Object.entries(eachComponent).length !== 0) {
      components.push(eachComponent);
    }
  }
  return components;
}

async function storeScreenshotFolderName(components) {
  for (const component of components) {
    await fs.promises
      .readFile(component.pathToStoryFile, "utf8")
      .then((contentOfStoryFile) => {
        if (contentOfStoryFile.includes("const stories = storiesOf(")) {
          const startIndex = contentOfStoryFile.indexOf("storiesOf(");
          const endIndex = contentOfStoryFile.indexOf(", module");
          component.screenshotFolderName = contentOfStoryFile.substring(
            endIndex - 1,
            startIndex + 11
          );
          delete component.pathToStoryFile;
        }
      });
  }
  return components;
}

async function storeNameOfScreenshots(components) {
  for (const component of components) {
    await fs.promises
      .readdir(localScreenshots + "/" + component.screenshotFolderName)
      .then((screenshots) => {
        component.screenshots = screenshots;
      });
  }
  return components;
}

async function createFormDataForComponents(components) {
  for (const component of components) {
    //screenshotFolderName should be created in S3 here

    const componentFormData = new FormData();

    componentFormData.append("name", component.name);
    for (const keyword of component.keywords) {
      componentFormData.append("keywords", keyword);
    }

    componentFormData.append(
      "screenshotFolderName",
      component.screenshotFolderName
    );
    componentFormData.append("readme", component.readme);

    for (const screenshot of component.screenshots) {
      const screenshotBuffer = await fs.readFileSync(
        localScreenshots +
          "/" +
          component.screenshotFolderName +
          "/" +
          screenshot
      );
      const screenshotName = screenshot.replace(/ /g, "_");
      componentFormData.append("screenshots", screenshotBuffer, screenshotName);
    }
    component.formData = componentFormData;
  }
  return components;
}

async function sendDataToHttpRequest(components) {
  const username = process.env.UPLOADER_USERNAME;
  const password = process.env.UPLOADER_PWD;
  for (const component of components) {
    const componentFormData = component.formData;
    await axios.put(
      process.env.BASE_URL + "/api/components/update",
      componentFormData,
      {
        headers: {
          ...componentFormData.getHeaders(),
        },
        auth: {
          username: username,
          password: password,
        },
      }
    );
  }
}

/*async function emptyS3Directory(bucket, dir) {
  const listParams = {
    Bucket: bucket,
    Prefix: dir,
  };

  const listedObjects = await s3.listObjectsV2(listParams).promise();

  if (listedObjects.Contents.length === 0) return;

  const deleteParams = {
    Bucket: bucket,
    Delete: { Objects: [] },
  };

  listedObjects.Contents.forEach(({ Key }) => {
    deleteParams.Delete.Objects.push({ Key });
  });

  await s3.deleteObjects(deleteParams).promise();

  if (listedObjects.IsTruncated) await emptyS3Directory(bucket, dir);
}*/

exports.handler = async (event) => {
  const subdirectories = await readDirectory(localMotifUiComponents);
  const components = await extractComponents(subdirectories);
  const componentsWithScreenshotFolderNames = await storeScreenshotFolderName(
    components
  );
  const componentsWithScreenshotPath = await storeNameOfScreenshots(
    componentsWithScreenshotFolderNames
  );
  const componentsWithFormData = await createFormDataForComponents(
    componentsWithScreenshotPath
  );
  /*const deletedScreenshotFolder = await emptyS3Directory(
    process.env.S3_BUCKET,
    "screenshots/"
  );*/

  await sendDataToHttpRequest(componentsWithFormData);
  const response = {
    statusCode: 200,
    body: JSON.stringify("import process finished"),
  };
  return response;
};
