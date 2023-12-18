import { createContext, useState } from "react";

const defTitle = "Confirm";
const defDescription = "Are you sure you want to proceed with this action?";

type DialogSettings = {
  title: string;
  description: string;
  [key: string]: string | boolean | (() => void) | undefined;
};
type DialogState = DialogSettings & {
  isOpen: boolean;
  onAccept: () => void;
  onCancel?: () => void;
};

const getInitalState = () => ({
  isOpen: false,
  title: defTitle,
  description: defDescription,
  onAccept: () => {
    return;
  },
});

export function useConfirm() {
  const [dialogState, setDialogState] = useState<DialogState>(getInitalState);

  const confirmAction = (
    acceptCallback: () => void,
    cancelCallback?: () => void,
    options?: Partial<DialogSettings>
  ) => {
    const state: DialogState = {
      ...dialogState,
      isOpen: true,
      onAccept: () => {
        closeDialog();
        acceptCallback();
      },
      onCancel: () => {
        closeDialog();
        if (cancelCallback) {
          cancelCallback();
        }
      },
    };
    if (options) {
      Object.keys(options).forEach((opt) => {
        const option = opt as keyof DialogSettings;
        state[option] = options[option];
      });
    }
    console.log(state);
    setDialogState(state);
  };

  const closeDialog = () => {
    setDialogState(getInitalState());
  };

  return { dialogState, confirmAction, closeDialog };
}

export const ConfirmContext = createContext<{
  dialogState: DialogState;
  confirmAction: (
    acceptCallback: () => void,
    cancelCallback?: () => void,
    options?: Partial<DialogSettings>
  ) => void;
  closeDialog: () => void;
}>({
  dialogState: getInitalState(),
  confirmAction: () => null,
  closeDialog: () => null,
});
