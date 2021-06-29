const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

const fs = require("fs");
const fsp = require("fs").promises
const fse = require("fs-extra")
const allMotifComponents = "../src/server/motif-ui-components/"
const http = require('http')

let allComponents = []

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
    });
}

async function handleImportProcess(source, destination, directory){
    await fse.remove(destination)
        .then(()=> console.log('delete folder successfully!'))
        .catch(err => console.log(err))
    await fse.copy(source, destination)
        .then(()=> console.log('copied successfully'))
        .catch(err => console.log(err))
    readDirectory(directory)
        .then((result)=>readPackageJsons(result))
}

handleImportProcess(pathToMotifUiRepo, motifUiFolder, allMotifComponents).then(()=>{
    //wait a moment until components-array is filled
    setTimeout(() => {
            const req = http.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)

                res.on('data', d => {
                    process.stdout.write(d)
                })
            })

            req.on('error', error => {
                console.error(error)
            })

            const data = JSON.stringify(allComponents)

            req.write(data)
            req.end()

        }, 3000
    )
})








