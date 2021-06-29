const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

const fs = require("fs");
const fsp = require("fs").promises
const fse = require("fs-extra")
const allMotifComponents = "../src/server/motif-ui-components/"
const http = require('http')

let allComponents = []
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
    return await fsp.readdir(directory, (err) => {
        if (err) {
            console.log("Could not list the directory.", err);
            process.exit(1);
        }
    });
}

async function readPackageJsons (files){
    await files.forEach(file => {
        if(!file.includes('.')){
            fs.readFile(allMotifComponents + file + '/package.json', 'utf8', (err, data) => {
                const compo = JSON.parse(data)
                if (err) {
                    console.log(err)
                    return err
                }else{
                    if(compo.keywords!==undefined){
                        allComponents.push({name: compo.name, keywords: compo.keywords})
                    }
                }
            });
        }
    })
}
async function handleImportProcess(source, destination, directory){
    await fse.remove(destination)
        .then(()=> console.log('delete folder successfully'))
        .catch(err => console.log(err))
    await fse.copy(source, destination)
        .then(()=>console.log('copy folder successfully'))
        .catch(err => console.log(err))
    readDirectory(directory)
        .then((result)=>readPackageJsons(result))
}

function sendDataToHttpRequest(data){
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

if(dangerousUpdateModeArgument){
    handleImportProcess(pathToMotifUiRepo, motifUiFolder, allMotifComponents)
    //sendDataToHttpRequest(allComponents)
    setTimeout(()=>{
        sendDataToHttpRequest(allComponents)
    },3000)
}else{
    console.error('something went wrong')
}

module.exports.modeArgument = dangerousUpdateModeArgument







