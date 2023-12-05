// Animax VOD 정보 컴포넌트
import { useContext, useEffect, useRef } from "react";
import { VideoListData } from "../data/video_list";
import $, { post } from "jquery";

export function Vod() {
  const selData = VideoListData;

  // 마우스 위치
  const xy = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    xy.current = {
      x: e.clientX,
      y: e.clientY,
    };
    console.log(xy.current);
  };

  useEffect(() => {
    const tgEle = $(".vod_area");
    const evtEle = $(".swiper-slide");

    tgEle.hide();

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

      tgEle
        .css({
          width: sizeW + "px",
          height: sizeH + "px",
          top: posT + "px",
          left: posL + "px",
          transform: "scale(1.2)",
        })
        .show();
    });
    tgEle.on("mouseleave", (e) => {
      tgEle.hide();
    });

    // evtEle.on("mousemove",e=>{
    //   tgEle.css({
    //     top: e.pageY+'px',
    //     left: e.pageX+'px'
    //   })
    // })

    // window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 1. vod 정보창 */}
      <section
        id="vod_area"
        className="vod_area"
        style={{
          position: "absolute",
          // pointerEvents: "none",
          zIndex: "999",
        }}
      >
        {/* vod 중앙박스 */}
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
              <img src="./images/content/thum/thum_01.jpg" alt="포스터" />
            </div>
            <h4>
              <span className="tit">우리들의 비 내리는 프로토콜</span>
              <span className="txt">제9화 무너지는 징조 Latch Up</span>
            </h4>
          </a>
        </div>
      </section>
    </>
  );
}
