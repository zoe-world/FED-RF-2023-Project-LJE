// Animax 리스트 스와이프 모듈 컴포넌트

import { SwiperList } from "../plugin/SwiperList";

export function ListSwipe({cat}) {
  // cat - 카테고리명
  return (
    <>
    <section className="list-banner_wrap">
        <h2 className="sr-only">목록형배너 영역</h2>
        <div className="list-banner_box">
          <SwiperList cat={cat}/>
        </div>
      </section>
    </>
  );
}
