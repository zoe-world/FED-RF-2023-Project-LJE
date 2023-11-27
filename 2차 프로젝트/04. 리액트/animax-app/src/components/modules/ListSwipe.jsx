// Animax 리스트 배너 스와이프 컴포넌트

import { SwiperList } from "../plugin/SwiperList";

export function ListSwipe() {
  return (
    <>
      <section className="list-banner_wrap">
        <h2 className="sr-only">목록형배너 영역</h2>
        <div className="list-banner_box">
          <SwiperList />
        </div>
      </section>
    </>
  );
}
