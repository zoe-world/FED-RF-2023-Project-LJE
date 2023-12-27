import ReactModal from "react-modal";
import React from "react";
import { VideoListData } from "../data/video_list";
import { useSelector } from "react-redux";


const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 9999,
    overflowY:'scroll'
  },
  content: {
    overflow:'visible',
    backgroundColor: "transparent",
    border: "none",
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

  const itemInfo = useSelector((state)=> state.item.value);
  
  const item = Object.values(itemInfo)[0];
  const itemIdx = item.idx;
  const itemRank = item.rank;
  const itemTit = item.tit;
  const itemDirector = item.director;
  const itemGenre = item.genre;
  const itemCompany = item.company;
  const itemEpiNum = item.epiNum;
  const itemAge = item.age;
  const itemDate = item.date;
  const itemEpiTit = item.epiTit;
  const itemDesc = item.desc;
  const itemNewEpi = item.newEpi;
  const itemLive = item.live;
  const itemLogoSrc = item.logoSrc;
  const itemThumSrc = item.thumSrc;

  
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
          <img src={itemLogoSrc} alt={itemInfo.tit} />
        </div>
        <div className="rank_bx">
          <span className="rank"><em>15</em>위</span>
        </div>
      <div className="previewModal-info_bx">
        <div className="thum_bx">
          <img src={itemThumSrc} alt="" />
        </div>
        <div className="txt_bx">
          <h3 className="tit">{vData.idx}</h3>
          <span>
            {itemIdx}
            {itemRank}
            {itemTit}
            {itemDirector}
            {itemGenre}
            {itemCompany}
            {itemEpiNum}
            {itemAge}
            {itemDate}
            {itemEpiTit}
            {itemDesc}
            {itemNewEpi}
            {itemLive}
          </span>
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
