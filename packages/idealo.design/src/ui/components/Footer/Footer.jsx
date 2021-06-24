import React from 'react'
import s from "./Footer.module.scss";

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className={s.Footer}>
                <div className="footer-links">
                    <a href="https://www.idealo.co.uk/terms.html">Privacy</a>
                    <a href="https://www.facebook.com/idealo/"><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/>Facebook</a>

                    <a href="https://www.idealo.co.uk/privacypolicy.html">About/Terms & Conditions</a>
                    <p>This is some content in sticky footer</p>
                    //put links for social media here
                    <a href="https://www.facebook.com/idealo/"><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/>Facebook</a>
                    <a href="https://twitter.com/idealo_uk"><img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/>twitter</a>

                </div>
            </footer>
        )
    }
}

export default Footer;