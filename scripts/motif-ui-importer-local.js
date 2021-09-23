import path from "path";
import fse from "fs-extra";
import fs from "fs";
import axios from "axios";
import {
  createFormDataForComponents,
  extractComponents,
  storeNameOfScreenshots,
  storeScreenshotFolderName
} from "./importer-functions.js";

const __dirname = path.resolve();
const localMotifUiComponents = path.resolve(
  __dirname,
  "./scripts/motif-ui-lambda/motif-ui-components"
);
const localScreenshots = path.resolve(
  __dirname,
  "./scripts/motif-ui-lambda/screenshots"
);
const pathToMotifUiRepo = path.resolve(__dirname, "../../motif-ui/src");
const pathToMotifUIScreenshots = path.resolve(
  __dirname,
  "../../motif-ui/__screenshots__"
);
const localPathToMotifUIScreenshots = path.resolve(
  __dirname,
  "./resources/static/assets/uploads"
);

async function readDirectory(directory) {
  return fs.promises.readdir(directory, (err) => {
    if (err) {
      console.log("Could not list the directory.", err);
      process.exit(1);
    }
  });
}

async function createPathToMotifUiScreenshots() {
  fs.mkdir(localPathToMotifUIScreenshots, { recursive: true }, (err) => {
    if (err) throw err;
  });
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

async function handleImportProcess() {
  await fse.remove(localMotifUiComponents).catch((err) => console.log(err));
  await fse
    .copy(pathToMotifUiRepo, localMotifUiComponents)
    .catch((err) => console.log(err));
  await fse.remove(localScreenshots).catch((err) => console.log(err));
  await fse
    .copy(pathToMotifUIScreenshots, localScreenshots)
    .catch((err) => console.log(err));
  await fse
    .remove(localPathToMotifUIScreenshots)
    .catch((err) => console.log(err));

  await createPathToMotifUiScreenshots();
  const subdirectories = await readDirectory(localMotifUiComponents);
  const components = await extractComponents(subdirectories, localMotifUiComponents);
  const componentsWithScreenshotFolderNames = await storeScreenshotFolderName(
    components
  );
  const componentsWithScreenshotPath = await storeNameOfScreenshots(
    componentsWithScreenshotFolderNames, localScreenshots
  );
  const componentsWithFormData = await createFormDataForComponents(
    componentsWithScreenshotPath, localPathToMotifUIScreenshots, localScreenshots
  );
  await sendDataToHttpRequest(componentsWithFormData);
}

handleImportProcess().then(() => console.log("import process finished"));
