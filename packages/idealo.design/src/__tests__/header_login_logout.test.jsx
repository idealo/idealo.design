import React from 'react';
import { create } from "react-test-renderer"
import Search from '../ui/components/Header/Search';
import ListView from "../ui/pages/BlogPage/ListView";

it('login renders correctly', () => {
    const logoutTest = create(<Search/>);
    expect(logoutTest.toJSON()).toMatchSnapshot();
});

it('logout renders correctly', done => {
    try{
        const logoutTest = create(<Search />);
        const instance = logoutTest.getInstance();
        expect(instance.state.isLoggedIn).toBe(false);
        instance.setState({isLoggedIn:true});
        expect(instance.state.isLoggedIn).toBe(true);
        expect(logoutTest.toJSON()).toMatchSnapshot();
        done();
    }catch(error){
        done(error);
    }
});

/*// when user is logged in -> user sees new blogpost button
it('new blogpost button is shown', () => {
    const listView = create(<ListView />);
    const instance = listView.getInstance();
    console.log(instance);


});

it('new blogpost button is not shown', () => {
    // const listView = create(<ListView />);
    expect(true).toBeTruthy();

});*/

// when user is logged in -> user sees edit button
