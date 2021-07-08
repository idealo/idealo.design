const path = require('path')
const http = require('http')
const fse = require('fs-extra')
const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')

const motifUiFolder = path.resolve(__dirname, './../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname, '../../../../motif-ui/src')
const localScreenshots = path.resolve(__dirname, '../src/server/screenshots')
const pathToMotifUIScreenshots = path.resolve(__dirname, '../../../../motif-ui/__screenshots__')

const dangerousUpdateModeArgument = !!process.env.DANGEROUS_UPDATE_MODE_ARGUMENT || false

async function readDirectory(directory) {
    return await fs.promises.readdir(directory, (err) => {
        if (err) {
            console.log("Could not list the directory.", err);
            process.exit(1);
        }
    });
}

async function extractComponents(subdirectories, destinationMotifUI) {
    let components = []
    for (const subdirectory of subdirectories) {
        const eachComponent = {}
        if (!subdirectory.includes('.')){
            await fs.promises.readFile(destinationMotifUI+'/'+subdirectory+'/package.json','utf-8').then((stringContentOfPackageJson)=>{
                const packageJsonAsJson = JSON.parse(stringContentOfPackageJson)
                if (packageJsonAsJson.keywords !== undefined) {
                    eachComponent.name = packageJsonAsJson.name
                    eachComponent.keywords = packageJsonAsJson.keywords
                }
            })
        }

        if (!subdirectory.includes('.') && subdirectory !== 'scripts') {
            await fs.promises.readdir(destinationMotifUI+'/'+subdirectory+'/src', (err) =>{
                if(err){
                    console.log(err);
                }
            }).then((result)=>{
                result.forEach((filename) =>{
                    if(filename.indexOf('.story.tsx')!== -1){
                        eachComponent.pathToStoryFile = destinationMotifUI+'/'+subdirectory+'/src/'+filename
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
    for(let i =0;i<components.length;i++){
        await fs.promises.readFile(components[i].pathToStoryFile, 'utf8').then((contentOfStoryFile) => {
            if (contentOfStoryFile.includes('const stories = storiesOf(')) {
                const startIndex = contentOfStoryFile.indexOf('storiesOf(')
                const endIndex = contentOfStoryFile.indexOf(', module')
                components[i].screenshotFolderName = contentOfStoryFile.substring(endIndex - 1, startIndex + 11)
                delete components[i].pathToStoryFile
            }
        })
    }
    return components
}

async function storePathToScreenshots(components){
    for(let i = 0;i<components.length; i++){
        await fs.promises.readdir(localScreenshots + '/' + components[i].screenshotFolderName).then((screenshots) => {
            components[i].screenshots = screenshots
        })
    }
    return components
}

async function createFormDataForComponent(components) {
    for (const component of components) {
        const componentFormData = new FormData();

        componentFormData.append('name', component.name);
        for (const keyword of component.keywords) {
            componentFormData.append('keywords', keyword);
        }

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

async function handleImportProcess(sourceMotifUI, destinationMotifUI, sourceScreenshots, destinationScreenshots) {
    await fse.remove(destinationMotifUI)
        .then(() => console.log('delete motifUI folder successfully'))
        .catch(err => console.log(err))
    await fse.copy(sourceMotifUI, destinationMotifUI)
        .then(() => console.log('copy motifUI folder successfully'))
        .catch(err => console.log(err))
    await fse.remove(destinationScreenshots)
        .then(() => console.log('screenshots folder was removed'))
        .catch(err => console.log(err))
    await fse.copy(sourceScreenshots, destinationScreenshots)
        .then(() => console.log('copy screenshots folder successfully'))
        .catch(err => console.log(err))


    readDirectory(destinationMotifUI)
        .then((result) => extractComponents(result, destinationMotifUI))
        .then((result) => storeScreenshotFolderName(result)
            .then((result) => storePathToScreenshots(result)
                .then((result) => createFormDataForComponent(result))))
}

//final result: components array--> name:compo.name, keywords:[], screenshotFolderName: name, screenshots:[]

if (dangerousUpdateModeArgument) {
    handleImportProcess(pathToMotifUiRepo, motifUiFolder, pathToMotifUIScreenshots, localScreenshots).then(() => console.log('process finished'))
} else {
    console.error('importing process went wrong')
}

module.exports.modeArgument = dangerousUpdateModeArgument