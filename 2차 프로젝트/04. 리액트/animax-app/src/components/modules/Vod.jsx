// Animax VOD 정보 컴포넌트
import { useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";

import $ from "jquery";
import { useDispatch } from "react-redux";
import { itemOver } from "../../redux/reducers/item";

export function Vod({ item, onClickVodHandler,onClickVideoHandler }) {
  const selData = VideoListData;
  // redux
  const dispatch = useDispatch();

  // 마우스 위치
  const vodBox = useRef();
  const ele = item.ele;
  const itemInfo = item.itemInfo;
  const itemThumSrc = itemInfo != null ? itemInfo.thumSrc : "";
  const itemTit = itemInfo != null ? itemInfo.tit : "";
  const itemEpiTit = itemInfo != null ? itemInfo.epiTit : "";

  const [isAct, setIsAct] = useState(false);
  const showEle = (e) => {
    e.preventDefault();
    setIsAct(true);
  };

  const hideEle = (e) => {
    e.preventDefault();
    setIsAct(false);
  };

  useEffect(() => {
    $(ele).on("mouseenter", showEle);
    $(vodBox.current).on("mouseleave", hideEle);
  }); ////////// useEffect /////////////
 
  return (
    <>
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className={isAct ? "vod_area on" : "vod_area"}
        ref={vodBox}
        onMouseOver={() =>
          dispatch(
            itemOver({
              itemInfo: item.itemInfo,
            })
          )
        }
        style={
          isAct
            ? {
                opacity: 1,
                top: item.top + 25 + "px",
                left: item.left + "px",
                width: item.eleW + "px",
                transition: "opacity .3s linear .2s",
              }
            : { opacity: 0 }
        }
      >
        <div className="info_bx">
          <a href="#" title="동영상 재생" className="link_play link_ico" onClick={onClickVideoHandler}>
            <span className="tootip">재생하기</span>
          </a>
          <a
            href="#"
            title="정보 더보기"
            className="link_info link_ico"
            onClick={onClickVodHandler}
          >
            <span className="tootip">상세보기</span>
          </a>
          <a href="#" title="찜하기" className="link_zzim link_ico">
            <span className="tootip">찜하기</span>
          </a>
          <a href="#" className="img_bx" onClick={onClickVodHandler}>
            {}
            <div className="img_group">
              <div className="bg"></div>
              <img src={itemThumSrc} alt="" />
            </div>
            <h4>
              <span className="tit">{itemTit}</span>
              <span className="txt">{itemEpiTit}</span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
