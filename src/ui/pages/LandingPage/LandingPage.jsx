import React from 'react'
import s from "./LandingPage.module.scss";
import {useHistory} from "react-router";

export default function LandingPage() {

    let history = useHistory();

    const redirect = () => {
        history.push('/welcome')
    }

    return (
        <div>
            <section>
                <div className={s.bannerText}>
                    <h2>idealo Design System</h2>
                    <h3>Build a greater idealo.</h3>
                    <p>
                        Faster, with performance and accessibility in mind
                        idealo Design System community helps our teams
                        building digital experiences. It's an ongoing process
                        continuously creating new components Embrace change.
                        By enforcing conventions, components can be interchanged
                        and reassembled Components are never set in stone,
                        some will stay, some will change over time.
                    </p>
                    <a onClick={redirect}>Get started</a>
                </div>
                <div className={s.gears} id="one-gear">
                    <div className={s.gearsContainer}>
                        <div className={s.gearRotate}/>
                    </div>
                </div>
                <div className={s.gears} id="two-gears">
                    <div className={s.gearsContainer2}>
                        <div className={s.gearRotate}/>
                        <div className={s.gearRotateLeft}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
