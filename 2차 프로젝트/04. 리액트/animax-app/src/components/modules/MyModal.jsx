import ReactModal from "react-modal";
import React, { useMemo, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import { shallowEqual, useSelector } from "react-redux";
import "../../css/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Cast } from "../pages/Cast";
import { StillCut } from "../pages/StillCut";
import { StarRate } from "../pages/StarRate";
import { infoVodData } from "../data/infoVod_list";

const vData = VideoListData;

const ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.8)",
    zIndex: 9999,
    overflowY: "auto",
    padding: "2vw 10vw",
  },
  content: {
    position: "static",
    overflow: "visible",
    backgroundColor: "transparent",
    border: "none",
    top: 0,
    left: 0,
    width: "100%",
    padding: 0,
  },
};

const MyModal = ({ children, isOpen, onClose }) => {
  const handleClickCancle = (e) => {
    e.preventDefault();
    onClose();
  };

  const itemInfo = useSelector((state) => state.item.value, shallowEqual);
  const item = Object.values(itemInfo)[0];
  const itemRank = item.rank;
  const itemTit = item.tit;
  const itemDirector = item.director;
  const itemGenre = item.genre;
  const itemCompany = item.company;
  const itemEpiNum = item.epiNum;
  const itemAge = item.age;
  const itemDate = item.date;
  const itemEpiTit = item.epiTit;
  const itemVideoSrc = item.videoSrc;
  const itemDesc = item.desc;
  const itemNewEpi = item.newEpi;
  const itemLive = item.live;
  const itemLogoSrc = item.logoSrc;
  const itemThumSrc = item.thumSrc;

  /***************************** 
    줄거리 더보기
  *****************************/
  // 더보기 열고닫는 스위치
  const [isShowMore, setIsShowMore] = useState(false);

  // 공백제거
  let trimTxt = itemDesc.split("^").map((v) => {
    return (
      <>
        {v}
        <br />
      </>
    );
  });

  // 글자수 제한 선언
  const textLimit = useRef(10);
  // 조건에 따라 줄거리를 보여주는 함수
  const commenter = () => {
    // 원본에서 글자수 만큼 자른 짧은 버전
    let shortReview = trimTxt.slice(0, textLimit.current);
    if (trimTxt.length > textLimit.current) {
      if (isShowMore) {
        return trimTxt;
      }
      return shortReview;
    }
    return trimTxt;
    // 공백 넣기
  };

  /*
    tab-menu
  */
  const [currentTab, setCurrentTab] = useState(0);

  // video 등장인물, 이미지 데이터
  let ifVodData = infoVodData;
  ifVodData = [...infoVodData];

  // 현재 모달창에 띄워진 vod 제목 정보와 등장인물 데이터 tit 값 비교 후 맞으면 추출
  const infoTit = ifVodData.find((v) => (v.tit === itemTit ? v.tit : null));
  let castLength = infoTit.cast.length;
  let stillLength = infoTit.still.length;

  const menuArr = [
    {
      name: "등장인물",
      content: castLength !== 0 ? <Cast ifVodData={ifVodData} /> : "",
    },
    { name: "스틸컷", content: stillLength !== null ? <StillCut /> : "" },
    { name: "작품평", content: <StarRate /> },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  const reset = () => {

  }
  // 리턴코드
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      closeTimeoutMS={150}
      onRequestClose={()=>{onClose(); reset()}}
      shouldReturnFocusAfterClose={false}
      style={ModalStyle}
    >
      <div className="previewModal-player">
        <div className="logo_bx">
          <img src={itemLogoSrc} alt={itemInfo.tit} />
        </div>
        <div className="previewModal-info_bx">
          <div className="previewModal-info">
            <div className="rank_bx">
              <span className="rank">
                <em>{itemRank}</em>위
              </span>
            </div>
            <div className="thum_bx">
              <img src={itemThumSrc} alt="" />
            </div>
            <div className="txt_bx">
              <h3 className="tit">{vData.idx}</h3>
              <ul className="txt_list">
                <li>
                  <span className="tit">감독</span>
                  <em>{itemDirector}</em>
                </li>
                <li>
                  <span className="tit">장르</span>
                  <em>{itemGenre}</em>
                </li>
                <li>
                  <span className="tit">제작</span>
                  <em>{itemCompany}</em>
                </li>
                <li>
                  <span className="tit">화수</span>
                  <em>{itemEpiNum}</em>
                </li>
                <li>
                  <span className="tit">등급</span>
                  <em>{itemAge}</em>
                </li>
                <li>
                  <span className="tit">방송</span>
                  <em>{itemDate}</em>
                </li>
                <li>
                  <span className="tit">영상</span>
                  <ul className="vd_list">
                    <li>
                      <a
                        href={itemVideoSrc.openSrc}
                        target="_blank"
                        title="오프닝영상 바로보기"
                      >
                        Opening MV
                      </a>
                    </li>
                    <li>
                      <a
                        href={itemVideoSrc.endSrc}
                        target="_blank"
                        title="엔딩영상 바로보기"
                      >
                        Ending MV
                      </a>
                    </li>
                    {itemVideoSrc.promSrc !== "" ? (
                      <li>
                        <a
                          href={itemVideoSrc.openSrc}
                          target="_blank"
                          title="홍보영상 바로보기"
                        >
                          PV
                        </a>
                      </li>
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </li>
                <li className="desc">
                  <span className="tit">줄거리</span>
                  <em className="txt">{commenter()}</em>
                  <button
                    onClick={() => setIsShowMore(!isShowMore)}
                    className="moreBtn"
                  >
                    {trimTxt.length > textLimit.current
                      ? itemDesc.length > textLimit.current &&
                        (isShowMore ? (
                          <>
                            접기 <FontAwesomeIcon icon={faArrowUp} />
                          </>
                        ) : (
                          <>
                            더보기 <FontAwesomeIcon icon={faArrowDown} />
                          </>
                        ))
                      : ""}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* tab menu */}
        <div className="previewModal-tab_bx">
          <ul className="tab_list">
            {menuArr.map((v, i) => {
              if (i === 0) {
                if (castLength !== 0) {
                  return (
                    <li key={i}>
                      <a
                        href="#"
                        onClick={() => selectMenuHandler(i)}
                        className={
                          currentTab === 0 ? "tab_item active" : "tab_item"
                        }
                      >
                        {v.name}
                      </a>
                    </li>
                  );
                } else if (castLength === 0) {
                  return null;
                }
              } else if (i === 1) {
                if (stillLength !== 0) {
                  return (
                    <li key={i}>
                      <a
                        href="#"
                        onClick={() => selectMenuHandler(i)}
                        className={
                          currentTab === 1 ? "tab_item active" : "tab_item"
                        }
                      >
                        {v.name}
                      </a>
                    </li>
                  );
                } else if (stillLength === 0) {
                  return null;
                }
              } else if (i === 2) {
                return (
                  <li key={i}>
                    <a
                      href="#"
                      onClick={() => selectMenuHandler(i)}
                      className={
                        currentTab === 2 ? "tab_item active" : "tab_item"
                      }
                    >
                      {v.name}
                    </a>
                  </li>
                );
              }
              return (
                <li key={i}>
                  <a
                    href="#"
                    onClick={() => selectMenuHandler(i)}
                    className={
                      currentTab === i ? "tab_item active" : "tab_item"
                    }
                  >
                    {v.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="tab_content">{menuArr[currentTab].content}</div>
        </div>
      </div>
      <button className="previewModal-close" onClick={handleClickCancle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <span className="sr-only">창닫기</span>
    </ReactModal>
  );
};

export default MyModal;
