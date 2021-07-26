import React from "react";
import { withRouter } from "react-router";
import s from "./ComponentsPage.module.scss";
import { fetchComponents } from "./component_data";

class ClassicStackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
      filteredComponents: [],
    };
  }

  async componentDidMount() {
    this.setState({
      components: await fetchComponents(),
    });
    this.filterComponents();
  }

  filterComponents() {
    const onlyClassicComponents = [];
    for (let component of this.state.components) {
      if (!component.tags.includes("react")) {
        onlyClassicComponents.push(component);
      }
    }
    this.setState({ filteredComponents: onlyClassicComponents });
  }

  render() {
    return (
      <div>
        <div className={s.container}>
          {this.state.filteredComponents.map((component) => (
            <div className={s.item} key={component.component_id}>
              <img
                className={s.logo}
                src={`http://localhost:8080/api/screenshots/${component.component_id}`}
                alt="image"
              />
              <h1 className={s.title}>{component.title}</h1>
              <h3 className={s.tags}>{component.tags}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ClassicStackView);
