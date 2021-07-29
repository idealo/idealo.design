import React from "react";
import Markdown from "markdown-to-jsx";

import s from "./ComponentsPage.module.scss";

import { withRouter } from "react-router";
import { fetchSingleComponent } from "./component_data";

export class ComponentsDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.copyTextToClipboard = this.copyTextToClipboard.bind(this)

    this.state = {
      slug: "",
      component: {},
      links: [],
      URLOptions: "",
      result: "",
    };
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    if (slug) {
      this.setState({
        component: await fetchSingleComponent({ slug }),
        slug: slug,
        links: [
          "Design",
          "Installation",
          "Usage"
        ],
      });
      if (window.location.href.includes("#")) {
        await this.updateComponentDetailView();
      }
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
      }else {
        this.setState({
          result: ""
        })
      }
    } catch (e) {}
  }

  copyTextToClipboard() {
    const copiedText = document.getElementById('toBeCopiedCode').innerText
    const el = document.createElement('textarea')
    el.value = copiedText.toString()
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy");
    alert('copied')
    document.body.removeChild(el)
  }

  showInstallation() {
    const installation = this.state.component.readme.content.Installation.body;
    const installationAsHtml =
        <div>
          <button className={s.copyButton} onClick={this.copyTextToClipboard}>copy</button>
          <Markdown
              className={s.code}
              id="toBeCopiedCode"
              onClick={this.copyTextToClipboard}>{installation}
          </Markdown>
        </div>
    this.setState({ result: installationAsHtml });
  }

  showDesign() {
    const design = (
      <div>
        {this.state.component.screenshots.map((screenshot) => (
          <div className={s.screenshot} key={screenshot}>
            <img
              src={`http://localhost:8080/api/screenshots/${screenshot}`}
              alt="image"
            />
          </div>
        ))}
      </div>
    );
    this.setState({ result: design });
  }

  showUsage() {
    const usage = this.state.component.readme.content.Usage.body;
    const usageAsHtml =
        <div>
          <button className={s.copyButton} onClick={this.copyTextToClipboard}>copy</button>
          <Markdown
              className={s.code}
              id="toBeCopiedCode">{usage}
          </Markdown>
        </div>
    this.setState({ result: usageAsHtml });
  }

  render() {
    return (
      <div>
        <div className={s.headerNav}>
          <h1 title='componentDetailViewTitle'>{this.state.component.title}</h1>
          <p>----------------------------</p>
          <ul>
            {this.state.links.map((link, key) => (
                <li key={key}>
                  <a title={link} href={`#${link}`}>{link}</a>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <code>{this.state.result}</code>
        </div>
      </div>
    );
  }
}

export default withRouter(ComponentsDetailView);