import React from "react";
import ReactModal from "react-modal";
import s from "../pages/BlogPage/Blogpage.module.scss";

export default function PromptSuccess(props) {
    return (
        <ReactModal
            isOpen={props.show}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: "rgba( 190, 190, 190, 0.75)",
                },
                content: {
                    top: "40%",
                    left: "30%",
                    right: "30%",
                    bottom: "45%",
                    height: "100px",
                },
            }}
        >
            <header>
                <h2 className={s.promptMessage}>{props.message}</h2>
            </header>
            {props.type !== "prompt_of_saving_dataset" ?(
                <footer>
                    {props.message === "Do you want to delete or archive that post?" ? (
                        <div className={s.promptButtonDiv}>
                            <button onClick={props.onCancel} className={s.promptButton}>Close</button>
                            <button onClick={props.onArchive} className={s.promptButton}>Archive</button>
                            <button onClick={props.onDelete} title="promptDeleteButton" className={s.promptButton}>Delete
                            </button>
                        </div>
                    ) : (
                        <div className={s.promptButtonDiv} >
                            <button onClick={props.onHide} className={s.promptButton}>Close</button>
                            <button onClick={props.onLeave} className={s.promptButton}>Yes</button>
                        </div>
                    )}
                </footer>
            ):(
                <div/>
            )}
        </ReactModal>
    );
}
