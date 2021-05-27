import React from "react";
import s from "./Header.module.scss";
import CloseIco from "./ico_cross_circle_outline.svg";
import MagnifierIco from "./ico_search.svg";
import { fetchUserInfo } from "../../pages/BlogPage/data";
import withStyles from "isomorphic-style-loader/withStyles";

class Search extends React.Component {

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
        try{
            const userInfo = await fetchUserInfo()
            this.setState({userInfo:userInfo})
            const isLoggedIn = userInfo.status === 'LOGGED_IN'
            this.setState({isLoggedIn:isLoggedIn})
            if(this.state.isLoggedIn){
                const displayName = userInfo.user['displayName'].charAt(0).toUpperCase();
                const surname = userInfo.user['surname'].charAt(0).toUpperCase();
                const initialString = displayName + surname;
                this.setState({initialString})
            }
        }catch (error){
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
                    <div>
                        <button className={s.initialsStyle}>{this.state.initialString}</button>
                        <a href="/logout"><button className={s.logoutButton} title="logoutButton"><span>Logout</span></button></a>
                    </div> :
                    <a href="/auth/provider"><button className={s.loginButton} title="loginButton"><span>Login</span></button></a>
                }

            </>
        )
    }
}

export default Search;
export { s as styles };