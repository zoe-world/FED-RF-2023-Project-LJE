// Animax VOD 정보 컴포넌트
import { useContext, useEffect, useRef, useState } from "react";
import { VideoListData } from "../data/video_list";
import ReactPlayer from "react-player";

import $ from "jquery";

export function Vod() {
  const selData = VideoListData;

  // 마우스 위치
  // const xy = useRef({ x: 0, y: 0 });
  const [isHover,setIsHover] = useState(false);
  const handleMouseOver = () => {
    setIsHover(true);
    
  }
  const handleMouseOut = () => {
    setIsHover(false);
  }
  useEffect(() => {
    const tgEle = $(".vod_area");
    const evtEle = $(".list_wrap .swiper-slide");
    
    console.log(evtEle.find('img').attr('src'));
    evtEle.on("mouseenter", (e) => {
      const ele = $(e.currentTarget);
      let sizeW = ele.width();
      let sizeH = ele.height();
      let posT = ele.offset().top;
      let posL = ele.offset().left;

      let isrc = ele.find("img").attr("src");
      let tit1 = ele.find("h4 span").first().text();
      let tit2 = ele.find("h4 span").last().text();

      tgEle.find("img").attr("src", isrc);
      tgEle.find("h4 span").first().text(tit1);
      tgEle.find("h4 span").last().text(tit2);

      console.log(sizeW, posT, posL);

      tgEle.css({
        width: sizeW + "px",
        height: sizeH + "px",
        top: posT + "px",
        left: posL + "px",
        transform: "scale(1.2)",
        transformOrigin: "center center",
        opacity: "1",
        zIndex: 99,
      });
    });
    tgEle.on("mouseleave", (e) => {
      setIsHover(false);
      tgEle.css({
        opacity: 0,
        zIndex: -1,
        tansform: "scale(1)",
      });
    });
  }, [isHover]);

  //
  return (
    <>
      {/* 1. vod 정보창 */}
    {/*   <section id="vod_area" className="vod_area" 
      onMouseOver={handleMouseOver} 
      onMouseMove={handleMouseOver} 
      onMouseOut={handleMouseOut}
      >
        {
          isHover? (
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
                  <img src="" alt=""/>
                </div>
                <h4>
                  <span className="tit"></span>
                  <span className="txt"></span>
                </h4>
              </a>
            </div>
          ) : ("")
        }
        
      </section> */}
    </>
  );
}
