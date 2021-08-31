import React from 'react';
import fetch from 'node-fetch';
import axios from "axios";

const SECRET_KEY_FIGMA = process.env.SECRET_KEY_FIGMA || false;

let importFromApiFigma = fetch('https://api.figma.com/v1/files/ybZtLgPiNd2hUWlS2W80DS/', {
    headers: {
        "X-Figma-Token": SECRET_KEY_FIGMA
    }
})
    .then(response => response.json())
    .then((data) => {
        getComponentsFromFigmaApi(data)
            .then((components) => sendDataToHttpRequest(components))
    });

async function getComponentsFromFigmaApi(data){
    let components = [];
    for(const childComponent of data.document.children){
        for(const childFrames of childComponent.children ){
            if(childFrames.name.includes('USAGE')){
                let component = {}
                component.title = childComponent.name
                const groups = []
                for(const childContent of childFrames.children.reverse()){
                    if(childContent.type === "GROUP"){
                        for(const child of childContent.children.reverse()){
                            if(child.type === 'TEXT'){
                                if(child.style.fontSize>18){
                                    groups.push({headline: child.characters})
                                }else{
                                    groups.push({content: child.characters})
                                }
                            }else if(child.type === 'GROUP'){
                                let table = []
                                let counter = 0
                                for(const tableGroup of child.children.reverse()){
                                    if(tableGroup.type === 'GROUP'){
                                        const row = {}
                                        const rowValues = []
                                        for(const value of tableGroup.children.reverse()){
                                            if(value.type === 'TEXT'){
                                                rowValues.push(value.characters)
                                            }
                                        }
                                        row.rowNr = counter
                                        row.rowValues = rowValues
                                        if(row.rowValues.length>0){
                                            table.push(row)
                                        }
                                        counter += 1
                                    }
                                }
                                groups.push({table: table})
                            }
                        }
                        component.content = groups
                    }
                }
                components.push(component)
            }
        }
    }
    return components
}

async function sendDataToHttpRequest(components) {
    const username = process.env.UPLOADER_USERNAME
    const password = process.env.UPLOADER_PWD
    for (const component of components){
        await axios.put(process.env.BASE_URL + '/api/components/import/figma', component, {
            headers: {
                ...component,
            },
            auth: {
                username: username,
                password: password
            }
        })
    }
}