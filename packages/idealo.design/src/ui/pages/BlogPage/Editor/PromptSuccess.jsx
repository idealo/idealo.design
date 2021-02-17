import React from "react";
import {Button, Modal} from "react-bootstrap";

export default function PromptSuccess(props) {
    const { message, onLeave, ...rest } = props;

    return (
        <Modal
            {...rest}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p>{'Your blogpost has been saved successfully.'}</p>
            </Modal.Body>
        </Modal>
    );
}
