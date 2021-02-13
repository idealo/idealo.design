import React from "react";
import {Modal } from "react-bootstrap";

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
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{'Dein Blogpost wurde erfolglreich gespeichert'}</p>
            </Modal.Body>
        </Modal>
    );
}
