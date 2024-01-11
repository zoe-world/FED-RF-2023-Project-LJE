import { shallowEqual, useSelector } from "react-redux";

export function Cast({ ifVodData,infoTit }) {
  // ifVodData - ifVodData등장인물 데이터 

  const itemInfo = useSelector((state) => state.item.value, shallowEqual);
  const item = Object.values(itemInfo)[0];
  const itemTit = item.tit;

  let castLength = infoTit.cast.length;
  
  const makeList = () => {
    return hCode;
  };
  // console.log(item, itemTit, infoTit, castLength);
  let hCode = [];
  for (let i = 0; i < castLength; i++) {
    hCode.push(
      <dl className="cast_list" key={i}>
        <dt className="thum" key={i}>
          <img src={infoTit.cast[i].thum} alt="" />
        </dt>
        <dd className="info">
          <h3 className="name">{infoTit.cast[i].name}</h3>
          <em className="voice">성우 : {infoTit.cast[i].voice}</em>
          <p className="desc"></p>
        </dd>
      </dl>
    );
  }
  return (
    <section className="tab_cont">
      <h2 className="tit">등장인물</h2>
      {makeList()}
    </section>
  );
}
