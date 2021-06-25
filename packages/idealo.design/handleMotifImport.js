const fs = require("fs");
const allMotifComponents = "../idealo.design/src/server/motif-ui-components/"
const https = require('https')
const options = {
    hostname: '0.0.0.0',
    port: 8080,
    path: '/api/components/update',
    method: 'PUT'
}

const allComponents = []
fs.readdir(allMotifComponents, function (err, files) {
    if(err){
        console.log("Could not list the directory.", err);
        process.exit(1);
    }

    for(let x=0; x<files.length; x++){
        const subfolderPath = files[x]
        fs.readdir(allMotifComponents+subfolderPath, function (err, files) {
            fs.readFile(allMotifComponents+subfolderPath+'/package.json', 'utf8', (err, data) => {
                if(err) {
                    console.log(err)
                    return err
                } else {
                    const component = JSON.parse(data);
                    allComponents.push({name: component.name, keywords: component.keywords})
                    // console.log('one component', allComponents)
                }
            })
        })
    }
})

setTimeout(()=>{
        console.log('all components', allComponents)
    },3000
)

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()
