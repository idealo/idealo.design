import React from 'react'
import content from './content.json'
import {withRouter} from "react-router";
import {fetchUserInfo} from "../BlogPage/data";
import LoginMessage from "../../components/LoginMessage/LoginMessage";
import s from "./WelcomePage.module.scss";

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
            return <WelcomePageContent {...this.props}/>
        }else if(this.state.error){
            return <LoginMessage children="Library"/>
        }else{
            return <h2>Loading...</h2>
        }
    }
}

function RenderElement(props) {
    const elem = props.elem

    switch (elem.type) {
        case 'p':
            return <p dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h1':
            return <h1 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h2':
            return <h2 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h3':
            return <h3 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h4':
            return <h4 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h5':
            return <h5 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'link':
            return <a className={s.a} href={elem.href}>{elem.name}</a>
        case 'img':
            return <img src={elem.src}/>
    }
}

class WelcomePageContent extends React.Component {

    render() {
        const {elements} = content
        return (
            <div>
                {elements.map((elem, idx) => <RenderElement key={idx} elem={elem}/>)}
            </div>
        );
    }
}

export default withRouter(WelcomePage);
