import React from "react";
import {withRouter} from "react-router";
import s from "./ComponentsPage.module.scss";
import Select from "react-select";
import { fetchComponents, fetchTags } from "./component_data";
import {fetchUserInfo} from "../BlogPage/data";
import LoginMessage from "../../components/LoginMessage/LoginMessage";

export class ComponentsListView extends React.Component {

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
      return <ListedComponents user = {this.state.user} {...this.props}/>
    }else if(this.state.error){
      return <LoginMessage children="Library"/>
    }else{
      return <h2>Loading...</h2>
    }
  }
}

class ListedComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: [],
      components: [],
      availableTags: [],
      filteredComponents: [],
      URLOptions: [],
      view: ""
    };
    this.handleNewComponent = this.handleNewComponent.bind(this)
  }

  async componentDidMount() {
    await this.updateListView();
    this.setState({
      components: await fetchComponents(),
      availableTags: await fetchTags(),
    });
    this.fillFilterWithTags();
    this.fillFilterComponents(window.location.pathname);
    this.checkURL();
  }

  async componentDidUpdate(prevProps, prevState, snapshot){
    if (prevProps.location.pathname !== this.props.location.pathname){
      await this.updateListView();
    }
  }

  async updateListView() {
    try {
      const pathname = window.location.pathname
      this.fillFilterComponents(pathname)
    } catch (error) {
      console.log(error)
    }
  }

  fillFilterWithTags() {
    const options = [];
    for (let tag of this.state.availableTags) {
      options.push({
        label: tag.tag_name,
        value: tag.tag_name,
      });
    }
    this.setState({ availableTags: options });
  }

  fillFilterComponents(pathname) {
    let filteredCompos = []
    if(pathname === "/library") {
      if (this.state.filterValue.length < 1) {
        this.setState({view: "Library"})
        this.setState({filteredComponents: this.state.components});
      } else {
        this.setState({filteredComponents: []});
        const filteredComponents = [];

        for (let component of this.state.components) {
          const check = this.state.filterValue.every((el) => {
            return component.tags.indexOf(el) !== -1;
          });
          if (check) {
            filteredComponents.push(component);
          }
        }
        this.setState({filteredComponents: [...new Set(filteredComponents)]});
      }
    }else {
      if (pathname.includes('for-classic-stacks')) {
        this.setState({view: "Classic Stacks"})
        for (let component of this.state.components) {
          if (!component.tags.includes("react")) {
            filteredCompos.push(component);
          }
        }
      }

      if (pathname.includes('for-react-stacks')) {
        this.setState({view: "React Stacks"})
        for (let component of this.state.components) {
          if (component.tags.includes("react")) {
            filteredCompos.push(component);
          }
        }
      }
      this.setState({filteredComponents: filteredCompos})
    }
  }

  handleChange(selectedTags) {
    const filterValue = [];
    selectedTags.map((tag) => filterValue.push(tag.value));
    const searchParams = new URLSearchParams();
    searchParams.set("query", filterValue.toString());
    this.props.history.push(`?${searchParams.toString()}`);
    this.state.filterValue = filterValue;
    this.fillFilterComponents(window.location.pathname);
    this.checkURL();
  }

  checkURL() {
    const filterValue = [];
    const URLOptions = [];
    const params = new URLSearchParams(location.search);
    const allParametersAsString = params.get("query");
    if (allParametersAsString !== null) {
      const searchParams = allParametersAsString.split(",");
      for (let option of this.state.availableTags) {
        if (searchParams.includes(option.value)) {
          filterValue.push(option.value);
          URLOptions.push(option);
        }
      }
    }
    this.setState({ filterValue: filterValue, URLOptions: URLOptions });
    this.fillFilterComponents(window.location.pathname);
  }

  handleNewComponent(){
    this.props.history.push("/library/new-component")
  }

  render() {
    return (
        <div>
          <h1>{this.state.view}</h1>
          {this.props.user.status === "LOGGED_IN" ? (
              <button
                  className={s.NewComponentButton}
                  onClick={this.handleNewComponent}
                  title="newComponentButton"
              >New Component</button>
          ) : (
              <div/>
          )}
          <React.Fragment>
            {this.state.view === "Library" ? (
                <div className={s.multiselect}>
                  <Select
                      isMulti
                      className="basic-multi-select"
                      value={this.state.URLOptions}
                      onChange={(selectedTags) => this.handleChange(selectedTags)}
                      options={this.state.availableTags}
                  />
                </div>
            ):<div/>}
          </React.Fragment>
          <div className={s.container}>
            {this.state.filteredComponents.map((component) => (
                <div className={s.item} key={component.component_id}>
                  <a
                      className={s.linkToDetailView}
                      href={`/library/${component.slug}#Design`}
                  >
                    {component.screenshots.length>0 ? (
                        <img
                            title="componentScreenshot"
                            className={s.logo}
                            src={`https://917999261651-idealo-design-assets.s3.eu-central-1.amazonaws.com/${component.screenshots[0]}`}
                            alt="image"
                        />
                    ):(<div/>)}
                    <h1 className={s.title} title="componentTitle">
                      {component.title}
                    </h1>
                    {component.tags.map((tag, key) => (
                        <p
                            className={s.tags}
                            key={key}
                            title="componentTags"
                        >{`#${tag}`}</p>
                    ))}
                  </a>
                </div>
            ))}
          </div>
        </div>
    );
  }
}

export default withRouter(ComponentsListView);