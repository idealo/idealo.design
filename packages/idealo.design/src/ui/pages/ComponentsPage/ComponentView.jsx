import React from "react";
import {withRouter} from "react-router";

class ComponentView extends React.Component {
    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    };

    onclick(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick="myFunction()" className="dropbtn">Dropdown</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
