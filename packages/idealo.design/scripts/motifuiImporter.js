const path = require('path')
const http = require('http')
const fse = require('fs-extra')
const fs = require('fs');

const motifUiFolder = path.resolve(__dirname, './../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname, '../../../../motif-ui/src')
const localScreenshots = path.resolve(__dirname, '../src/server/screenshots')
const pathToMotifUIScreenshots = path.resolve(__dirname, '../../../../motif-ui/__screenshots__')

const dangerousUpdateModeArgument = !!process.env.DANGEROUS_UPDATE_MODE_ARGUMENT || false

const options = {
    hostname: '0.0.0.0',
    port: 8080,
    path: '/api/components/update',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
}

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
                result.forEach((storyFile) =>{
                    if(storyFile.indexOf('.story.tsx')!== -1){
                        eachComponent.pathToStoryFile = destinationMotifUI+'/'+subdirectory+'/src/'+storyFile
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

async function storeScreenshotFolderName(storyFileArray) {
    for(let i =0;i<storyFileArray.length;i++){
        await fs.promises.readFile(storyFileArray[i].pathToStoryFile, 'utf8').then((contentOfStoryFile) => {
            if (contentOfStoryFile.includes('const stories = storiesOf(')) {
                const startIndex = contentOfStoryFile.indexOf('storiesOf(')
                const endIndex = contentOfStoryFile.indexOf(', module')
                const screenshotFolder = contentOfStoryFile.substring(endIndex - 1, startIndex + 11)
                storyFileArray[i].screenshotFolderName = screenshotFolder
                delete storyFileArray[i].pathToStoryFile
            }
        })
    }
    return storyFileArray
}

async function storePathToScreenshots(componentsArray){
    for(let i = 0;i<componentsArray.length; i++){
        await fs.promises.readdir(localScreenshots + '/' + componentsArray[i].screenshotFolderName).then((pictures) => {
            for(let x =0;x<pictures.length;x++){
                pictures[x]= pictures[x].replace(/ /g, "_");
            }

            componentsArray[i].screenshots = localScreenshots + '/' + componentsArray[i].screenshotFolderName+'/'+pictures
        })
    }
    return componentsArray
}

function sendDataToHttpRequest(data) {
    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(JSON.stringify(data))
    req.end()
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
                .then((result) => sendDataToHttpRequest(result))))
}

//final result: components array--> name:compo.name, keywords:[], screenshotFolderName: name, screenshots:[]

if (dangerousUpdateModeArgument) {
    handleImportProcess(pathToMotifUiRepo, motifUiFolder, pathToMotifUIScreenshots, localScreenshots).then(() => console.log('process finished'))
} else {
    console.error('importing process went wrong')
}

module.exports.modeArgument = dangerousUpdateModeArgument

