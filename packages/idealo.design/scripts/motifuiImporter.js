const path = require('path')
const http = require('http')
const fse = require('fs-extra')
const fs = require('fs');
const glob = require('glob')

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
    const components = []
    for (const subdirectory of subdirectories) {
        if (!subdirectory.includes('.') && subdirectory !== 'scripts') {
            await readDirectory(destinationMotifUI + '/' + subdirectory + '/src')
                .then((files) => {
                    const GlobOptions = {matchBase: true, cwd: destinationMotifUI + '/' + subdirectory + '/src'};
                    glob("*.story.tsx", GlobOptions, function (err, storybookFile) {
                        if (err) {
                            console.log(err);
                        } else {
                            const storybookFilePath = storybookFile[0]
                            fs.promises.readFile(destinationMotifUI + '/' + subdirectory + '/src/' + storybookFilePath, 'utf-8').then(function (result) {
                                if (result.includes('const stories = storiesOf(')) {
                                    const startIndex = result.indexOf('storiesOf(')
                                    const endIndex = result.indexOf(', module')
                                    let screenshotFolder = result.substring(endIndex - 1, startIndex + 11)
                                    readDirectory(localScreenshots + '/' + screenshotFolder).then((pictures) => {
                                        fs.promises.readFile(destinationMotifUI + '/' + subdirectory + '/package.json', 'utf8').then(function (result) {
                                            const compo = JSON.parse(result)
                                            if (compo.keywords !== undefined) {
                                                components.push({
                                                    name: compo.name,
                                                    keywords: compo.keywords,
                                                    screenshots: pictures
                                                })
                                            }
                                        })
                                            .catch(function (err) {
                                                console.log(err)
                                            })
                                    })
                                }
                            })
                        }
                    });
                })
        }
    }
    return components
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
        .then((result) => extractComponents(result, destinationMotifUI)).then((result) => sendDataToHttpRequest(result))
}

//final result: components array name:compo.name keywords:[] screenshots:[]

if (dangerousUpdateModeArgument) {
    handleImportProcess(pathToMotifUiRepo, motifUiFolder, pathToMotifUIScreenshots, localScreenshots).then(() => console.log('process finished'))
} else {
    console.error('importing process went wrong')
}

module.exports.modeArgument = dangerousUpdateModeArgument

