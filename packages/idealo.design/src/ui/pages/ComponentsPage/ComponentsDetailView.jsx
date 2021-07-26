import React from "react";

import s from "./ComponentsPage.module.scss";

import { withRouter } from "react-router";
import { fetchSingleComponent } from "./component_data";

export class ComponentsDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.showInstallation = this.showInstallation.bind(this);
    this.showUsage = this.showUsage.bind(this);
    this.showDesign = this.showDesign.bind(this);
    this.updateComponentDetailView = this.updateComponentDetailView.bind(this);

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
          "Usage",
          "Story Source",
          "Prop Types",
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
      }
    } catch (e) {}
  }

  showInstallation() {
    const allReadmeContent = this.state.component.readme.content;
    const inst = allReadmeContent[Object.keys(allReadmeContent)[1]];
    const insta = inst[Object.keys(inst)[0]];

    this.setState({ result: insta });
  }

  showDesign() {
    const design = (
      <div className={s.container}>
        {this.state.component.screenshots.map((screenshot) => (
          <img
            className={s.logo}
            src={`http://localhost:8080/api/screenshots/${screenshot}`}
            alt="image"
          />
        ))}
      </div>
    );
    this.setState({ result: design });
  }

  showUsage() {
    const allReadmeContent = this.state.component.readme.content;
    const use = allReadmeContent[Object.keys(allReadmeContent)[0]];
    const usage = use[Object.keys(use)[0]];

    this.setState({ result: usage });
  }

  render() {
    return (
      <div>
        <div className={s.headerNav}>
          <h1>{this.state.component.title}</h1>
          <p>----------------------------</p>
          <ul>
            <li>
              <a href="#Design">Design</a>
            </li>
            <li>
              <a href="#Installation">Installation</a>
            </li>
            <li>
              <a href="#Usage">Usage</a>
            </li>
            <li>
              <a href="#Story Source">Story Source</a>
            </li>
            <li>
              <a href="#Prop Types">Prop Types</a>
            </li>
          </ul>
        </div>
        <div>
          <code className={s.code}>{this.state.result}</code>
        </div>
      </div>
    );
  }
}

export default withRouter(ComponentsDetailView);
