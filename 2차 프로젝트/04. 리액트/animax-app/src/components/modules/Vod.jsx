// Animax VOD 정보 컴포넌트
import { useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import ReactPlayer from "react-player";

import $ from "jquery";

export function Vod({item, onOverIsActFn}) {

  const selData = VideoListData;

  // 마우스 위치
  // const xy = useRef({ x: 0, y: 0 });

  
  return (
    <>
      {/* 1. vod 정보창 */}
      <section id="vod_area" className={onOverIsActFn == 1? "vod_area on":"vod_area"}>
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
