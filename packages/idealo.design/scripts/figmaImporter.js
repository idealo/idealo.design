import React from 'react';
import fetch from 'node-fetch';

let importFromApiFigma = fetch('https://api.figma.com/v1/files/ybZtLgPiNd2hUWlS2W80DS/', {
    headers: {
        "X-Figma-Token": "218206-02837e42-f682-4cb5-aab6-731b7548b06e"
    }
})
    .then(response => response.json())
    .then((data) => {
        getComponentsFromFigmaApi(data)
    });

function getComponentsFromFigmaApi(data){
    let components = [];
    for(const childComponent of data.document.children){
        components.push({'title': childComponent.name , content: []})
        for(const childFrames of childComponent.children ){
            if(childFrames.name.includes('USAGE')){
                let titlesContent = []
                let contents = []
                for(const childContent of childFrames.children){
                    if(childContent.characters !== undefined){
                        if(childContent.style.textAutoResize === 'WIDTH_AND_HEIGHT'){
                            titlesContent.push({'content': childContent.characters , "x": childContent.absoluteBoundingBox.x, "y": childContent.absoluteBoundingBox.y})
                        }
                        else{
                            contents.push({content:childContent.characters , x: childContent.absoluteBoundingBox.x, y: childContent.absoluteBoundingBox.y})
                        }
                    }
                }

               for(const titleContent of titlesContent){
                    for(const content of contents){
                        if(titleContent.x === content.x && titleContent.y <= content.y && titleContent.y >= content.y-180){
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
    console.log(components)
}

