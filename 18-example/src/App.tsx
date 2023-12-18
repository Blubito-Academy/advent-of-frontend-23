import { useState } from "react";
import "./App.scss";
import { ConfirmDialog } from "./ConfirmDialog";
import { useConfirm, ConfirmContext } from "./hooks/useConfirm";

function App() {
  const confirm = useConfirm();
  const [confirmMessage, setConfirmMessage] = useState<string>("");

  const acceptAction = () => {
    setConfirmMessage("Action Confirmed");
  };

  const cancelAction = () => {
    setConfirmMessage("Action Cancelled");
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      <div className={"page"}>
        <h1>Confirm Dialog Demo</h1>
        <h3>{confirmMessage}</h3>
        <span>
          <b>Is Dialog Open:</b>{" "}
          {confirm.dialogState.isOpen ? "open" : "closed"}
        </span>

        <button
          onClick={() => {
            confirm.confirmAction(acceptAction, cancelAction);
            setConfirmMessage("");
          }}
        >
          OPEN Dialog as modal
        </button>
        <p>
          Displays the dialog as a modal, over the top of any other dialogs that
          might be present. Everything outside the dialog is inert with
          interactions outside the dialog being blocked.
        </p>

        <ConfirmDialog />
      </div>
    </ConfirmContext.Provider>
  );
}

export default App;
