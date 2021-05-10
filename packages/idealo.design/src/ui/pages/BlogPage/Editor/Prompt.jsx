import React from "react";
import ReactModal from "react-modal";
import Button from "@storybook/react/dist/demo/Button";

export default function PromptSuccess(props) {
  return (
      <ReactModal
          isOpen={props.show}
          style={{
            overlay: {
              backgroundColor: 'rgba( 190, 190, 190, 0.75)'
            },
            content: {
              top: '40%',
              left: '25%',
              right: '25%',
              bottom: '40%',
            }
          }}
      >
          <header>
              <p>{props.message}</p>
          </header>
          <footer>
              {props.message === 'Do you want to delete or archive that post?'
                  ?<div>
                      <Button onClick={props.onCancel}>Close</Button>
                      <Button onClick={props.onArchive}>Archive</Button>
                      <Button onClick={props.onDelete}>Delete</Button>
                  </div>:
                  <div>
                      <Button onClick={props.onHide}>Close</Button>
                      <Button onClick={props.onLeave}>Yes</Button>
                  </div>
              }
          </footer>

      </ReactModal>
  );
}
