import React from "react";
import ReactModal from "react-modal";

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
          left: "25%",
          right: "25%",
          bottom: "40%",
        },
      }}
    >
      <h2>{props.message}</h2>
    </ReactModal>
  );
}
