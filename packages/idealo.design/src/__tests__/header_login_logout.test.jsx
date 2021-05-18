import React from 'react';
import { create } from "react-test-renderer"
import Search from '../ui/components/Header/Search';
import {ListView}from "../ui/pages/BlogPage/ListView";
import {shallow}  from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withRouter} from "react-router";

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

//when user is logged in -> user sees new blogpost button
it('new blogpost button is shown', done => {
    //Enzyme.configure({ adapter: new Adapter() });
    /*jest.mock('react-router-dom', () => ({
        useParams: jest.fn().mockReturnValue({ slug: '' }),
    }));*/
    // const listView = shallow(<ListView />);
    try {
        const listView = create(<ListView />);
        const instance = listView.getInstance();
        expect(instance).toMatchSnapshot();
        done();
    }catch(error){
        done(error)
    }



});

/*Enzyme.configure({ adapter: new Adapter() });

describe('new blogpost button is shown', () => {

    jest.mock('react-router', () => ({
        ...jest.requireActual('react-router'),
        useParams: jest.fn().mockReturnValue({ slug: '' }),
    }));

    it('renders', () => {
        const wrapper = shallow(<ListView />);
        expect(wrapper).toBeTruthy();
    });

});*/

/*it('new blogpost button is not shown', () => {
    const listView = create(<ListView />);
    const instance = listView.getInstance();
    console.log(instance)
    expect(true).toBeTruthy();

});*/

// when user is logged in -> user sees edit button
