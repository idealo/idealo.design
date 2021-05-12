import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../ui/components/Header/Header';

it('logout renders correctly', () => {
    const logoutTest = renderer
        .create(<Search/>)
        .toJson();
    logoutTest.setState({isLoggedIn:true});
    expect(logoutTest).toMatchSnapshot();
});