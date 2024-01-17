import React from "react";

export function BestTagBtn({tagItem, setTagItem}) {
  const tagItems = [...new Set(tagItem.map((v) => v.hashtag))]; 
//   const tagItems2 = tagItems.has('#이세계');
  const newTag = tagItems.filter(v=>v.includes('#이세계'));
  console.log(tagItems,newTag)
  return (
    <>
        {
            tagItems.map((v,i)=>{
                return (
                    <button key={i}>
                        {v}
                    </button>
                )
            })
        }
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
