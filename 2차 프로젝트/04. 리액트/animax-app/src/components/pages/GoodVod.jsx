// Animax 추천 TV프로그램 컴포넌트

export function GoodVod({ VodListData }) {
    let goodItemData = [...VodListData];
  goodItemData.sort((x, y) => {
    let a = Number(x.idx);
    let b = Number(y.idx);
    return a == b ? 0 : a > b ? 1 : -1;
  });
  let epi = goodItemData.filter((v)=>v.epiNum!=='미공개' && v.epiNum > 1)
  const goodItem = epi[Math.ceil(Math.random()*epi.length)]
  console.log(goodItem.thumSrc)
  return (
    <article className="good_wrap">
      <h3>추천! TV 프로그램</h3>
      <div className="good_bx_wrap">
        <dl className="good_bx">
          <dt className="good_img_bx">
            <div className="good_video">
              <img src="" alt="" />
            </div>
          </dt>
          <dd className="good_cont">
            <div className="text-group">
              <span className="sm-logo">
                <img src="./images/banner/good_logo.png" alt="" />
              </span>
              <h4 className="tit">
                Lv.02 슬슬 보스가 나올 시간이므로
                <em className="age_badge bd-all">ALL</em>
                <em className="age_badge bd-7">7</em>
                <em className="age_badge bd-12">12</em>
                <em className="age_badge bd-15">15</em>
                <em className="age_badge bd-19">19</em>
              </h4>
              <p className="txt">
                FOS의 오프라인 이벤트에서 우연히 '야마다'를 발견한 아카네가 전
                남친 (with 새로운 여친)과 조우했을 때 충동적으로 야마다를 자신의
                남친이라고 소개하고 만다. 그것을 보상하기 위해 들어간 요리
                주점에서 아카네는 잔뜩 취해 야마다의 집에서 신세를 지게 되고
                추억이 담긴 목걸이를 잃어버리는 큰 실수를 저지른다. 아카네는
                목걸이를 찾기 위해 FOS의 길드 룸에서 만난 야마다에게 연락한다.
                하지만 야마다로부터
              </p>
              <span className="btn_wrap">
                <a href="#" className="btn play_btn">
                  <span className="txt">지금 감상하기</span>
                </a>
                <a href="#" className="btn info_btn">
                  <span className="txt">작품 상세보기</span>
                </a>
              </span>
            </div>
          </dd>
        </dl>
      </div>
    </article>
  );
}
