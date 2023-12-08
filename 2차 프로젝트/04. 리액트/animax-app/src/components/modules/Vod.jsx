// Animax VOD 정보 컴포넌트
import { memo, useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";

import $ from "jquery";

export function Vod({ item }) {
  const selData = VideoListData;

  // 마우스 위치
  const vodBox = useRef(null);
  const ele = vodBox.current;
  const mouseLeft = item.left;
  const mouseTop = item.top;
  console.log(mouseTop, mouseLeft, ele);


  const showEle = (e) => {
    console.log("여기", ele, mouseTop, mouseLeft);
    const evtEle = $(e.currentTarget);

    $(ele)
    .css({
      top: evtEle.offset().top + "px",
      left: evtEle.offset().left + "px",
      width: evtEle.width() +'px',
    })
    .stop()
    .delay(100)
    .fadeIn(300)
  }

  const hideEle = () => {
    $(ele).hide();
  }

  useEffect(() => {

    const evtEle = $('.list_box .swiper-slide');

    evtEle.on('mouseenter',showEle);
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
