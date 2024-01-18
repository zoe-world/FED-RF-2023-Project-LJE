import React from "react";

export function BestTagBtn({ filterItem, tagTotalItem, VodListData, tagItem ,setTagItem, tagBtn }) {
  return (
    <>
      <button onClick={() => setTagItem(VodListData)}>
        전체
      </button>
      {tagTotalItem.map((v, i) => {
        return (
          <button key={i} onClick={() => filterItem(v)} className={`${setTagItem(v) === tagBtn ? 'on' : ''}`}>
            {v}
          </button>
        );
      })}
      {/* <button type="button" className="on">
        #이능력
      </button>
      <button type="button">#액션/배틀</button>
      <button type="button">#일상물</button>
      <button type="button">#아이돌</button>
      <button type="button">#이세계</button>
      <button type="button">#요괴/오컬트</button> */}
    </>
  );
}
