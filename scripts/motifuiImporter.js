import path from 'path';
import fse from 'fs-extra';
import fs from 'fs';
import FormData from 'form-data';
import axios from 'axios';
import jsonMark from 'jsonmark'

const __dirname = path.resolve();
const localMotifUiComponents = path.resolve(__dirname, './motif-ui-components/')
const localScreenshots = path.resolve(__dirname, './screenshots')
const pathToMotifUiRepo = path.resolve(__dirname, '../../motif-ui/src')
const pathToMotifUIScreenshots = path.resolve(__dirname, '../../motif-ui/__screenshots__')
const localPathToMotifUIScreenshots = path.resolve(__dirname, './../resources/static/assets/uploads')

async function readDirectory(directory) {
    return fs.promises.readdir(directory, (err) => {
        if (err) {
            console.log("Could not list the directory.", err);
            process.exit(1);
        }
    });
}

async function createPathToMotifUiScreenshots(){
    fs.mkdir(localPathToMotifUIScreenshots, {recursive: true}, (err) => {
        if(err) throw err;
    });
}

export async function extractComponents(subdirectories) {
    let components = []
    for (const subdirectory of subdirectories) {
        const eachComponent = {}
        if (!subdirectory.includes('.') && subdirectory !== 'scripts'){
            await fs.promises.readFile(localMotifUiComponents+'/'+subdirectory+'/package.json','utf-8').then((stringContentOfPackageJson)=>{
                const packageJsonAsJson = JSON.parse(stringContentOfPackageJson)
                if (packageJsonAsJson.keywords !== undefined) {
                    eachComponent.name = packageJsonAsJson.name
                    eachComponent.keywords = packageJsonAsJson.keywords
                }
            })
            await fs.promises.readFile(localMotifUiComponents+'/'+subdirectory+'/README.md','utf-8').then((stringContentOfReadMe)=>{
                const readmeAsJson = jsonMark.parse(stringContentOfReadMe)
                const stringifiedJSON = JSON.stringify(readmeAsJson)
                eachComponent.readme = stringifiedJSON
            })
        }

        if (!subdirectory.includes('.') && subdirectory !== 'scripts') {
            await fs.promises.readdir(localMotifUiComponents+'/'+subdirectory+'/src', (err) =>{
                if(err){
                    console.log(err);
                }
            }).then((result)=>{
                result.forEach((filename) =>{
                    if(filename.indexOf('.story.tsx')!== -1){
                        eachComponent.pathToStoryFile = localMotifUiComponents+'/'+subdirectory+'/src/'+filename
                    }
                })
            })
        }
        if(Object.entries(eachComponent).length!==0){
            components.push(eachComponent)
        }
    }
    return components
}

export async function storeScreenshotFolderName(components) {
    for(const component of components){
        await fs.promises.readFile(component.pathToStoryFile, 'utf8').then((contentOfStoryFile) => {
            if (contentOfStoryFile.includes('const stories = storiesOf(')) {
                const startIndex = contentOfStoryFile.indexOf('storiesOf(')
                const endIndex = contentOfStoryFile.indexOf(', module')
                component.screenshotFolderName = contentOfStoryFile.substring(endIndex - 1, startIndex + 11)
                delete component.pathToStoryFile
            }
        })
    }
    return components
}

export async function storeNameOfScreenshots(components){
    for(const component of components){
        await fs.promises.readdir(localScreenshots + '/' + component.screenshotFolderName).then((screenshots) => {
            component.screenshots = screenshots
        })
    }
    return components
}

export async function createFormDataForComponents(components) {
    for (const component of components) {

        await fs.mkdirSync(localPathToMotifUIScreenshots+'/'+component.screenshotFolderName, (err) => {
            if (err) {
                throw err;
            }
        });
        const componentFormData = new FormData();

        componentFormData.append('name', component.name);
        for (const keyword of component.keywords) {
            componentFormData.append('keywords', keyword);
        }

        componentFormData.append('screenshotFolderName', component.screenshotFolderName);
        componentFormData.append('readme', component.readme);

        for (const screenshot of component.screenshots) {
            const screenshotBuffer = await fs.readFileSync(localScreenshots + '/' + component.screenshotFolderName + '/' + screenshot);
            const screenshotName= screenshot.replace(/ /g, "_");
            componentFormData.append('screenshots', screenshotBuffer, screenshotName);
        }
        component.formData = componentFormData
    }
    return components
}

async function sendDataToHttpRequest(components) {
    const username = process.env.UPLOADER_USERNAME
    const password = process.env.UPLOADER_PWD
    for (const component of components){
        const componentFormData = component.formData
        await axios.put(process.env.BASE_URL + '/api/components/update', componentFormData, {
            headers: {
                ...componentFormData.getHeaders(),
            },
            auth: {
                username: username,
                password: password
            }
        });
    }
}

async function handleImportProcess() {
    await fse.remove(localMotifUiComponents)
        .catch(err => console.log(err))
    await fse.copy(pathToMotifUiRepo, localMotifUiComponents)
        .catch(err => console.log(err))
    await fse.remove(localScreenshots)
        .catch(err => console.log(err))
    await fse.copy(pathToMotifUIScreenshots, localScreenshots)
        .catch(err => console.log(err))
    await fse.remove(localPathToMotifUIScreenshots)
        .catch(err => console.log(err))

    await createPathToMotifUiScreenshots()
    const subdirectories = await readDirectory(localMotifUiComponents)
    const components = await extractComponents(subdirectories)
    const componentsWithScreenshotFolderNames = await storeScreenshotFolderName(components)
    const componentsWithScreenshotPath = await storeNameOfScreenshots(componentsWithScreenshotFolderNames)
    const componentsWithFormData = await createFormDataForComponents(componentsWithScreenshotPath)
    await sendDataToHttpRequest(componentsWithFormData)
}

handleImportProcess().then(() => console.log('import process finished'))