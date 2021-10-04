import React from "react";
import s from "./Header.module.scss";
import CloseIco from "./ico_cross_circle_outline.svg";
import MagnifierIco from "./ico_search.svg";
import {fetchUserInfo} from "../../pages/BlogPage/data";

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
        this.handleLoginLogout = this.handleLoginLogout.bind(this)

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

    handleLoginLogout(){
        if (typeof window !== 'undefined') {
            localStorage.setItem('lastVisitedPage', window.location.pathname)
        }
        /*if (typeof window !== 'undefined') {
            const name = "lastVisitedPage"
            const value = window.location.pathname
            document.cookie = name + "=" + value + ";"
            console.log(document)
        }*/
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
                <input
                    style={searchInputStyle}
                    className={s.SearchInput}
                    onTransitionEnd={event => {
                        event.persist()
                        event.target.focus()
                        event.target.value = ''
                    }}
                    autoFocus/>

                {this.props.isOpen ?
                    <CloseIco className={s.SearchToggle} onClick={this.props.onClick}/> :
                    <MagnifierIco className={s.SearchToggle} onClick={this.props.onClick}/>}

                {this.state.isLoggedIn ?
                    <div className={s.loginLogout} style={{display:'flex'}}>
                        <button style={{margin:'10px'}} className={s.initialsStyle}>{this.state.initialString}</button>
                        <a href="/logout">
                            <button onClick={this.handleLoginLogout} className={s.button} title="logoutButton"><span>Logout</span></button>
                        </a>
                    </div> :
                    <div className={s.loginLogout}>
                        <a href="/auth/provider">
                            <button onClick={this.handleLoginLogout} className={s.button} title="loginButton"><span>Login</span></button>
                        </a>
                    </div>
                }
            </>
        )
    }
}

export default Search;
export {s as styles};