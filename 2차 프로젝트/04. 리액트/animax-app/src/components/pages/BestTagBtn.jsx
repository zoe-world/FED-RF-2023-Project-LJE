import React from "react";

export function BestTagBtn({
  filterItem,
  tagTotalItem,
  tagBtnAct,
}) {
  return (
    <>
      {tagTotalItem.map((v, i) => {
        return i === 0 ? (
          <button
            active={tagBtnAct === "전체"}
            key={i}
            onClick={() => {filterItem('전체')}}
            className={tagBtnAct === v ?'on':''}
          >
            전체
          </button>
        ) : (
          <button
            active={tagBtnAct === v}
            key={i}
            onClick={() => filterItem(v)}
            className={tagBtnAct === v ?
              'on':''}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}
