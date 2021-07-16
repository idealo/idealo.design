const mock = require('mock-fs')
const path = require('path')
const importer = require('./motifuiImporter')

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
        './../resources/static/assets/uploads' : mock.directory()
        /*'./../resources/static/assets/uploads': mock.directory({
            items: {
                '/Colors/': {
                    'blue.png': mock.load(path.resolve(__dirname, './../resources/static/assets/uploads/Colors/blue.png')),
                    'grey.png': mock.load(path.resolve(__dirname, './../resources/static/assets/uploads/Colors/grey.png')),
                    'primary.png': mock.load(path.resolve(__dirname, './../resources/static/assets/uploads/Colors/primary.png')),
                    'secondary.png': mock.load(path.resolve(__dirname, './../resources/static/assets/uploads/Colors/secondary.png'))
                },
                '/ButtonGroup/': {
                    'primary.png': mock.load(path.resolve(__dirname, './../resources/static/assets/uploads/ButtonGroup/primary.png'))
                }
            }
        })*/
    },{createCwd: true, createTmp: true})
});

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

/*
test('initiates the components array for all components', () => {
    expect(importer.extractComponents().toBe())
})
*/
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