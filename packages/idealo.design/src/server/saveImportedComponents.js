import compo1 from './mockMotifImport/mockedImportedComponent1.json'
import compo2 from './mockMotifImport/mockedImportedComponent2.json'
import compo3 from './mockMotifImport/mockedImportedComponent3.json'
import compo4 from './mockMotifImport/mockedImportedComponent4.json'
import compo5 from "./mockMotifImport/mockedImportedComponent5.json"

function importComponent(jsonfile) {
    return {name: jsonfile.name, keywords: jsonfile.keywords}
}

const importCompo1 = importComponent(compo1)
const importCompo2 = importComponent(compo2)
const importCompo3 = importComponent(compo3)
const importCompo4 = importComponent(compo4)
const importCompo5 = importComponent(compo5)

export const components = [importCompo1, importCompo2, importCompo3, importCompo4, importCompo5]
