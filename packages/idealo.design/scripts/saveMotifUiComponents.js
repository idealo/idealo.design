/*
 git clone ssh://git@code.eu.idealo.com:7999/sfeco/motif-ui.git into your folder where npw is
 */

const fs = require("fs");
const fse = require("fs-extra");
const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

//create folder motif-ui-components
try {
    if (fs.existsSync(motifUiFolder)) {
        const removeFolder = () => {
            fs.rmdir(motifUiFolder, { recursive: true }, (err) => {
                if (err) {
                    throw err;
                }
            })
        }
    }

    fse.copy(pathToMotifUiRepo, motifUiFolder, err => {
        if (err) return console.error(err);
        console.log('copied folder successfully!');
    })

} catch (err) {
    console.error(err)
}
