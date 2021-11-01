import React from "react";
import Markdown from "markdown-to-jsx";

import s from "./ComponentsPage.module.scss";

import {Redirect, withRouter} from "react-router";
import {deleteSingleComponent, fetchSingleComponent} from "./component_data";
import Prompt from "../../components/Prompt";

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
        this.copyTextToClipboard = this.copyTextToClipboard.bind(this);

        this.state = {
            slug: "",
            component: {},
            links: [],
            URLOptions: "",
            result: "",
            titleAfterBackslash: "",
            isPromptOpen: false
        };

        this.handleDeletion = this.handleDeletion.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.onModalLeave = this.onModalLeave.bind(this);
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug;
        if (slug) {
            this.setState({
                component: await fetchSingleComponent({ slug }),
                slug: slug,
                links: ["Design", "Installation", "Usage"],
            });
            if (window.location.href.includes("#")) {
                await this.updateComponentDetailView();
            }
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
            await this.updateComponentDetailView();
        }
    }

    async updateComponentDetailView() {
        try {
            const slug = window.location.href;
            if (slug.includes("Installation")) {
                this.showInstallation();
            } else if (slug.includes("Usage")) {
                this.showUsage();
            } else if (slug.includes("Design")) {
                this.showDesign();
            } else {
                this.setState({
                    result: "",
                });
            }
        } catch (e) {}
    }

    copyTextToClipboard() {
        const copiedText = document.getElementById("toBeCopiedCode").innerText;
        const el = document.createElement("textarea");
        el.value = copiedText.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.getElementById("copyInstallation").innerText = "copied";
        setTimeout(function () {
            document.getElementById("copyInstallation").innerText = "copy";
        }, 1000);
        document.body.removeChild(el);
    }

    showInstallation() {
        let installation;
        if(this.state.component.readme){
            installation = this.state.component.readme.content.Installation.body
        }else if(this.state.component.definition){
            installation = this.state.component.definition
        }
        const installationAsHtml =
            <div>
                {this.state.component.readme ? (
                    <div>
                        <button title='copyInstallation' id='copyInstallation' className={s.copyButton} onClick={this.copyTextToClipboard}>copy</button>
                        <Markdown
                            className={s.code}
                            id="toBeCopiedCode">{installation}
                        </Markdown>
                    </div>
                ): (
                    <p>{installation}</p>
                )}
            </div>
        this.setState({ result: installationAsHtml });
    }

    showDesign() {
        const design = (
            <div>
                {this.state.component.screenshots.map((screenshot) => (
                    <div className={s.screenshot} key={screenshot}>
                        <img
                            title={screenshot}
                            src={`https://917999261651-idealo-design-assets.s3.eu-central-1.amazonaws.com/${screenshot}`}
                            alt="image"
                        />
                    </div>
                ))}
            </div>
        );
        this.setState({ result: design });
    }

    showUsage() {
        let usage
        if(this.state.component.readme){
            usage = this.state.component.readme.content.Usage.body;
        }else if(this.state.component.usage){
            usage = this.state.component.usage
        }

        const usageAsHtml =
            <div>
                {this.state.component.readme ? (
                    <div>
                        <button title='copyUsage' id='copyInstallation' className={s.copyButton} onClick={this.copyTextToClipboard}>copy</button>
                        <Markdown
                            className={s.code}
                            id="toBeCopiedCode">{usage}
                        </Markdown>
                    </div>
                ): (
                    <p>{usage}</p>
                )}
            </div>
        this.setState({ result: usageAsHtml });
    }

    handlePopup() {
        this.setState({ isPromptOpen: true });
    }

    onModalLeave() {
        this.setState({ isPromptOpen: false });
        this.props.history.push(`/library/${this.state.component.slug}`);
    }

    handleDeletion(){
        deleteSingleComponent({component: this.state.component})
            .then(this.props.history.push("/library"))
    }

    render() {
        return (
            <div>
                <div className={s.headerNav}>
                    <h1 className={s.titleDetailView} title={this.state.component.title}>
                        {this.state.titleAfterBackslash}
                    </h1>
                    <hr/>
                    <ul>
                        {this.state.links.map((link, key) => (
                            <li key={key}>
                                <a title={link} href={`#${link}`}>
                                    {link}
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
                        <button title="buttonToBitbucket" className={s.buttonToBitbucket}>
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
                <div>
                    <code>{this.state.result}</code>
                </div>

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