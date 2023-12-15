import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ConfirmDialog.scss";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useRef, useState, useImperativeHandle } from "react";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { createPortal } from "react-dom";

interface ConfirmDialogProps {
  title?: string;
  message?: string;
  btnAcceptText?: string;
  btnDeclineText?: string;
}

export interface DialogAPI {
  elementRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  returnValue: string;
  showModal: () => void;
  show: () => void;
  close: (returnValue?: string) => void;
}

export const ConfirmDialog = forwardRef((props: ConfirmDialogProps, ref) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [returnValue, setReturnValue] = useState<string>("");
  const [modeless, setModeless] = useState<boolean>(false);

  const close = (returnValue?: string) => {
    setReturnValue(returnValue ?? "");
    setShow(false);
    setModeless(false);
  };

  // custom hook to handle clicking outside of dialog
  useOnClickOutside(dialogRef, () => close("outside click"));

  const publicRef: DialogAPI = {
    elementRef: dialogRef,
    open: show,
    returnValue: returnValue,
    showModal: () => setShow(true),
    show: () => {
      setShow(true);
      setModeless(true);
    },
    close: (returnValue?: string) => close(returnValue),
  };

  useImperativeHandle(ref, () => publicRef, [show, returnValue]);

  return (
    <>
      {show &&
        createPortal(
          <div className={modeless ? "modeless" : "overlay"}>
            <div className={"dialog"} ref={dialogRef}>
              <div className="header">
                <p>{props.title}</p>
                <button onClick={() => close("X Btn")}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <p>{props.message}</p>
              </div>

              <div className="footer">
                <button className="text" onClick={() => close("Decline Btn")}>
                  {props.btnDeclineText}
                </button>
                <button onClick={() => close("Accept Btn")}>
                  {props.btnAcceptText}
                </button>
              </div>
            </div>
          </div>,
          document.querySelector("body")!
        )}
    </>
  );
});
