// Animax 오늘의 업데이트 리스트 컴포넌트

import { useEffect, useState } from "react";
import { SwiperVodList } from "../plugin/SwiperVodList";

// 배너데이터
export function Today({ cat, item, }) {

  // cat = 카테고리명

  // 최신 한달 날짜 필터링 하기

  // 날짜 변환 함수 ex) yyyy-mm-dd
  const fm = (x) => `
    ${x.getFullYear()}-${
    x.getMonth() + 1 < 10 ? "0" + (x.getMonth() + 1) : x.getMonth() + 1
  }-${x.getDate() < 10 ? "0" + x.getDate() : x.getDate()}`;

  // 날짜 비교 함수
  const getMonthDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();

    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
  };

  // const evtEle = document.querySelector(".list_box .swiper-slide");

  // console.log(evtEle);

  // // let sizeW = Math.floor(ele.width());
  // // let sizeH = Math.floor(ele.height());
  // // let posT = Math.floor(ele.offset().top);
  // // let posL = Math.floor(ele.offset().left);

  // useEffect(() => {
  //   const tgEle = $(".vod_area");
  //   const evtEle = $(".list_wrap .swiper-slide");

  //   console.log(evtEle.find("img").attr("src"));
  //   // evtEle.on("mouseenter", (e) => {
  //   //   const ele = $(e.currentTarget);

  //   //   let isrc = ele.find("img").attr("src");
  //   //   let tit1 = ele.find("h4 span").first().text();
  //   //   let tit2 = ele.find("h4 span").last().text();

  //   //   tgEle.find("img").attr("src", isrc);
  //   //   tgEle.find("h4 span").first().text(tit1);
  //   //   tgEle.find("h4 span").last().text(tit2);

  //   //   tgEle.css({
  //   //     width: sizeW + "px",
  //   //     height: sizeH + "px",
  //   //     top: posT + "px",
  //   //     left: posL + "px",
  //   //     transform: "scale(1.2)",
  //   //     transformOrigin: "center center",
  //   //     opacity: "1",
  //   //     zIndex: 99,
  //   //     transition:'transform .3s linear .5s, opacity .3s linear .5s',
  //   //   }).addClass('on')
  //   // });
  //   // evtEle.on("mouseleave", (e) => {
  //   //   tgEle.css({
  //   //     transform: "scale(1)",
  //   //     opacity: "0",
  //   //     transition:'transform 0.3s linear 0.5s, opacity 0.3s linear 0.5s',
  //   //   }).removeClass('on');
  //   // })

  // }, []);

  const getItem = (x) => {
    item(x);
  };
  return (
    <>
      <article className="list_wrap today">
        <h3>오늘의 업데이트</h3>
        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVodList
          cat={cat}
          getMonthDiff={getMonthDiff}
          fm={fm}
          item={getItem}
          
        />
      </article>
    </>
  );
}
