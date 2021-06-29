const fs = require("fs-extra");
const path= require('path')

const pathToMotifUIScreenshots = path.resolve(__dirname,'../../../../motif-ui/__screenshots__')
const localScreenshots = path.resolve(__dirname,'../src/server/screenshots')

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

//copy all screenshots to server/screenshots directory
removeFolder(localScreenshots).then(()=>{
   copyFolder(pathToMotifUIScreenshots, localScreenshots)
})

//read all the screenshot subdirectories
//create array of all screenshots that belong to one component

//check api functions to add created_at and picture