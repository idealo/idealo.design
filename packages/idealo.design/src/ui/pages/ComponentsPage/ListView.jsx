import React from "react";
import {withRouter} from "react-router";

class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleClick() {
        console.log('Click happened');
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.showMenu}>By Technology</button>
                    {
                        this.state.showMenu
                            ? (
                                <div className="menu"
                                     ref={(element) => {
                                         this.dropdownMenu = element;
                                     }}>
                                    <div>
                                        <button> React Stacks</button>
                                    </div>
                                    <div>
                                        <button> Classic Stacks</button>
                                    </div>
                                </div>
                            ) : null
                    }
                </div>

                <div className={element}>
                    <button>1 Element</button>
                </div>

            </div>
    )
        ;
    }
}

export default withRouter(ListView);
