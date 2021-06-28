const fsextra = require("fs-extra");
const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components/')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

const fs = require("fs");
const allMotifComponents = "../src/server/motif-ui-components/"
const http = require('http')

const allComponents = []
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

async function removeFolder(folder) {
    try{
        await fsextra.remove(folder)
        console.log('delete folder successfully!');

    }catch(e){
        console.error(e)
        throw e
    }
}

function copyFolder(source, destination){
    try{
        fsextra.copy(source, destination, err => {
            if (err) return console.error(err);
            console.log('copied folder successfully!');
        })
    }catch(e){
        console.error(e)
        throw e
    }

}

removeFolder(motifUiFolder).then(()=>{
    copyFolder(pathToMotifUiRepo,motifUiFolder)
})

function readDirectory(directory){
    fs.readdir(directory, function (err, files) {
        if (err) {
            console.log("Could not list the directory.", err);
            process.exit(1);
        }
        for (let x = 0; x < files.length; x++) {
            const subfolderPath = files[x]
            if(!files[x].includes(".")){
                fs.readdir(directory + subfolderPath, function (err, files) {
                    fs.readFile(directory + subfolderPath + '/package.json', 'utf8', (err, data) => {
                        if (err) {
                            console.log(err)
                            return err
                        } else {
                            const component = JSON.parse(data);
                            if(component.keywords!==undefined){
                                allComponents.push({name: component.name, keywords: component.keywords})
                            }
                        }
                    })
                })
            }
        }
    })
}

readDirectory(allMotifComponents)
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






