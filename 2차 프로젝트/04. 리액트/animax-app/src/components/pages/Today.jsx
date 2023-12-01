// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";

// 배너데이터
export function Today({ cat }) {
  // cat = 카테고리명
  return (
    <>
      <article className="list_wrap today">
        <h3>오늘의 업데이트</h3>
        <SwiperVodList cat={cat}/>
        <div className="list_box">
          <div className="arrow_box">
            <a href="#" className="arrow_btn prev_btn">
              <span className="sr-only">이전 슬라이드 보기</span>
            </a>
            <a href="#" className="arrow_btn next_btn">
              <span className="sr-only">다음 슬라이드 보기</span>
            </a>
          </div>
          <ul className="thum-list">
            <li className="on">
              <a href="#" title="동영상 재생" className="link_play link_ico">
                <span className="tootip">재생하기</span>
              </a>
              <a href="#" title="정보 더보기" className="link_info link_ico">
                <span className="tootip">상세보기</span>
              </a>
              <a href="#" title="찜하기" className="link_zzim link_ico">
                <span className="tootip">찜하기</span>
              </a>
              <a href="#" className="link_img">
                <div className="img_group">
                  <div className="bg"></div>
                  <video
                    src="./images/banner/today_banner01.mp4"
                    autoPlay
                    muted
                  ></video>
                  {/* <img src="./images/banner/today_banner01.jpg" alt="" /> */}
                </div>
                <h4>
                  <span className="tit">
                    코드 기아스 반역의 를르슈 코드 기아스 반역의 를르슈코드
                  </span>
                  <span className="txt">
                    STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE 2
                    각성한 하얀 기사
                  </span>
                </h4>
              </a>
            </li>
            <li>
              <a href="#" title="동영상 재생" className="link_play link_ico">
                <span className="tootip">재생하기</span>
              </a>
              <a href="#" title="정보 더보기" className="link_info link_ico">
                <span className="tootip">상세보기</span>
              </a>
              <a href="#" title="찜하기" className="link_zzim link_ico">
                <span className="tootip">찜하기</span>
              </a>
              <a href="#" className="link_img">
                <div className="img_group">
                  <div className="bg"></div>
                  <img src="./images/banner/today_banner01.jpg" alt="" />
                </div>
                <h4>
                  <span className="tit">
                    코드 기아스 반역의 를르슈 코드 기아스 반역의 를르슈코드
                  </span>
                  <span className="txt">
                    STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE 2
                    각성한 하얀 기사
                  </span>
                </h4>
              </a>
            </li>
          </ul>
          <div className="list-ctl_box">
          <ol className="paging_list">
            <li>
              <a href="#" className="paging_btn">
                1
              </a>
            </li>
            <li className="on">
              <a href="#" className="paging_btn">
                2
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                3
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                4
              </a>
            </li>
          </ol>
          <a href="#" title="오늘의 업데이트 더보기" className="more_btn">
            더보기
          </a>
        </div>
        </div>
      </article>
    </>
  );
}
