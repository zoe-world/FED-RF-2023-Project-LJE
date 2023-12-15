import ReactModal from "react-modal";
import React from "react";

const Modal = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달입니다.</div>
    </ReactModal>
  );
};

export default Modal;
