import React from "react";
import { withRouter } from "react-router";
import s from "./ComponentsPage.module.scss";
import { ReactComponent as Checkbox } from "../../../../public/Checkbox.svg";
import { fetchMap, fetchComponents } from "./component_data";

class ReactStackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
      filteredComponents: [],
      list: [],
    };
  }

  async componentDidMount() {
    this.setState({
      components: await fetchMap(),
      list: await fetchComponents(),
    });
    this.fillComponents();
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
      for (let tag of tags) {
        if (tag === "#react") {
          components.push({
            id: item.component_id,
            title: item.title,
            tags: JSON.parse(JSON.stringify(tags)),
          });
        }
      }

      tags = [];
    }
    this.setState({ components: components });
  }

  render() {
    return (
      <div>
        <div className={s.container}>
          {this.state.components.map((component) => (
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

export default withRouter(ReactStackView);
