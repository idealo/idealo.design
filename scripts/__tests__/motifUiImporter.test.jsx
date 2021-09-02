const mock = require("mock-fs");
const path = require("path");
const importer = require("./motifuiImporter");

describe("tests for the motif-ui importer script", () => {
  afterEach(async () => {
    await mock.restore;
  });

  beforeEach(function () {
    mock(
      {
        "./motif-ui-lambda/screenshots": mock.directory({
          items: {
            Colors: mock.load(
              path.resolve(__dirname, "./motif-ui-lambda/screenshots/Colors/")
            ),
            ButtonGroup: mock.load(
              path.resolve(
                __dirname,
                "./motif-ui-lambda/screenshots/ButtonGroup/"
              )
            ),
          },
        }),
        "path/": {
          "mockedStoryFile1.story.tsx": mock.load(
            path.resolve(
              __dirname,
              "./motif-ui-lambda/motif-ui-components/colors/src/colors.story.tsx"
            )
          ),
          "mockedStoryFile2.story.tsx": mock.load(
            path.resolve(
              __dirname,
              "./motif-ui-lambda/motif-ui-components/button-group/src/ButtonGroup.story.tsx"
            )
          ),
        },
        "./motif-ui-lambda/motif-ui-components": mock.directory({
          items: {
            colors: mock.directory({
              items: {
                "README.md": mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/colors/README.md"
                  )
                ),
                "package.json": mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/colors/package.json"
                  )
                ),
                src: mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/colors/src"
                  )
                ),
              },
            }),
            "button-group": mock.directory({
              items: {
                "README.md": mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/button-group/README.md"
                  )
                ),
                "package.json": mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/button-group/package.json"
                  )
                ),
                src: mock.load(
                  path.resolve(
                    __dirname,
                    "./motif-ui-lambda/motif-ui-components/button-group/src"
                  )
                ),
              },
            }),
          },
        }),
        "./../resources/static/assets/uploads": mock.directory(),
      },
      { createCwd: true, createTmp: true }
    );
  });

  const mockedSubdirectories = ["colors", "button-group"];
  const arrayWithNameKeywordsReadme = [
    {
      name: "@motif/colors",
      keywords: ["motif", "motif-ui", "colors"],
      readme:
        '{"order":["Motif UI Colors","Installation","Usage"],"content":{"Motif UI Colors":{"head":"# Motif UI Colors","body":""},"Installation":{"head":"## Installation","body":"```bash\\nyarn add @motif/colors\\n```"},"Usage":{"head":"## Usage","body":"```js\\nimport {\\n  colorOrange,\\n  colorOrangeHover,\\n  colorBlue,\\n  colorBlueHover,\\n  colorGreen,\\n  colorGreenHover,\\n  colorRed,\\n  colorRedLight,\\n  colorYellow,\\n  colorMarine,\\n  colorMarineDark,\\n  colorNavy,\\n  colorMarineLight,\\n  colorMarineLighter,\\n  colorGrey900,\\n  colorGrey700,\\n  colorGrey600,\\n  colorGrey500,\\n  colorGrey300,\\n  colorGrey100,\\n  colorWhite,\\n} from \'@motif/colors\';\\n```"}}}',
      pathToStoryFile:
        __dirname +
        "/motif-ui-lambda/motif-ui-components/colors/src/colors.story.tsx",
    },
    {
      name: "@motif/button-group",
      keywords: ["motif", "motif-ui", "button-group", "react"],
      readme:
        '{"order":["Motif-UI `button-group`","Installation","Usage"],"content":{"Motif-UI `button-group`":{"head":"# Motif-UI `button-group`","body":""},"Installation":{"head":"## Installation","body":"```bash\\nyarn add @motif/button-group\\n```"},"Usage":{"head":"## Usage","body":"```js\\nimport {ButtonGroup} from \'@motif/button-group\';\\n\\n<ButtonGroup>\\n  <Button>Press</Button>\\n  <Button>Start</Button>\\n</ButtonGroup>\\n```"}}}',
      pathToStoryFile:
        __dirname +
        "/motif-ui-lambda/motif-ui-components/button-group/src/ButtonGroup.story.tsx",
    },
  ];

  const ArrayWithPathToStoryfile = [
    {
      name: "mockedComponentName1",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      pathToStoryFile: "path/mockedStoryFile1.story.tsx",
    },
    {
      name: "mockedComponentName2",
      keywords: ["keyword1", "keyword2"],
      readme: "This is readme",
      pathToStoryFile: "path/mockedStoryFile2.story.tsx",
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
