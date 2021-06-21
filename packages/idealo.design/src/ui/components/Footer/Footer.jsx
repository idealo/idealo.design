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
                    <p>This is some content in sticky footer</p>
                </div>
            </footer>
        )
    }
}

export default Footer;