import React from 'react'
import s from "./LandingPage.module.scss";
import {useHistory} from "react-router";

export default function LandingPage() {

    let history = useHistory();

    const redirect = () => {
        history.push('/')
    }

    return (
        <>
            <h1>Landing Page</h1>
            <img className={s.imgOne} src={"https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif"} alt="Crane Picture"/>
            <div className={s.paragraphOne}>
                Build a greater idealo. Faster, with performance and accessibility in mind
                idealo Design System community helps our teams building digital experiences
                <button onClick={redirect}>Get started</button>
            </div>

            <img className={s.imgTwo} src={"https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif"} alt="Crane Picture"/>
            <div className={s.paragraphTwo}>
                It's an ongoing process continuously creating new components
                Embrace change
            </div>

            <img className={s.imgThree} src={"https://media.giphy.com/media/phGElmSM4P0sg/giphy.gif"} alt="Crane Picture"/>
            <div className={s.paragraphThree}>
                By enforcing conventions, components can be interchanged and reassembled
                Components are never set in stone, some will stay, some will change over time
                <div>
                    <a href="https://bradfrost.com/blog/post/atomic-web-design/">Learn more about Atomic Design</a>
                </div>
            </div>
        </>
    )
}
