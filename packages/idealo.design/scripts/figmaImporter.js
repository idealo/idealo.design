import React from 'react';
import fetch from 'node-fetch';

let importFromApiFigma = fetch('https://api.figma.com/v1/files/ybZtLgPiNd2hUWlS2W80DS/', {
    headers: {
        "X-Figma-Token": " --- "
    }
})
    .then(response => response.json())
    .then((data) => {
        getTheIdsfromFigmaApi(data)
    });

function getTheIdsfromFigmaApi(data){
    const titles = [];
    for(const childComponent of data.document.children){
        titles.push(childComponent.name)
        for(const childFrames of childComponent.children ){
            if(childFrames.name.includes('USAGE')){
                for(const childContent of childFrames.children){
                    if(childContent.characters !== undefined){
                        console.log('🎟name:',childContent.name)
                        console.log('🏉characters',childContent.characters)
                        console.log('🚣‍♂️ganzer inhalt', childContent)
                    }
                }
            }
        }
    }
}

