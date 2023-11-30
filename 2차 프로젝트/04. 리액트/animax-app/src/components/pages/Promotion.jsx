// Animax 메인페이지 배너 컴포넌트

import { Banner } from "../modules/Banner";

// 배너데이터
export function Promotion({ cat }) {
  // cat = 카테고리명

  return (
    <>
      <article className="pr-banner_wrap">
        <h3 className="sr-only">프로모션 배너 영역</h3>
        <div className="pr-banner">
          <a href="#">
            <Banner cat={cat} />
            {/* <img
              src="./images/banner/line_banner.png"
              alt="명탐정 코난 앙상블스타즈 콜라보 캠페인 진행중"
            /> */}
          </a>
        </div>
      </article>
    </>
  );
}
