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
        components.push({'title': childComponent.name , content: []})
        for(const childFrames of childComponent.children ){
            if(childFrames.name.includes('USAGE')){
                let titlesContent = []
                let contents = []
                for(const childContent of childFrames.children){
                    if(childContent.characters !== undefined){
                        if(childContent.style.textAutoResize === 'WIDTH_AND_HEIGHT' && childContent.style.fontSize >20){
                            titlesContent.push({'content': childContent.characters , "x": childContent.absoluteBoundingBox.x, "y": childContent.absoluteBoundingBox.y})
                        }
                        else{
                            contents.push({content:childContent.characters , x: childContent.absoluteBoundingBox.x, y: childContent.absoluteBoundingBox.y})
                        }
                    }
                }

               for(const titleContent of titlesContent){
                    for(const content of contents){
                        if((Math.abs(titleContent.x - content.x)<2) && titleContent.y <= content.y && ((content.y - titleContent.y) <100)){
                            for(const component of components){
                                if(component.title === childComponent.name){
                                    component.content.push({'titleContent': titleContent.content, 'content': content.content})
                                }
                            }
                        }
                    }
                }
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