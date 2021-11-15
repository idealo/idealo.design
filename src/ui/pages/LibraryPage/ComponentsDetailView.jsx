import React from "react";
import s from "./ComponentsPage.module.scss";

import {Redirect, withRouter} from "react-router";
import {deleteSingleComponent, fetchSingleComponent} from "./component_data";
import Prompt from "../../components/Prompt";
import {BodyOfDetailView} from "./BodyOfDetailView";

export class ComponentsDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: null,
            error: null,
        }
    }

    async componentDidMount() {
        const component = await fetchSingleComponent({slug: this.props.match.params.slug})

        if(component){
            this.setState({
                component: component,
            });
        }else{
            this.setState({
                error: '404',
            })
        }
    }

    render() {
        if(this.state.component){
            return <Component {...this.props}/>
        }else if(this.state.error){
            return <Redirect to="/error"/>
        }else{
            return <h2>Loading...</h2>
        }
    }
}

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: "",
            component: {},
            links: [],
            URLOptions: "",
            titleAfterBackslash: "",
            isPromptOpen: false
        };

        this.goBack = this.goBack.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.onModalLeave = this.onModalLeave.bind(this);
        this.handleActiveLink = this.handleActiveLink.bind(this);
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug;
        if (slug) {
            this.setState({
                component: await fetchSingleComponent({ slug }),
                slug: slug,
                links: ["Design", "Implementation"],
            });

            const titleAfterBackslash = this.state.component.title.substr(
                this.state.component.title.indexOf("/") + 1,
                this.state.component.title.length
            );
            this.setState({
                titleAfterBackslash: titleAfterBackslash,
            });
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (window.location.href.includes("#")) {
            this.handleActiveLink(window.location.href)
        }

        if(prevProps.match.params.slug !== this.props.match.params.slug){
            this.componentDidMount()
        }
    }

    handlePopup() {
        this.setState({ isPromptOpen: true });
    }
  
    handleActiveLink(e) {
        const targetOfLink = e.split('#')[1]
        const links = document.getElementsByTagName('a')
        const classOfActiveLink = s.activeLink
        for (let link of links) {
            const splitLink = link.href.split('#')
            if (splitLink.length === 2) {
                if (splitLink[1] === targetOfLink) {
                    link.classList.add(classOfActiveLink);
                } else {
                    link.classList.remove(classOfActiveLink)
                }
            }
        }
    }

    onModalLeave() {
        this.setState({ isPromptOpen: false });
        this.props.history.push(`/library/${this.state.component.slug}`);
    }

    handleDeletion(){
        deleteSingleComponent({component: this.state.component})
            .then(this.props.history.push("/library"))
    }

    handleActiveLink(e) {
        const targetOfLink = e.split('#')[1]
        const links = document.getElementsByTagName('a')
        const classOfActiveLink = s.activeLink
        for (let link of links) {
            const splitLink = link.href.split('#')
            if(splitLink.length===2){
                if (splitLink[1] === targetOfLink) {
                    link.classList.add(classOfActiveLink);
                }else{
                    link.classList.remove(classOfActiveLink)
                }
            }
        }
    }
    
    goBack() {
        this.props.history.push({
            pathname: `/library`,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.goBack} className= {`${s.button} ${s.goBackButton}`}>Go Back</button>
                <div className={s.headerNav}>
                    <h1 className={s.titleDetailView} title={this.state.component.title}>
                        {this.state.titleAfterBackslash}
                    </h1>
                    <hr/>
                    <p>{this.state.component.definition}</p>
                    <ul>
                        {this.state.links.map((link, key) => (
                            <li key={key}>
                                <a id="link"
                                   className={s.links}
                                   title={link} href={`#${link}`}>{link}
                                </a>
                            </li>
                        ))}
                        <button
                            className={s.DeleteButton}
                            onClick={this.handlePopup}>delete
                        </button>
                        <button className={s.EditButton}>
                            <a className={s.LinkToEditButton}
                               href={`/library/${this.state.component.slug}/edit`}>edit</a>
                        </button>
                        <button title="buttonToBitbucket" className={`${s.button} ${s.buttonToBitbucket}`}>
                            <a
                                title="linkToBitbucket"
                                className={s.LinkToBitbucket}
                                target="_blank"
                                href={`https://code.eu.idealo.com/projects/SFECO/repos/motif-ui/browse/src/${this.state.titleAfterBackslash}/src/`}
                            >
                                Link to Bitbucket
                            </a>
                        </button>
                    </ul>
                </div>
                <BodyOfDetailView {...this.props}/>
                <Prompt
                    show={this.state.isPromptOpen}
                    onLeave={this.handleDeletion}
                    onHide={this.onModalLeave}
                    message="Do you want to delete this component?"
                />
            </div>
        );
    }
}

export default withRouter(ComponentsDetailView);