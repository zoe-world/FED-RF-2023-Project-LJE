import ReactModal from "react-modal";
import React from "react";
import { VideoListData } from "../data/video_list";

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 9999,
  },
  content: {
    backgroundColor: "transparent",
    borderRadius: "6px",
  },
};

const vData = VideoListData;
const MyModal = ({ children, isOpen, onClose, onSubmit }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };
  const handleClickCancle = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      closeTimeoutMS={150}
      onRequestClose={onClose}
      style={ModalStyle}
    >
      <div className="previewModal-player">
        <div className="logo_bx">
          <img src="./images/content/logo/logo_01.png" alt="" />
        </div>
        <div className="rank_bx">
          <span className="rank"><em>15</em>위</span>
        </div>
      <div className="previewModal-info_bx">
        <div className="thum_bx">
          <img src="./images/content/thum/thum_01.jpg" alt="" />
        </div>
        <div className="txt_bx">
          <h3 className="tit">{vData.idx}</h3>
        </div>
      </div>
      </div>
      <div className="previewModal-close" onClick={handleClickCancle}></div>
      <button onClick={handleClickSubmit}>확인</button>
      <button onClick={handleClickCancle}>취소</button>
    </ReactModal>
  );
};

export default MyModal;
