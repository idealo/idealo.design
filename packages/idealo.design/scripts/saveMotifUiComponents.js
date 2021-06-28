const fs = require("fs-extra");
const path= require('path')

const motifUiFolder = path.resolve(__dirname,'../src/server/motif-ui-components')
const pathToMotifUiRepo = path.resolve(__dirname,'../../../../motif-ui/src')

async function removeFolder(folder) {
    try{
        await fs.remove(folder)
        console.log('delete folder successfully!');

    }catch(e){
        console.error(e)
        throw e
    }
}

function copyFolder(source, destination){
    try{
        fs.copy(source, destination, err => {
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

