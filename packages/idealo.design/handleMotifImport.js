const fs = require("fs");
const allMotifComponents = "../idealo.design/src/server/motif-ui-components/"
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

fs.readdir(allMotifComponents, function (err, files) {
    if (err) {
        console.log("Could not list the directory.", err);
        process.exit(1);
    }

    for (let x = 0; x < files.length; x++) {
        const subfolderPath = files[x]
        fs.readdir(allMotifComponents + subfolderPath, function (err, files) {
            fs.readFile(allMotifComponents + subfolderPath + '/package.json', 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                    return err
                } else {
                    const component = JSON.parse(data);
                    allComponents.push({name: component.name, keywords: component.keywords})
                }
            })
        })
    }
})

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