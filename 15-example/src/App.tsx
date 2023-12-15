import { useState } from "react";
import "./App.scss";
import { ConfirmDialog, DialogAPI } from "./ConfirmDialog";

function App() {
  const [dialogRef, setDialogRef] = useState<DialogAPI>();
  // const dialogRef = useRef<DialogAPI>(); - NOT
  // If the parent component (App) utilizes the useRef hook, any changes to ref.current will not trigger a re-render and the parent might see a stale open state.
  // the useImperativeHandle hook also supports callback-refs =>
  // The setter function of a useState is perfectly fine to be used with a callback-ref, triggering a state change and therefore a re-render whenever the referenced object changes.

  const closeDialog = () => {
    if (!dialogRef) return;
    dialogRef.close("Close Btn");
  };

  const showDialog = () => {
    if (!dialogRef) return;
    dialogRef.showModal();
  };

  const showDialogModelessly = () => {
    if (!dialogRef) return;
    dialogRef.show();
  };

  return (
    <div className={"page"}>
      <h1>
        Dialog Component Demo - <br /> using Portal and HTMLDialogElement API
      </h1>
      <span>
        <b>Is Dialog Open:</b> {dialogRef?.open ? "open" : "closed"}
      </span>
      <span>
        <b>Dialog Closed By:</b> {dialogRef?.returnValue}
      </span>

      <button onClick={closeDialog}>CLOSE (modeless) Dialog</button>
      <p>
        Closes the dialog. An optional string may be passed as an argument,
        updating the returnValue of the dialog.
      </p>

      <button onClick={showDialog}>OPEN Dialog as modal</button>
      <p>
        Displays the dialog as a modal, over the top of any other dialogs that
        might be present. Everything outside the dialog are inert with
        interactions outside the dialog being blocked.
      </p>

      <button onClick={showDialogModelessly}>OPEN Dialog modelessly</button>
      <p>
        Displays the dialog modelessly, i.e. still allowing interaction with
        content outside of the dialog.
      </p>

      <ConfirmDialog
        ref={setDialogRef}
        title={"Confirmation"}
        message={"Are you sure you want to proceed?"}
        btnAcceptText={"Yes"}
        btnDeclineText={"No"}
      />
    </div>
  );
}

export default App;
