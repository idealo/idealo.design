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
            <Modal.Header submitButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {'Congratulations!'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{'Your blogpost has been saved successfully.'}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onLeave}>OK</Button>
            </Modal.Footer>
        </Modal>
    );
}
