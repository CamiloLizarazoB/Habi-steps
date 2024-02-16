import { createContext, useContext } from "react";
import DialogComponent from "../components/dialog/dialog";
import useDialog from "../hooks/useDialog.hook";

const DialogContext = createContext({
  open: false,
});

export const DialogProvider = ({ children }) => {
  const { open, handleOpen } = useDialog();

  return (
    <DialogContext.Provider value={{ handleOpen, open }}>
      <DialogComponent open={open} handleOpen={handleOpen} />
      {children}
    </DialogContext.Provider>
  );
};
export const useDialogContext = () => useContext(DialogContext);
