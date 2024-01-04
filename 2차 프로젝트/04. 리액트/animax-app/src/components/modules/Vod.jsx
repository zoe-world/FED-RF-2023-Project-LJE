// Animax VOD 정보 컴포넌트
import { memo, useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";

import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { itemOut, itemOver } from "../../redux/reducers/item";

export function Vod({ item, handleClick }) {
  const selData = VideoListData;
  // redux
  const dispatch = useDispatch();

  // 마우스 위치
  const vodBox = useRef();
  const ele = item.ele;
  const itemInfo = item.itemInfo;
  const itemThumSrc = itemInfo!=null ? itemInfo.thumSrc : '';
  const itemTit = itemInfo!=null ? itemInfo.tit:''
  const itemEpiTit = itemInfo!=null ? itemInfo.epiTit:''

  const [isClass, setIsClass] = useState(false);
  const showEle = (e) => {
    e.preventDefault();
    setIsClass(true);
  };

  const hideEle = (e) => {
    e.preventDefault();
    setIsClass(false);
  };

  useEffect(() => {
    $(ele).on("mouseenter", showEle);
    $(vodBox.current).on("mouseleave", hideEle);
  }); ////////// useEffect /////////////
  console.log('vod창')
  return (
    <>
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className={isClass ? "vod_area on" : "vod_area"}
        ref={vodBox}
        onMouseOver={() =>
          dispatch(
            itemOver({
              itemInfo: item.itemInfo,
            })
          )
        }
        style={
          isClass
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
          <a href="#" title="동영상 재생" className="link_play link_ico">
            <span className="tootip">재생하기</span>
          </a>
          <a href="#" title="정보 더보기" className="link_info link_ico">
            <span className="tootip">상세보기</span>
          </a>
          <a href="#" title="찜하기" className="link_zzim link_ico">
            <span className="tootip">찜하기</span>
          </a>
          <a href="#" className="img_bx" onClick={handleClick}>
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
