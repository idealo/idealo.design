import React from 'react'
import s from "./Footer.module.scss";

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
                    <a href="https://www.facebook.com/idealo/"><img src="https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Icon-Dark.png" alt="Facebook Logo" height={40} width={40}/></a>
                    <a href="https://twitter.com/idealo_uk"><img src="https://www.vectorico.com/wp-content/uploads/2018/02/Instagram-Icon.png" alt="Instagram Logo"height={40} width={40}/></a>
                    <a href="https://twitter.com/idealo_uk"><img src="https://www.vectorico.com/wp-content/uploads/2018/02/Twitter-Social-Icon.png" alt="Twitter Logo" height={40} width={40}/></a>
                </div>
            </footer>
        )
    }
}

export default Footer;