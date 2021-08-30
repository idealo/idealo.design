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
                component.content = []
                let content = []
                for(const childContent of childFrames.children.reverse()){
                    if(childContent.type === "GROUP"){
                        for(const child of childContent.children){
                            if(child.characters !== undefined){
                                if(child.style.fontSize>18){
                                    content.push({titleContent: child.characters})
                                }else{
                                    content.push({content: child.characters})
                                }
                            }
                        }
                    }
                }
                component.content = content
                components.push(component)
            }
        }
    }
    console.log(components)
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