import React from 'react';
import s from "./ErrorPage.module.scss";

class ErrorPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Something went wrong.</h2>
                <a href="/">
                    <button className={s.button}>Landing Page</button>
                </a>
            </div>
        )
    }
}

export default ErrorPage