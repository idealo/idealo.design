import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Prompt(props) {
  const { message, onLeave, ...rest } = props;

  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={rest.onHide}>Close</Button>
        <Button onClick={onLeave}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}
