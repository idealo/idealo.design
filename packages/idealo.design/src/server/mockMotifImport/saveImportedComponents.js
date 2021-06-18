/*export function importData() {

    const dataPath = './';
    const components = []

    for(let i=0; i<dataPath.length; i++){
        components.push(importComponent(dataPath[i]))
    }
    return components
}*/

import compo1 from './mockedImportedComponent1.json'
import compo2 from './mockedImportedComponent2.json'
import compo3 from './mockedImportedComponent3.json'
import compo4 from './mockedImportedComponent4.json'

function importComponent(jsonfile){
    return {name: jsonfile.name, keywords: jsonfile.keywords}
}

const importCompo1 = importComponent(compo1)
const importCompo2 = importComponent(compo2)
const importCompo3 = importComponent(compo3)
const importCompo4 = importComponent(compo4)

export const components = [importCompo1,importCompo2, importCompo3, importCompo4]