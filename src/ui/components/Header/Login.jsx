import React from "react";
import s from "./Header.module.scss";
import {fetchUserInfo} from "../../pages/BlogPage/data";

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.handleOnKeyUp = this.handleOnKeyUp.bind(this)

        this.state = {
            isLoggedIn: false,
            userInfo: {},
            initialString: ''
        }

    }


    async componentDidMount() {
        window.document.addEventListener('keyup', this.handleOnKeyUp)
        try {
            const userInfo = await fetchUserInfo()
            this.setState({userInfo: userInfo})
            const isLoggedIn = userInfo.status === 'LOGGED_IN'
            this.setState({isLoggedIn: isLoggedIn})
            if (this.state.isLoggedIn) {
                const displayName = userInfo.user['displayName'].charAt(0).toUpperCase();
                const surname = userInfo.user['surname'].charAt(0).toUpperCase();
                const initialString = displayName + surname;
                this.setState({initialString})
            }
        } catch (error) {
        }
    }

    componentWillUnmount() {
        window.document.removeEventListener('keyup', this.handleOnKeyUp)
    }

    handleOnKeyUp(event) {
        if (event.ctrlKey && event.which == 70) {
            this.props.onClick()
        }
    }

    render() {
        const searchInputStyle = {
            visibility: this.props.isOpen ? 'visible' : 'hidden',
            width: this.props.isOpen ? '40vw' : 0,
            padding: this.props.isOpen ? '.5rem' : 0,
            margin: this.props.isOpen ? 'auto 2rem auto auto' : 0,
        }

        return (
            <>
                {this.state.isLoggedIn ?
                    <div className={s.loginLogout} style={{display: 'flex'}}>
                        <button style={{margin: '10px'}} className={s.initialsStyle}>{this.state.initialString}</button>
                        <a href="/logout">
                            <button className={s.button} title="logoutButton"><span>Logout</span></button>
                        </a>
                    </div> :
                    <div className={s.loginLogout}>
                        <a href="/auth/provider">
                            <button className={s.button} title="loginButton"><span>Login</span></button>
                        </a>
                    </div>
                }
            </>
        )
    }
}

export default Login;
export {s as styles};