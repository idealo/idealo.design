import React from 'react'
import s from "./Footer.module.scss";

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className={s.Footer}>
                <div className="footer">
                    <a href="https://www.idealo.co.uk/terms.html">About/Terms & Conditions</a>
                    <p>This is some content in sticky footer</p>
                </div>
            </footer>
        )
    }
}

export default Footer;