// Animax 메인영역 컴포넌트

import { Main } from "../pages/Main";

export function MainArea() {
return (
<>
  <Main />
  <div id="main_area">
    <main className="main_area">
      {/* 2-1. TOP배너 박스 */}
      <section className="top-banner_box">
        <h2 className="sr-only">탑배너영역</h2>
        <div className="txt_bx">
          <h3>
            <img src="./images/banner/top_banner_logo01.png" alt="제목" />
            <span>꼬마마법사 레미</span>
            <p>
              귀여운 다섯 견습마녀들의
              <br />
              좌충우돌 성장기
            </p>
          </h3>
          <button className="view_btn">자세히보기</button>
        </div>
        <div className="img_bg"></div>
        <div className="img_bx">
          <video src="./images/banner/top_banner01.mp4" autoPlay muted loop></video>
        </div>
      </section>
      {/* 2-2. LIST배너 박스 */}
      <section className="list-banner_wrap">
        <h2 className="sr-only">목록형배너 영역</h2>
        <div className="list-banner_box">
          <div className="arrow_box">
            <a href="#" className="arrow_btn prev_btn">
              <span className="sr-only">이전 슬라이드 보기</span>
            </a>
            <a href="#" className="arrow_btn next_btn">
              <span className="sr-only">다음 슬라이드 보기</span>
            </a>
          </div>
          <div className="lb">
            <section className="banbx">
              <ul className="list dtg"></ul>
            </section>
          </div>
        </div>
        <div className="paging_wrap">
          <ol className="paging_list">
            <li>
              <a href="#" className="paging_btn">
                1
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                2
              </a>
            </li>
            <li className="on">
              <a href="#" className="paging_btn">
                3
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                4
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                5
              </a>
            </li>
            <li>
              <a href="#" className="paging_btn">
                6
              </a>
            </li>
          </ol>
          <div className="ctl_box">
            <a href="#" className="ctl_btn">
              <span className="sr-only">멈춤</span>
              <img src="./images/stop.png" alt="" />
              {/* <img src="./images/play.png" alt="" /> */}
            </a>
          </div>
        </div>
      </section>
      {/* 2-3. 컨텐츠영역 */}
      <section className="content_wrap">
        <h2 className="sr-only">컨텐츠 영역</h2>
        <article className="pr-banner_wrap">
          <h3 className="sr-only">프로모션 배너 영역</h3>
          <div className="pr-banner">
            <a href="#">
              <img src="./images/banner/line_banner.png" alt="명탐정 코난 앙상블스타즈 콜라보 캠페인 진행중" />
            </a>
          </div>
        </article>
        {/* 2.3.1 오늘의 업데이트 리스트 */}
        <article className="list_wrap today">
          <h3>오늘의 업데이트</h3>
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
                    <video src="./images/banner/today_banner01.mp4" autoPlay muted></video>
                    {/* <img src="./images/banner/today_banner01.jpg" alt="" /> */}
                  </div>
                  <h4>
                    <span className="tit">
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
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
                      코드 기아스 반역의 를르슈 코드 기아스 반역의
                      를르슈코드
                    </span>
                    <span className="txt">
                      STAGE 2 각성한 하얀 기사 STAGE 2 각성한 하얀 기사STAGE
                      2 각성한 하얀 기사
                    </span>
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* 2.3.2 인기 작품 리스트 */}
        <article className="list_v2_wrap rank">
          <h3>
            인기 작품
            <span className="tab_btn">
              <button type="button" className="on">
                월별
              </button>
              <button type="button">분기별</button>
            </span>
          </h3>
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
          </div>
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
                <a href="#" className="link_img">
                  <a href="#" title="찜하기" className="link_zzim link_ico">
                    <span className="tootip">찜하기</span>
                  </a>
                  <div className="img_group">
                    <a href="#" title="동영상 재생" className="link_play link_ico">
                      <span className="tootip">재생하기</span>
                    </a>
                    <div className="ep_tit">
                      <p>제1화 어둠의 콜로세움 <br /> 바로보기</p>
                    </div>
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <div className="txt_group">
                    <h4>
                      <a href="#" title="정보 더보기" className="link_info link_ico">
                        <span className="tootip">상세보기</span>
                      </a>
                      <span className="tit">
                        무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                      </span>
                    </h4>
                    <ul className="txt_list">
                      <li>이용연령</li>
                      <li>장르명</li>
                      <li>작가명</li>
                    </ul>
                    <p className="desc">
                      아직 보지 못한 꿈을 잡고 싶은 카스가 미라이.아이돌을
                      동경하는 모가미 시즈카.진심으로 몰두할 수 있는
                    </p>
                  </div>
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
                  <em className="em on">2</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em on">3</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">4</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">5</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">6</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/rank_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* 2.3.3 라이브 방송 */}
        <article className="live_wrap">
          <h3>LIVE ON AIR!</h3>
          <div className="list-ctl_box">
            <a href="#" title="라이브편성표 더보기" className="more_btn">
              {" "}
              라이브 편성표
            </a>
          </div>
          <div className="live_bx_wrap">
            <dl className="live_bx">
              <dt className="live_img_bx">
                <div className="live_video">
                  <img src="./images/banner/live_thum.jpg" alt="" />
                  {/* <video src="./images/banner/live_video.mp4" controls></video> */}
                  <div className="ctl_box">
                    <button className="play_btn">
                      <img src="./images/sound.png" alt="" />
                    </button>
                  </div>
                </div>
              </dt>
              <dd className="live_cont">
                <div className="text-group">
                  <span className="sm-logo">
                    <img src="./images/banner/live_logo.png" alt="" />
                  </span>
                  <h4 className="tit">
                    Lv.02 슬슬 보스가 나올 시간이므로
                    <em className="age_badge bd-all">ALL</em>
                    <em className="age_badge bd-7">7</em>
                    <em className="age_badge bd-12">12</em>
                    <em className="age_badge bd-15">15</em>
                    <em className="age_badge bd-19">19</em>
                  </h4>
                  <p className="txt">
                    FOS의 오프라인 이벤트에서 우연히 '야마다'를 발견한
                    아카네가 전 남친 (with 새로운 여친)과 조우했을 때
                    충동적으로 야마다를 자신의 남친이라고 소개하고 만다.
                    그것을 보상하기 위해 들어간 요리 주점에서 아카네는 잔뜩
                    취해 야마다의 집에서 신세를 지게 되고 추억이 담긴
                    목걸이를 잃어버리는 큰 실수를 저지른다. 아카네는
                    목걸이를 찾기 위해 FOS의 길드 룸에서 만난 야마다에게
                    연락한다. 하지만 야마다로부터
                  </p>
                  <span className="btn_wrap">
                    <a href="#" className="btn play_btn">
                      <span className="txt">지금 감상하기</span>
                    </a>
                    <a href="#" className="btn info_btn">
                      <span className="txt">작품 상세보기</span>
                    </a>
                  </span>
                </div>
                {/* <div className="time-group">
                  <div className="time_wrap">
                    <ul className="time_list">
                      <li className="on">
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="time_item">
                          <em className="time">18:00</em>
                          <p className="time_txt">
                            <span className="tit">리아데일의 대지에서</span>
                            <span className="info">제11화 소개와 마차와 메이드와 이사</span>
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </dd>
            </dl>
          </div>
        </article>
        {/* 2.3.4 인기 태그 작품 */}
        <article className="list_v2_wrap tag">
          <h3>
            인기 태그 작품
            <span className="tab_btn">
              <button type="button" className="on">
                #이능력
              </button>
              <button type="button">#액션/배틀</button>
              <button type="button">#일상물</button>
              <button type="button">#아이돌</button>
              <button type="button">#이세계</button>
              <button type="button">#요괴/오컬트</button>
            </span>
          </h3>
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
          </div>
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
                <a href="#" className="link_img">
                  <a href="#" title="찜하기" className="link_zzim link_ico">
                    <span className="tootip">찜하기</span>
                  </a>
                  <div className="img_group">
                    <a href="#" title="동영상 재생" className="link_play link_ico">
                      <span className="tootip">재생하기</span>
                    </a>
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <div className="txt_group">
                    <h4>
                      <a href="#" title="정보 더보기" className="link_info link_ico">
                        <span className="tootip">상세보기</span>
                      </a>
                      <span className="tit">
                        무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                      </span>
                    </h4>
                    <ul className="txt_list">
                      <li>이용연령</li>
                      <li>장르명</li>
                      <li>작가명</li>
                    </ul>
                    <p className="desc">
                      아직 보지 못한 꿈을 잡고 싶은 카스가 미라이.아이돌을 동경하는 모가미 시즈카.진심으로 몰두할 수 있는
                    </p>
                  </div>
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
                  <em className="em on">2</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em on">3</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">4</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">5</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
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
                  <em className="em">6</em>
                  <div className="img_group">
                    <div className="bg"></div>
                    <img src="./images/banner/tag_banner01.jpg" alt="" />
                  </div>
                  <h4>
                    <span className="tit">
                      무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~
                    </span>
                    <span className="txt">판타지</span>
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  </div>
</>
);
} ////// MainArea 컴포넌트 //////