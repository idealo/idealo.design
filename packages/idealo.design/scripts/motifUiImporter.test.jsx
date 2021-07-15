const mock = require('mock-fs')
const path = require('path')
const importer = require('./motifuiImporter')

beforeEach(function (){
    mock({'path/':{
        'mockedStoryFile1.story.tsx': mock.load(path.resolve(__dirname, './motif-ui-components/colors/src/colors.story.tsx')),
        'mockedStoryFile2.story.tsx': mock.load(path.resolve(__dirname, './motif-ui-components/button-group/src/ButtonGroup.story.tsx'))
    }},{createCwd: true, createTmp: true});
});

afterEach(mock.restore);

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

/*
test('initiates the components array for all components', () => {
    expect(importer.extractComponents().toBe())
})
*/

test('adds the screenshot folder name for each component', async () => {
    let resultAfterFunction = await importer.storeScreenshotFolderName(mockedComponentsArray1);
    expect(resultAfterFunction).toEqual(mockedComponentsArray2)
})

/*test('adds names of the screenshots for each component', async () => {
    let resultAfterFunction = await importer.storeNameOfScreenshots(mockedComponentsArray2);
    expect(resultAfterFunction).toEqual(mockedComponentsArray3)
})*/

/*
test('adds formData for each component', () => {
    expect(importer.createFormDataForComponents().toBe())
})*/
