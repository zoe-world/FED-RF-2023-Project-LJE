// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";

// 배너데이터
export function Today({ cat }) {
  // cat = 카테고리명
  return (
    <>
      <article className="list_wrap today">
        <h3>오늘의 업데이트</h3>
        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVodList cat={cat}/>
      </article>
    </>
  );
}
