import { X } from "@phosphor-icons/react";
import React from "react";
import { CloseIcon } from "../../containers/summary-container/styles";
import SummaryContainer from "../../containers/summary-container/summary-container";
import { Dialog, DialogContent, Wrapper } from "./styles";

const DialogComponent = ({ open, handleOpen }) => {
  return (
    <Wrapper open={open}>
      <Dialog>
        <CloseIcon onClick={handleOpen?.bind(null)}>
          <X size={21} />
        </CloseIcon>
        <DialogContent>
          <SummaryContainer key={"modal"} open={open} />
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

export default DialogComponent;
