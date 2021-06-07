import React from "react";
import {withRouter} from "react-router";

class ComponentView extends React.Component {
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

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }



    render() {
        return (
           <div>
               <button onClick={this.showMenu}>Dropdown</button>



        {
            this.state.showMenu
                ? (
                    <div className="menu">
                        <div><button> Menu item 1</button></div>
                        <div><button> Menu item 2</button></div>
                        <div><button> Menu item 3</button></div>
                    </div>
                ) : null
        }


    </div>

        );
    }
}

export default withRouter(ComponentView);
