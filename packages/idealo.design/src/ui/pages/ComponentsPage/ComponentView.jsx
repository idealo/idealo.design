import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Logo } from '../../../../public/ids_v02.svg';

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
                    <button className={s.dropdown} onClick={this.showMenu}>By Technology</button>
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

                <div className={s.container}>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                    <div className={s.item}>
                        <Logo/>
                        <h2>Radio Button</h2>
                        #motif-ui #react
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(ComponentView);
