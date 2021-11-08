import React from 'react'
import {fetchSingleComponent} from "./component_data";
import draftToHtml from "../../../vendor/draftjs-to-html";
import HtmlToReact from "html-to-react";
import s from "./ComponentsPage.module.scss";
import Markdown from "markdown-to-jsx";

export class BodyOfDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: "",
            content: [],
        }

        this.convertToHtml = this.convertToHtml.bind(this);
        this.handleDesignImplementation = this.handleDesignImplementation.bind(this);
        this.copyUsageTextToClipboard = this.copyUsageTextToClipboard.bind(this);
        this.copyInstallationTextToClipboard = this.copyInstallationTextToClipboard.bind(this);
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug;
        this.setState({
            component: await fetchSingleComponent({slug}),
        })
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.slug !== this.props.match.params.slug){
            this.componentDidMount()
        }
    }

    handleDesignImplementation(urlFragment){
        if(urlFragment.toLowerCase() === "implementation"){
            return (
                <>
                    {this.state.component.screenshots && this.state.component.screenshots.map((screenshot) => (
                        <div className={s.screenshot} key={screenshot}>
                            <img
                                title={screenshot}
                                src={`https://917999261651-idealo-design-assets.s3.eu-central-1.amazonaws.com/${screenshot}`}
                                alt="image"
                            />
                        </div>
                    ))}
                </>
            )
        }else if(urlFragment.toLowerCase() === "design"){
            return (
                <>
                    {(this.state.component.readme || this.state.component.usage) && (
                        <div>
                            <h2>Usage</h2>
                            {(this.state.component.readme && this.state.component.readme.content.Usage) && (
                                <div>
                                    <button title='copyUsage' id='copyUsage' className={s.copyButton} onClick={this.copyUsageTextToClipboard}>copy</button>
                                    <Markdown
                                        className={s.code}
                                        id="toBeCopiedUsageCode">{this.state.component.readme.content.Usage.body}
                                    </Markdown>
                                </div>
                            )}
                            {(this.state.component.readme && this.state.component.readme.content.Installation) && (
                                <div>
                                    <button title='copyInstallation' id='copyInstallation' className={s.copyButton} onClick={this.copyInstallationTextToClipboard}>copy</button>
                                    <Markdown
                                        className={s.code}
                                        id="toBeCopiedInstallationCode">{this.state.component.readme.content.Installation.body}
                                    </Markdown>
                                </div>
                            )}
                            {this.state.component.usage && (<p>{this.state.component.usage}</p>) }
                        </div>
                    )}

                    {(this.state.component.implementation && this.state.component.implementation.anatomy) && (
                        <div>
                            <br/>
                            <h2>Anatomy</h2>
                            {this.convertToHtml(this.state.component.implementation.anatomy)}
                        </div>
                    )}

                    {(this.state.component.implementation && this.convertToHtml(this.state.component.implementation.guidelines)) && (
                        <div>
                            <br/>
                            <h2>Guidelines</h2>
                            {this.convertToHtml(this.state.component.implementation.guidelines)}
                        </div>
                    )}
                </>
            )
        }
    }


    copyInstallationTextToClipboard(e) {
        const copiedInstallationText = document.getElementById('toBeCopiedInstallationCode').innerText;
        const el = document.createElement("textarea");
        el.value = copiedInstallationText.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.getElementById("copyInstallation").innerText = "copied";
        setTimeout(function () {
            document.getElementById("copyInstallation").innerText = "copy";
        }, 1000);
        document.body.removeChild(el);
    }

    copyUsageTextToClipboard() {
        const copiedUsageText = document.getElementById('toBeCopiedUsageCode').innerText;
        const el = document.createElement("textarea");
        el.value = copiedUsageText.toString();
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.getElementById("copyUsage").innerText = "copied";
        setTimeout(function () {
            document.getElementById("copyUsage").innerText = "copy";
        }, 1000);
        document.body.removeChild(el);
    }

    convertToHtml(content){
        const htmlBlogContent = draftToHtml(content);
        const HtmlToReactParser = HtmlToReact.Parser;
        const htmlToReactParser = new HtmlToReactParser();
        return htmlToReactParser.parse(htmlBlogContent)
    }

    render() {
        let urlFragment = window.location.href.split('#')
        if(urlFragment.length === 2){
            urlFragment = window.location.href.split('#')[1]
        }else{
            urlFragment = ''
        }
        return (
            <>
                {this.handleDesignImplementation(urlFragment)}
            </>
        )

    }
}