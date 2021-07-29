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
              <a className={s.linkToDetailView} href={`/components/${component.slug}`}>
                <img
                  className={s.logo}
                  src={`http://localhost:8080/api/screenshots/${component.screenshots[0]}`}
                  alt="image"
                />
                <h1 className={s.title}>{component.title}</h1>
                {component.tags.map((tag) => (
                    <p className={s.tags} title="componentTags">{`#${tag}`}</p>
                ))}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ClassicStackView);
