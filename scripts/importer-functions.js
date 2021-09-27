import fs from "fs";
import jsonMark from "jsonmark";
import FormData from "form-data";

export async function extractComponents(subdirectories, localMotifUiComponents) {
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

export async function storeScreenshotFolderName(components) {
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

export async function storeNameOfScreenshots(components, localScreenshots) {
    for (const component of components) {
        await fs.promises
            .readdir(localScreenshots + "/" + component.screenshotFolderName)
            .then((screenshots) => {
                component.screenshots = screenshots;
            });
    }
    return components;
}

export async function createFormDataForComponents(components, localPathToMotifUIScreenshots, localScreenshots) {
    for (const component of components) {
        await fs.mkdirSync(
            localPathToMotifUIScreenshots + "/" + component.screenshotFolderName,
            (err) => {
                if (err) {
                    throw err;
                }
            }
        );
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