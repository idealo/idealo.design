import compo1 from './mockedImportedComponent1.json'
import compo2 from './mockedImportedComponent2.json'
import compo3 from './mockedImportedComponent3.json'
import compo4 from './mockedImportedComponent4.json'
import compo5 from './mockedImportedComponent5.json'

function importComponent(jsonfile) {
    return {name: jsonfile.name, keywords: jsonfile.keywords}
}

const importCompo1 = importComponent(compo1)
const importCompo2 = importComponent(compo2)
const importCompo3 = importComponent(compo3)
const importCompo4 = importComponent(compo4)
const importCompo5 = importComponent(compo5)

export const components = [importCompo1, importCompo2, importCompo3, importCompo4, importCompo5]