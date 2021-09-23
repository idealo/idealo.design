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
            <h2 className={s.promptMessage}>{props.message}</h2>
        </ReactModal>
    );
}
