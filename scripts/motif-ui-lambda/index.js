const path = require("path");
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const jsonMark = require("jsonmark");
const AWS = require("aws-sdk");

AWS.config.update({ region: "REGION" });

const localMotifUiComponents = path.resolve(__dirname,"./motif-ui-components/");
const localScreenshots = path.resolve(__dirname, "./screenshots");
//const localPathToMotifUIScreenshots = path.resolve(__dirname,"./../resources/static/assets/uploads");

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

    /*for (const screenshot of component.screenshots) {
      const screenshotBuffer = await fs.readFileSync(
        localScreenshots +
          "/" +
          component.screenshotFolderName +
          "/" +
          screenshot
      );
      const screenshotName = screenshot.replace(/ /g, "_");
      componentFormData.append("screenshots", screenshotBuffer, screenshotName);
    }*/
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
  await sendDataToHttpRequest(componentsWithFormData);
  const response = {
    statusCode: 200,
    body: JSON.stringify("import process finished"),
  };
  return response;
};