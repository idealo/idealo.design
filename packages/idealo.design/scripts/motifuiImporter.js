const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')

const motifUiFolder = path.resolve(__dirname, './../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname, '../../../../motif-ui/src')
const localScreenshots = path.resolve(__dirname, '../src/server/screenshots')
const pathToMotifUIScreenshots = path.resolve(__dirname, '../../../../motif-ui/__screenshots__')
const localPathToMotifUIScreenshots = path.resolve(__dirname, './../resources/static/assets/uploads')

const dangerousUpdateModeArgument = !!process.env.DANGEROUS_UPDATE_MODE_ARGUMENT || false

async function readDirectory(directory) {
    return await fs.promises.readdir(directory, (err) => {
        if (err) {
            console.log("Could not list the directory.", err);
            process.exit(1);
        }
    });
}

async function createPathToMotifUiScreenshots(){
    fs.mkdir(localPathToMotifUIScreenshots, {recursive: true}, (err) => {
        if(err) throw err;
    });
}

async function extractComponents(subdirectories) {
    let components = []
    for (const subdirectory of subdirectories) {
        const eachComponent = {}
        if (!subdirectory.includes('.') && subdirectory !== 'scripts'){
            await fs.promises.readFile(motifUiFolder+'/'+subdirectory+'/package.json','utf-8').then((stringContentOfPackageJson)=>{
                const packageJsonAsJson = JSON.parse(stringContentOfPackageJson)
                if (packageJsonAsJson.keywords !== undefined) {
                    eachComponent.name = packageJsonAsJson.name
                    eachComponent.keywords = packageJsonAsJson.keywords
                }
            })
            await fs.promises.readFile(motifUiFolder+'/'+subdirectory+'/README.md','utf-8').then((stringContentOfReadMe)=>{
                eachComponent.readme = stringContentOfReadMe
            })
        }

        if (!subdirectory.includes('.') && subdirectory !== 'scripts') {
            await fs.promises.readdir(motifUiFolder+'/'+subdirectory+'/src', (err) =>{
                if(err){
                    console.log(err);
                }
            }).then((result)=>{
                result.forEach((filename) =>{
                    if(filename.indexOf('.story.tsx')!== -1){
                        eachComponent.pathToStoryFile = motifUiFolder+'/'+subdirectory+'/src/'+filename
                    }
                })
            })
        }
        if(Object.entries(eachComponent).length!==0){
            components.push(eachComponent)
        }
    }
    return components
}

async function storeScreenshotFolderName(components) {
    for(const component of components){
        await fs.promises.readFile(component.pathToStoryFile, 'utf8').then((contentOfStoryFile) => {
            if (contentOfStoryFile.includes('const stories = storiesOf(')) {
                const startIndex = contentOfStoryFile.indexOf('storiesOf(')
                const endIndex = contentOfStoryFile.indexOf(', module')
                component.screenshotFolderName = contentOfStoryFile.substring(endIndex - 1, startIndex + 11)
                delete component.pathToStoryFile
            }
        })
    }
    return components
}

async function storePathToScreenshots(components){
    for(const component of components){
        await fs.promises.readdir(localScreenshots + '/' + component.screenshotFolderName).then((screenshots) => {
            component.screenshots = screenshots
        })
    }
    return components
}

async function createFormDataForComponent(components) {
    for (const component of components) {

        await fs.mkdirSync(localPathToMotifUIScreenshots+'/'+component.screenshotFolderName, (err) => {
            if (err) {
                throw err;
            }
        });
        const componentFormData = new FormData();

        componentFormData.append('name', component.name);
        for (const keyword of component.keywords) {
            componentFormData.append('keywords', keyword);
        }

        componentFormData.append('screenshotFolderName', component.screenshotFolderName);
        componentFormData.append('readme', component.readme);

        for (const screenshot of component.screenshots) {
            const screenshotBuffer = await fs.readFileSync(localScreenshots + '/' + component.screenshotFolderName + '/' + screenshot);
            const screenshotName= screenshot.replace(/ /g, "_");
            componentFormData.append('screenshots', screenshotBuffer, screenshotName);
        }
        await sendDataToHttpRequest(componentFormData)
    }
}

async function sendDataToHttpRequest(componentFormData) {
    return await axios.put('http://localhost:8080/api/components/update', componentFormData, {
        headers: componentFormData.getHeaders()
    });
}

async function handleImportProcess() {
    await fse.remove(motifUiFolder)
        .then(() => console.log('delete motifUI folder successfully'))
        .catch(err => console.log(err))
    await fse.copy(pathToMotifUiRepo, motifUiFolder)
        .then(() => console.log('copy motifUI folder successfully'))
        .catch(err => console.log(err))
    await fse.remove(localScreenshots)
        .then(() => console.log('screenshots folder was removed'))
        .catch(err => console.log(err))
    await fse.copy(pathToMotifUIScreenshots, localScreenshots)
        .then(() => console.log('copy screenshots folder successfully'))
        .catch(err => console.log(err))
    await fse.remove(localPathToMotifUIScreenshots)
        .then(() => console.log('deleted resources folder successfully'))
        .catch(err => console.log(err))
    await createPathToMotifUiScreenshots()

    readDirectory(motifUiFolder)
        .then((subdirectories) => extractComponents(subdirectories))
        .then((components) => storeScreenshotFolderName(components)
            .then((components) => storePathToScreenshots(components)
                .then((components) => createFormDataForComponent(components))))
}

if (dangerousUpdateModeArgument) {
    handleImportProcess().then(() => console.log('process finished'))
} else {
    console.error('importing process went wrong')
}

module.exports.modeArgument = dangerousUpdateModeArgument