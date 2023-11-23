// Animax 리스트배너스와이프 컴포넌트

import { SwiperApp } from "../plugin/SwiperApp";

export function ListSwipe(){
    return(
        <>
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
                  <ul className="list">
                    <li className="list_item">
                      <a href="#" className="items">
                        <div className="txt_bx">
                          <span className="tag">
                            [애니플러스샵] 4주애인 콜라보 카페 OPEN!
                          </span>
                          <span className="tit">4주애인 콜라보 카페가 열렸다!</span>
                        </div>
                        <div className="img_bx">
                          <img src="./images/banner/list_banner01.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#" className="items">
                        <div className="txt_bx">
                          <span className="tag">
                            [애니플러스샵] 4주애인 콜라보 카페 OPEN!
                          </span>
                          <span className="tit">4주애인 콜라보 카페가 열렸다!</span>
                        </div>
                        <div className="img_bx">
                          <img src="./images/banner/list_banner02.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li className="list_item">
                      <a href="#" className="items">
                        <div className="txt_bx">
                          <span className="tag">
                            [애니플러스샵] 4주애인 콜라보 카페 OPEN!
                          </span>
                          <span className="tit">4주애인 콜라보 카페가 열렸다!</span>
                        </div>
                        <div className="img_bx">
                          <img src="./images/banner/list_banner03.png" alt="" />
                        </div>
                      </a>
                    </li>
                  </ul>
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
        </>
    )
}