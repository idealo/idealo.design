import React from "react";
import { withRouter } from "react-router";
import s from "./ComponentsPage.module.scss";
import { ReactComponent as Checkbox } from "../../../../public/Checkbox.svg";
import Select from "react-select";
import {
  fetchComponents,
  fetchMap,
  fetchTags,
  updateComponentsTags,
} from "./component_data";
import slugify from "slugify";

class ComponentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: [],
      components: [],
      list: [],
      options: [],
      filteredComponents: [],
      URLOptions: [],
    };
    this.handleImportComponents = this.handleImportComponents.bind(this);
  }

  async componentDidMount() {
    this.setState({
      components: await fetchMap(),
      options: await fetchTags(),
      list: await fetchComponents(),
    });
    this.fillComponents();
    this.fillOptions();
    this.fillFilterComponents();
    this.checkURL();
  }

  fillComponents() {
    const components = [];
    let tags = [];

    for (let item of this.state.list) {
      for (let component of this.state.components) {
        if (item.component_id === component.component_id) {
          tags.push("#" + component.tag_name);
        }
      }
      components.push({
        id: item.component_id,
        title: item.title,
        tags: JSON.parse(JSON.stringify(tags)),
      });
      tags = [];
    }
    this.setState({ components: components });
  }

  fillOptions() {
    const options = [];
    for (let option of this.state.options) {
      options.push({
        label: option.tag_name,
        value: option.tag_name,
      });
    }
    this.setState({ options: options });
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

  async handleImportComponents() {
    await updateComponentsTags().then(window.location.reload());
  }

  handleChange(select) {
    const filterValue = [];
    select.map((select) => filterValue.push("#" + select.value));
    const searchParams = new URLSearchParams();
    searchParams.set("query", filterValue.toString());
    this.props.history.push(`?${searchParams.toString()}`);
    this.setState((this.state.filterValue = filterValue));
    this.fillFilterComponents();
    this.checkURL();
  }

  checkURL() {
    const filterValue = [];
    const URLOptions = [];
    const url = slugify(window.location.href.toString());
    for (let option of this.state.options) {
      if (url.includes(option.value)) {
        filterValue.push("#" + option.value);
        URLOptions.push(option);
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
              onChange={(select) => this.handleChange(select)}
              options={this.state.options}
            />
          </div>
        </React.Fragment>
        <div className={s.container}>
          {this.state.filteredComponents.map((component) => (
            <div className={s.item} key={component.id}>
              <Checkbox className={s.logo} />
              <h1 className={s.title}>{component.title}</h1>
              <h3 className={s.tags}>{component.tags}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ComponentView);
