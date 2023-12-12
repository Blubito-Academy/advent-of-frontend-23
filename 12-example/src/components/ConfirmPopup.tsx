import { useEffect, useRef, useState } from "react";
import "./ConfirmPopup.scss";

type ConfirmPopupProps = {
  children: JSX.Element;
  onAccept: () => void;
  onCancel?: () => void;
  config?: {
    title?: string;
    yes?: string;
    no?: string;
  };
};

const ConfirmPopup = (props: ConfirmPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmHeight, setConfirmHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      setConfirmHeight(ref.current.clientHeight);
    }
  }, [isOpen]);

  const openConfirm = () => {
    setIsOpen(true);
  };

  const closeConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (props.onCancel) {
      props.onCancel();
    }
    setIsOpen(false);
  };

  const acceptConfirm = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.onAccept();
    closeConfirm(e);
  };

  return (
    <div className="confirmWrapper" onClick={openConfirm}>
      {props.children}
      {isOpen ? (
        <div
          className={`confirm ${confirmHeight ? "visible" : ""}`}
          ref={ref}
          style={{ "--top": confirmHeight * -1 + "px" }}
        >
          <div className="titleRow">
            <span className="icon">🛑</span>
            <h2 className="title">
              {props.config?.title ?? "Are you sure you want to proceed?"}
            </h2>
          </div>

          <div className="btnRow">
            <button onClick={(e) => closeConfirm(e)}>
              {props.config?.no ?? "Cancel"}
            </button>
            <button onClick={(e) => acceptConfirm(e)}>
              {props.config?.yes ?? "Confirm"}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConfirmPopup;
