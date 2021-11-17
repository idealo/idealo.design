import React from 'react'
import content from './content.json'
import {withRouter} from "react-router";
import {fetchUserInfo} from "../BlogPage/data";
import LoginMessage from "../../components/LoginMessage/LoginMessage";

export class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            error: null,
        }
    }

    async componentDidMount() {
        const user = await fetchUserInfo()

        if(user.user){
            this.setState({
                user: user,
            });
        }else{
            this.setState({
                error: '401',
            })
        }
    }

    render() {
        if(this.state.user){
            return <WelcomePage {...this.props}/>
        }else if(this.state.error){
            return <LoginMessage children="Library"/>
        }else{
            return <h2>Loading...</h2>
        }
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default withRouter(ComponentsListView);