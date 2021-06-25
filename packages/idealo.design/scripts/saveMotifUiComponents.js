const fs = require("fs");
const fse = require("fs-extra");
const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

const removeFolder = () => {
    fs.rmdir(motifUiFolder, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        console.log('delete folder successfully!');
    })
}

const copyFolder = () => {
    fse.copy(pathToMotifUiRepo, motifUiFolder, err => {
        if (err) return console.error(err);
        console.log('copied folder successfully!');
    })
}

try {
    removeFolder()
    setTimeout(()=>{
        copyFolder()
        },3000
    )
} catch (err) {
    console.error(err)
}
