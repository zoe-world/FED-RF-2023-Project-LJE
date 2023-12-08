// Animax VOD 정보 컴포넌트
import { memo, useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import ReactPlayer from "react-player";

import $ from "jquery";
import { useSelector } from "react-redux";

export const Vod = memo(({item}) => {

  const selData = VideoListData;

  // 마우스 위치
  const vodBox = useRef({ left: 0, top: 0 });
  const ele = vodBox;
  const mouseLeft = item.left;
  ele.style.left = mouseLeft + 'px';
  console.log(item.left,mouseLeft)
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
});
