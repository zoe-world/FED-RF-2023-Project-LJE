// Animax 오늘의 업데이트 리스트 컴포넌트

import { SwiperVodList } from "../plugin/SwiperVodList";
import { BestTagBtn } from "./BestTagBtn";

// 배너데이터
export function BestTag({ cat, item, tagItem, setTagItem }) {
  // cat = 카테고리명
  // tagItem = 베스트태그 아이템 상태변수

  // 마우스오버 함수
  const getItem = (x) => {
    item(x);
  };

  return (
    <>
      <article className="list_v2_wrap tag">
        <h3>
          인기 태그 작품
          <span className="tab_btn">
            <BestTagBtn tagItem={tagItem} setTagItem={setTagItem}/>
          </span>
        </h3>
        <SwiperVodList cat={cat} item={getItem} tagItem={tagItem}/>
      </article>
    </>
  );
}
