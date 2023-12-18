import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ConfirmDialog.scss";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";
import { ConfirmContext } from "./hooks/useConfirm";

export const ConfirmDialog = () => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogState, closeDialog } = useContext(ConfirmContext);

  return (
    <>
      {dialogState.isOpen && (
        <div className={dialogState.modeless ? "modeless" : "overlay"}>
          <div className={"dialog"} ref={dialogRef}>
            <div className="header">
              <p>{dialogState.title}</p>
              <button onClick={closeDialog}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="content">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>{dialogState.description}</p>
            </div>

            <div className="footer">
              <button className="text" onClick={dialogState.onCancel}>
                NO
              </button>
              <button onClick={dialogState.onAccept}>YES</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
