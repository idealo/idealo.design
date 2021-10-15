import React from 'react'
import s from "./Footer.module.scss";
import IconFacebook from "./icon_facebook.svg"
import IconInstagram from "./icon_instagram.svg"
import IconTwitter from "./icon_twitter.svg"


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className={s.Footer}>
                <div className={s.Links}>
                    <a href="https://www.idealo.co.uk/privacypolicy.html">Privacy Policy</a>
                    <a href="https://www.idealo.co.uk/terms.html">About/Terms & Conditions</a>
                </div>
                <div className={s.SocialMedia}>
                    <a href="https://www.facebook.com/idealo/"><IconFacebook class={s.icon}/></a>
                    <a href="https://www.instagram.com/idealo/?hl=en"><IconInstagram class={s.icon}/></a>
                    <a href="https://twitter.com/idealo_uk"><IconTwitter class={s.icon}/></a>
                </div>
            </footer>
        )
    }
}

export default Footer;