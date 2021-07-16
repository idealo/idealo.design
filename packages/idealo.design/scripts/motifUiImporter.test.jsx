const mock = require('mock-fs')
const path = require('path')
const importer = require('./motifuiImporter')

describe('tests for the motif-ui importer script', ()=>{
    afterEach(async ()=>{
        await mock.restore
    });

    beforeEach(function (){
        mock({
            './screenshots': mock.directory({
                items: {
                    'Colors': mock.load(path.resolve(__dirname, './screenshots/Colors/')),
                    'ButtonGroup': mock.load(path.resolve(__dirname, './screenshots/ButtonGroup/'))
                }
            }),
            'path/':{
                'mockedStoryFile1.story.tsx': mock.load(path.resolve(__dirname, './motif-ui-components/colors/src/colors.story.tsx')),
                'mockedStoryFile2.story.tsx': mock.load(path.resolve(__dirname, './motif-ui-components/button-group/src/ButtonGroup.story.tsx'))
            },
            './motif-ui-components': mock.directory({
                items: {
                    'colors':mock.load(path.resolve(__dirname, './motif-ui-components/colors')),
                    'button-group':mock.load(path.resolve(__dirname, './motif-ui-components/button-group')),
                },
            }),
            './../resources/static/assets/uploads' : mock.directory()
        },{createCwd: true, createTmp: true})
    });

    const mockedSubdirectories = [
        'colors', 'button-group'
    ]
    const mockedComponentsArray0 = [
        {
            name: '@motif/colors',
            keywords: [ 'motif', 'motif-ui', 'colors' ],
            readme: '# Motif UI Colors\n\n## Installation\n```bash\nyarn add @motif/colors\n```\n\n## Usage\n```js\nimport {\n  colorOrange,\n  colorOrangeHover,\n  colorBlue,\n' +
                '  colorBlueHover,\n  colorGreen,\n  colorGreenHover,\n  colorRed,\n  colorRedLight,\n  colorYellow,\n  colorMarine,\n  colorMarineDark,\n  colorNavy,\n' +
                '  colorMarineLight,\n  colorMarineLighter,\n  colorGrey900,\n  colorGrey700,\n  colorGrey600,\n  colorGrey500,\n  colorGrey300,\n  colorGrey100,\n' +
                '  colorWhite,\n' +
                "} from '@motif/colors';\n" +
                '```\n',
            pathToStoryFile: __dirname+'/motif-ui-components/colors/src/colors.story.tsx'
        },
        {
            name: '@motif/button-group',
            keywords: [ 'motif', 'motif-ui', 'button-group', 'react' ],
            readme: '# Motif-UI `button-group`\n\n## Installation\n```bash\nyarn add @motif/button-group\n```\n\n## Usage\n```js\n' +
                "import {ButtonGroup} from '@motif/button-group';\n" +
                '\n' +
                '<ButtonGroup>\n' +
                '  <Button>Press</Button>\n' +
                '  <Button>Start</Button>\n' +
                '</ButtonGroup>\n' +
                '```\n',
            pathToStoryFile: __dirname+'/motif-ui-components/button-group/src/ButtonGroup.story.tsx'
        }
    ]

    const mockedComponentsArray1 = [
        {
            name: 'mockedComponentName1',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            pathToStoryFile: 'path/mockedStoryFile1.story.tsx'
        },
        {
            name: 'mockedComponentName2',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            pathToStoryFile: 'path/mockedStoryFile2.story.tsx'
        }
    ]

    const mockedComponentsArray2 = [
        {
            name: 'mockedComponentName1',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'Colors'
        },
        {
            name: 'mockedComponentName2',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'ButtonGroup'
        }
    ]

    const mockedComponentsArray3 = [
        {
            name: 'mockedComponentName1',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'Colors',
            screenshots: ['blue.png', 'grey.png', 'primary.png', 'secondary.png']
        },
        {
            name: 'mockedComponentName2',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'ButtonGroup',
            screenshots: ['primary.png']
        }
    ]

    const mockedComponentsArray4 = [
        {
            name: 'mockedComponentName1',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'Colors',
            screenshots: ['blue.png', 'grey.png', 'primary.png', 'secondary.png'],
            formData: {
                "readable": true,
            }
        },
        {
            name: 'mockedComponentName2',
            keywords: ['keyword1', 'keyword2'],
            readme: 'This is readme',
            screenshotFolderName: 'ButtonGroup',
            screenshots: ['primary.png'],
            formData: {
                readable: true,
            }
        }
    ]

    test('initiates the components array for all components', async() => {
        let componentsArray = await importer.extractComponents(mockedSubdirectories)
        expect(componentsArray).toEqual(mockedComponentsArray0)
    })

    test('adds the screenshot folder name for each component', async () => {
        let resultAfterFunction = await importer.storeScreenshotFolderName(mockedComponentsArray1);
        expect(resultAfterFunction).toEqual(mockedComponentsArray2)
    })

    test('adds names of the screenshots for each component', async () => {
        let resultAfterFunction = await importer.storeNameOfScreenshots(mockedComponentsArray2);
        expect(resultAfterFunction).toEqual(mockedComponentsArray3)
    })

    test('adds formData for each component', async () => {
        let resultAfterFunction = await importer.createFormDataForComponents(mockedComponentsArray3);
        const mockedComponentsArray = {
            mockedComponent1: [
                expect.stringMatching(mockedComponentsArray4[0].name),
                expect.stringMatching(mockedComponentsArray4[0].keywords[0]),
                expect.stringMatching(mockedComponentsArray4[0].keywords[1]),
                expect.stringMatching(mockedComponentsArray4[0].readme),
                expect.stringMatching(mockedComponentsArray4[0].screenshots[0]),
            ],
            mockedComponent2: [
                expect.stringMatching(mockedComponentsArray4[1].name),
                expect.stringMatching(mockedComponentsArray4[1].keywords[0]),
                expect.stringMatching(mockedComponentsArray4[1].keywords[1]),
                expect.stringMatching(mockedComponentsArray4[1].readme),
                expect.stringMatching(mockedComponentsArray4[1].screenshots[0]),
            ]
        }
        expect(resultAfterFunction[0].formData._streams).toEqual(expect.arrayContaining(mockedComponentsArray.mockedComponent1))
        expect(resultAfterFunction[1].formData._streams).toEqual(expect.arrayContaining(mockedComponentsArray.mockedComponent2))
    })

    afterEach(async ()=>{
        await mock.restore
    });
})