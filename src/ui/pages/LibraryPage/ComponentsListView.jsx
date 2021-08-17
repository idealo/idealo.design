import React from "react";
import { withRouter } from "react-router";
import s from "./ComponentsPage.module.scss";
import Select from "react-select";
import { fetchComponents, fetchTags } from "./component_data";

export class ComponentsListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: [],
      components: [],
      availableTags: [],
      filteredComponents: [],
      URLOptions: [],
    };
  }

  async componentDidMount() {
    this.setState({
      components: await fetchComponents(),
      availableTags: await fetchTags(),
    });
    this.fillFilterWithTags();
    this.fillFilterComponents();
    this.checkURL();
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

  fillFilterComponents() {
    if (this.state.filterValue.length < 1) {
      this.setState({ filteredComponents: this.state.components });
    } else {
      this.setState({ filteredComponents: [] });
      const filteredComponents = [];

      for (let component of this.state.components) {
        const check = this.state.filterValue.every((el) => {
          return component.tags.indexOf(el) !== -1;
        });
        if (check) {
          filteredComponents.push(component);
        }
      }
      this.setState({ filteredComponents: [...new Set(filteredComponents)] });
    }
  }

  handleChange(selectedTags) {
    const filterValue = [];
    selectedTags.map((tag) => filterValue.push(tag.value));
    const searchParams = new URLSearchParams();
    searchParams.set("query", filterValue.toString());
    this.props.history.push(`?${searchParams.toString()}`);
    this.state.filterValue = filterValue;
    this.fillFilterComponents();
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
    this.fillFilterComponents();
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <div className={s.multiselect}>
            <Select
              isMulti
              className="basic-multi-select"
              value={this.state.URLOptions}
              onChange={(selectedTags) => this.handleChange(selectedTags)}
              options={this.state.availableTags}
            />
          </div>
        </React.Fragment>
        <div className={s.container}>
          {this.state.filteredComponents.map((component) => (
            <div className={s.item} key={component.component_id}>
              <a
                className={s.linkToDetailView}
                href={`/library/${component.slug}`}
              >
                <img
                  title="componentScreenshot"
                  className={s.logo}
                  src={`http://localhost:8080/api/screenshots/${component.screenshots[0]}`}
                  alt="image"
                />
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
