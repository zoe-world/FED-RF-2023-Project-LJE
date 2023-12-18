import ReactModal from "react-modal";
import React from "react";

const ModalStyle ={
  overlay:{
    position:"fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.8)',
    zIndex:9999
  },
  content:{
    
  }
}
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      closeTimeoutMS={150}
      onRequestClose={onClose}
      style={ModalStyle}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
