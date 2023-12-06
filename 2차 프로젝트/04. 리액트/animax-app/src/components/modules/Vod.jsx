// Animax VOD 정보 컴포넌트
import { useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import ReactPlayer from "react-player";

import $ from "jquery";

export function Vod() {
  const selData = VideoListData;

  // 마우스 위치
  // const xy = useRef({ x: 0, y: 0 });

  return (
    <>
      {/* 1. vod 정보창 */}
      <section id="vod_area" className="vod_area">
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
              <img src="" alt="" />
            </div>
            <h4>
              <span className="tit"></span>
              <span className="txt"></span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
