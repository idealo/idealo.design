import React from "react";
import ReactModal from "react-modal";
import s from "./Editor.module.scss";

export default function PromptSuccess(props) {
    return (
        <ReactModal
            isOpen={props.show}
            style={{
                overlay: {
                    backgroundColor: "rgba( 190, 190, 190, 0.75)",
                },
                content: {
                    top: "40%",
                    left: "30%",
                    right: "30%",
                    bottom: "45%",
                },
            }}
        >
            <header>
                <h2 className={s.promptMessage}>{props.message}</h2>
            </header>
            <footer>
                {props.message === "Do you want to delete or archive that post?" ? (
                    <div className={s.buttonDiv}>
                        <button onClick={props.onCancel} className={s.buttons}>Close</button>
                        <button onClick={props.onArchive} className={s.buttons}>Archive</button>
                        <button onClick={props.onDelete} title="promptDeleteButton" className={s.buttons}>Delete
                        </button>
                    </div>
                ) : (
                    <div className={s.buttonDiv}>
                        <button onClick={props.onHide} className={s.buttons}>Close</button>
                        <button onClick={props.onLeave} className={s.buttons}>Yes</button>
                    </div>
                )}
            </footer>
        </ReactModal>
    );
}
