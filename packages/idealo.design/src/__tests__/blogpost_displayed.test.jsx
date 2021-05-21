import React from 'react';
import { create } from "react-test-renderer"
import { ListView } from "../ui/pages/BlogPage/ListView";
import { BlogDetailView } from "../ui/pages/BlogPage/DetailView";

const mockupBlogpost = {
    "id":1111,
    "title":"A mockup blogpost",
    "nextpost":"docker",
    "previouspost":"mein-erstes-mal-mit-react",
    "categorydisplayvalue":"Docker",
    "categoryslug":"docker",
    "slug":"Einstieg-in-die-Welt-der-Datenbanken",
    "date":"2021-01-20T13:46:44.351Z",
    "image":"https://s12.directupload.net/images/210212/bd5j6kn8.jpg",
    "autor":"Mock-up Post Author",
    "email":"mock-up-posts@gmail.com",
    "instagram":null,
    "twitter":null,
    "github":null,
    "facebook":null,
    "blogpostcontent":{
        "blocks":[{
            "key":"3aovx",
            "data":{},
            "text":"Just some simple mockup text!",
            "type":"unstyled",
            "depth":0,
            "entityRanges":[],
            "inlineStyleRanges":[]
        }],
        "entityMap":{}
    },
    "isarchived":0
}

it('A mock-up blogpost gets rendered and displayed correctly in the DetailView', done => {
    try{
        const detailView = create(<BlogDetailView/>)
        const detailViewInstance = detailView.getInstance();
        expect(detailViewInstance.state.userInfo.status).toString().match('NOT_LOGGED_IN');
        detailViewInstance.setState({blogpost: mockupBlogpost});
        expect(detailView.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error);
    }
})

it('mock-up blogposts gets rendered and displayed correctly in the listview', done => {
    try {
        const listView = create(<ListView />);
        const listViewInstance = listView.getInstance();
        expect(listViewInstance.state.userInfo.status).toString().match('NOT_LOGGED_IN');
        listViewInstance.setState({list: [mockupBlogpost]});
        expect(listView.toJSON()).toMatchSnapshot();
        done();
    }catch (error) {
        done(error)
    }
});