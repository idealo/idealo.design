import React from 'react';
import { create } from "react-test-renderer"
import Search from '../ui/components/Header/Header';

it('login renders correctly', () => {
    const logoutTest = create(<Search/>);
    expect(logoutTest.toJSON()).toMatchSnapshot();
});

it('logout renders correctly', () => {
    const logoutTest = create(<Search />);
    const instance = logoutTest.getInstance();
    expect(instance.state.isLoggedIn).toBe(false);
    instance.setState({isLoggedIn:true});
    expect(instance.state.isLoggedIn).toBe(true);
    expect(logoutTest.toJSON()).toMatchSnapshot();
});


/*
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(() => {
            return { text: "PROCEED TO CHECKOUT" };
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.text || this.props.text}
            </button>
        );
    }
}

describe("Button component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<Button text="SUBSCRIBE TO BASIC" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });
});
*/
