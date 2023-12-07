// 스와이퍼 플러그인 컴포넌트
import React, { useCallback, useEffect, useRef, useState } from "react";
import $, { event } from "jquery";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../plugin/css/video_list.css";

import { VideoListData } from "../data/video_list";

export function SwiperVodList({ cat, getMonthDiff, fm, rank, item, onOverIsActFn}) {
  // cat - 카테고리명
  // getMonthDiff - 날짜계산함수
  // fm - 날짜 변환 함수(ex yyyy-mm-dd)
  // rank - 순위 결정 함수
  // item - 마우스 오버시, 해당 타켓 객체 정보값
   
  const selData = VideoListData;

  // 스와이퍼
  const [swiper, setSwiper] = useState();
  const [mainImgIndex, setMainImgIndex] = useState(0);

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const navPrev = useRef();
  const navNext = useRef();
  const page = useRef();

  const swiperParams = {
    navigation: { prevEl: navPrev.current, nextEl: navNext.current },
    containerModifierClass: "thum-list ",
    pagination: {
      el: ".swiper-paging_list",
      clickable: true,
      bulletClass: "paging_btn",
      bulletActiveClass: "on",
      renderCustom: function (index, className, total) {
        return (
          '<li class="' +
          className +
          '"><span>' +
          [index] +
          "</span><span>" +
          [total] +
          "</span></li>"
        );
      },
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navPrev.current;
      swiper.params.navigation.nextEl = navNext.current;
      swiper.params.pagination.el = page.current;
      swiper.activeIndex = mainImgIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImgIndex(e.activeIndex),
    touchRatio: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      // when window width is >= 480px
      468: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 6,
      },
    },
  };
  /////////////// swiperParams ///////////////
  
  let tog = 0;
  $(".stop_btn").on("click", function (e) {
    if (tog == 0) {
      e.preventDefault();
      swiper.autoplay.stop();
      $(this)
        .removeClass("stop_btn")
        .addClass("play_btn")
        .attr("aria-label", "재생");
      $(this).find("img").attr("src", "./images/play.png");
      tog = 1;
    } else {
      e.preventDefault();
      swiper.autoplay.start();
      $(this)
        .removeClass("play_btn")
        .addClass("stop_btn")
        .attr("aria-label", "멈춤");
      $(this).find("img").attr("src", "./images/stop.png");
      tog = 0;
    }
  });

  // 오늘 날짜 변수
  const myDate = new Date(); 
  const [ishover,setIsHover] = useState(false);

  // 마우스오버 상태변수
    const onMouseOver = (e) => {
    const ele = e.currentTarget;  
    const top = ele.getBoundingClientRect().top;  
    const left = ele.getBoundingClientRect().left;  
    const imgSrc = ele.querySelector('.img').src;
    const tit = ele.querySelector('.tit').innerText;
    const txt = ele.querySelector('.txt').innerText;

    // 마우스 오버된 아이템 정보
    item({
      // 이미지 src, 제목, 에피소드 txt
      top:top,
      left:left,
      img:imgSrc,
      tit:tit,
      txt:txt
    });
  }

  
  // 리턴코드 ////////////////////////////////////
  return (
    <>
      <div className="list_box">
        <div className="arrow_box">
          <a href="#" className="arrow_btn prev_btn" ref={navPrev}>
            <span className="sr-only">이전 슬라이드 보기</span>
          </a>
          <a href="#" className="arrow_btn next_btn" ref={navNext}>
            <span className="sr-only">다음 슬라이드 보기</span>
          </a>
        </div>
        <Swiper {...swiperParams} ref={setSwiper}>
          {cat === "today" && 
          selData
            .filter((v) => getMonthDiff(fm(myDate), v.newEpi))
            .map((v, i) => (
              <SwiperSlide 
                key={i}
                onMouseOver={(e)=>{onMouseOver(e); onOverIsActFn(e);}}
                onMouseOut={(e)=>{onOverIsActFn(e);}}
                >
                <a href="#" className="link_img">
                  <div className="img_group">
                    <div className="bg"></div>
                    <img className="img" src={v.thumSrc} alt={v.tit + " 포스터"} />
                  </div>
                  <h4>
                    <span className="tit">{v.tit}</span>
                    <span className="txt">{v.epiTit}</span>
                  </h4>
                </a>
              </SwiperSlide>
              ))
            }
            {
              cat === "best" &&
              rank
              .map((v, i) => (
              <SwiperSlide 
                key={i}
                onMouseOver={(e)=>{onMouseOver(e); onOverIsActFn(e);}}
                onMouseOut={(e)=>{onOverIsActFn(e);}}
                >
                <a href="#" className="link_img">
                  <div className="img_group">
                    <div className="bg"></div>
                    <img className="img" src={v.thumSrc} alt={v.tit + " 포스터"} />
                  </div>
                  <h4>
                    <span className="tit">{v.tit}</span>
                    <span className="txt">{v.epiTit}</span>
                  </h4>
                </a>
              </SwiperSlide>
              
              ))
            }
        </Swiper>
      </div>

      <div className="list-ctl_box">
        <ol className="paging_list swiper-paging_list"></ol>
        <a href="#" title="오늘의 업데이트 더보기" className="more_btn">
          더보기
        </a>
      </div>
    </>
  );
} /////////// SwiperVodList 컴포넌트 /////
