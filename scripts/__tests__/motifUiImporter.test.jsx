const mock = require("mock-fs");
const path = require("path");
const importer = require("../motifuiImporter");
'use strict'

const __dirname = path.resolve("./")

describe("tests for the motif-ui importer script", () => {
  afterEach(async () => {
    await mock.restore;
  });

  beforeEach(function () {
    mock(
        {
          scripts: {
            "motif-ui-lambda": {
              screenshots: {
                Colors: {
                  "blue.png": Buffer.from([1, 2, 3, 4]),
                  "grey.png": Buffer.from([2, 3, 4, 5]),
                  "primary.png": Buffer.from([3, 4, 5, 6]),
                  "secondary.png": Buffer.from([4, 5, 6, 7])
                },
                ButtonGroup: {
                  "primary.png": Buffer.from([2, 5, 6])
                }
              },
              "motif-ui-components": {
                colors: {
                  "package.json": "{\"name\": \"@motif/colors\",\n \"keywords\": [\n\"motif\",\n\"motif-ui\",\n\"colors\"\n]}",
                  "README.md": '#Readme\n\nThis ist Readme of Colors',
                  src: {
                    "colors.story.tsx": "const stories = storiesOf('Colors', module)"
                  }
                },
                "button-group": {
                  "package.json": "{\"name\": \"@motif/button-group\",\n\"keywords\": [\n\"motif\",\n\"motif-ui\",\n\"button-group\",\n\"react\"\n]}",
                  "README.md": '#Readme\n\nThis ist Readme of ButtonGroup',
                  src: {
                    "ButtonGroup.story.tsx": "const stories = storiesOf('ButtonGroup', module)"
                  }
                }
              }
            }
          },
          resources: {
            static: {
              assets: {
                uploads: {

                }
              }
            }
          }
        },
        { createCwd: true, createTmp: true }
    );
  });

  const mockedSubdirectories = ["colors", "button-group"];
  const arrayWithNameKeywordsReadme = [
    {
      name: "@motif/colors",
      keywords: ["motif", "motif-ui", "colors"],
      readme: "{\"order\":[\"Readme\"],\"content\":{\"Readme\":{\"head\":\"#Readme\",\"body\":\"This ist Readme of Colors\"}}}",
      pathToStoryFile:
        path.resolve(__dirname, "./scripts/motif-ui-lambda/motif-ui-components/colors/src/colors.story.tsx"),
    },
    {
      name: "@motif/button-group",
      keywords: ["motif", "motif-ui", "button-group", "react"],
      readme: "{\"order\":[\"Readme\"],\"content\":{\"Readme\":{\"head\":\"#Readme\",\"body\":\"This ist Readme of ButtonGroup\"}}}",
      pathToStoryFile:
        path.resolve(__dirname, "./scripts/motif-ui-lambda/motif-ui-components/button-group/src/ButtonGroup.story.tsx")
    },
  ];

  const ArrayWithPathToStoryfile = [
    {
      name: "mockedComponentName1",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      pathToStoryFile: "scripts/motif-ui-lambda/motif-ui-components/colors/src/colors.story.tsx",
    },
    {
      name: "mockedComponentName2",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      pathToStoryFile: "scripts/motif-ui-lambda/motif-ui-components/button-group/src/ButtonGroup.story.tsx",
    },
  ];

  const ArrayWithScreenshotFolderName = [
    {
      name: "mockedComponentName1",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "Colors",
    },
    {
      name: "mockedComponentName2",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "ButtonGroup",
    },
  ];

  const ArrayWithScreenshotsNames = [
    {
      name: "mockedComponentName1",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "Colors",
      screenshots: ["blue.png", "grey.png", "primary.png", "secondary.png"],
    },
    {
      name: "mockedComponentName2",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "ButtonGroup",
      screenshots: ["primary.png"],
    },
  ];

  const arrayWithFormData = [
    {
      name: "mockedComponentName1",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "Colors",
      screenshots: ["blue.png", "grey.png", "primary.png", "secondary.png"],
      formData: {
        readable: true,
      },
    },
    {
      name: "mockedComponentName2",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      screenshotFolderName: "ButtonGroup",
      screenshots: ["primary.png"],
      formData: {
        readable: true,
      },
    },
  ];

  test("initiates the components array for all components", async () => {
    let resultAfterFunction = await importer.extractComponents(
      mockedSubdirectories
    );
    expect(resultAfterFunction).toEqual(arrayWithNameKeywordsReadme);
  });

  test("adds the screenshot folder name for each component", async () => {
    let resultAfterFunction = await importer.storeScreenshotFolderName(
      ArrayWithPathToStoryfile
    );
    expect(resultAfterFunction).toEqual(ArrayWithScreenshotFolderName);
  });

  test("adds names of the screenshots for each component", async () => {
    let resultAfterFunction = await importer.storeNameOfScreenshots(
      ArrayWithScreenshotFolderName
    );
    expect(resultAfterFunction).toEqual(ArrayWithScreenshotsNames);
  });

  test("adds formData for each component", async () => {
    let resultAfterFunction = await importer.createFormDataForComponents(
      ArrayWithScreenshotsNames
    );
    const partOfWithFormDataArray = {
      firstComponent: [
        expect.stringMatching(arrayWithFormData[0].name),
        expect.stringMatching(arrayWithFormData[0].keywords[0]),
        expect.stringMatching(arrayWithFormData[0].keywords[1]),
        expect.stringMatching(arrayWithFormData[0].readme),
        expect.stringMatching(arrayWithFormData[0].screenshots[0]),
      ],
      secondComponent: [
        expect.stringMatching(arrayWithFormData[1].name),
        expect.stringMatching(arrayWithFormData[1].keywords[0]),
        expect.stringMatching(arrayWithFormData[1].keywords[1]),
        expect.stringMatching(arrayWithFormData[1].readme),
        expect.stringMatching(arrayWithFormData[1].screenshots[0]),
      ],
    };
    expect(resultAfterFunction[0].formData._streams).toEqual(
      expect.arrayContaining(partOfWithFormDataArray.firstComponent)
    );
    expect(resultAfterFunction[1].formData._streams).toEqual(
      expect.arrayContaining(partOfWithFormDataArray.secondComponent)
    );
  });
});