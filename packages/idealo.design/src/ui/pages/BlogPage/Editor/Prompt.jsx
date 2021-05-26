import React from "react";
import ReactModal from "react-modal";

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
                      <button onClick={props.onCancel}>Close</button>
                      <button onClick={props.onArchive}>Archive</button>
                      <button onClick={props.onDelete} title='promptDeleteButton'>Delete</button>
                  </div>:
                  <div>
                      <button onClick={props.onHide}>Close</button>
                      <button onClick={props.onLeave}>Yes</button>
                  </div>
              }
          </footer>

      </ReactModal>
  );
}
