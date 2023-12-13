// Animax VOD 정보 컴포넌트
import { memo, useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";

import $ from "jquery";

export function Vod({ item, vodState }) {
  // vodState - 정보박스 상태변수
  const selData = VideoListData;

  // 마우스 위치
  const vodBox = useRef()
  const ele = item.ele;
  const eleW = item.eleW
  const mouseLeft = item.left;
  const mouseTop = item.top;
  console.log(mouseTop, mouseLeft, eleW, vodState);


  const showEle = () => {
    $(vodBox.current).css ({
      opacity:1,
      top: mouseTop + 'px',
      left: mouseLeft + 'px',
      width: eleW + 'px',
      transition: 'opacity .5s 0.5s'
    });
    // vodState.current(true);
  }

  const hideEle = () => {
    $(vodBox.current).attr ('style','');
    $(vodBox.current).css ({
      opacity:0,
    });
    // vodState.current(false);
    // $(vodBox.current).hide();
  }

  useEffect(() => {
    $(ele).on('mouseenter',showEle);
    $(ele).on('mouseleave',hideEle);
    
  }); ////////// useEffect /////////////

  return (
    <>
      {/* 1. vod 정보창 */}
      <section id="vod_area" className="vod_area" ref={vodBox}>
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
          <a href="#" className="img_bx">
            <div className="img_group">
              <div className="bg"></div>
              <img src={item.img} alt="" />
            </div>
            <h4>
              <span className="tit">{item.tit}</span>
              <span className="txt">{item.txt}</span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
