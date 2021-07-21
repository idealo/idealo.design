import React from "react";
import { withRouter } from "react-router";
import s from "./ComponentsPage.module.scss";
import { ReactComponent as Checkbox } from "../../../../public/Checkbox.svg";
import Select from "react-select";
import {
  fetchComponents,
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
      availableTags: [],
      filteredComponents: [],
      URLOptions: [],
    };
    this.handleImportComponents = this.handleImportComponents.bind(this);
  }

  async componentDidMount() {
    this.setState({
      components: await fetchComponents(),
      availableTags: await fetchTags()
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

  async handleImportComponents() {
    await updateComponentsTags().then(window.location.reload());
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
    const url = slugify(window.location.href.toString());
    for (let option of this.state.availableTags) {
      if (url.includes(option.value)) {
        filterValue.push(option.value);
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
              onChange={(selectedTags) => this.handleChange(selectedTags)}
              options={this.state.availableTags}
            />
          </div>
        </React.Fragment>
        <div className={s.container}>
          {this.state.filteredComponents.map((component) => (
            <div className={s.item} key={component.component_id}>
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
