// Animax 메인 상단배너 컴포넌트

export function TopBanner() {
  return (
    <>
      <section className="top-banner_box">
        <h2 className="sr-only">탑배너영역</h2>
        <div className="txt_bx">
          <h3>
            <img src="./images/banner/top_banner_logo01.png" alt="제목" />
            <span>꼬마마법사 레미</span>
            <p>
              귀여운 다섯 견습마녀들의
              <br />
              좌충우돌 성장기
            </p>
          </h3>
          <button className="view_btn">자세히보기</button>
        </div>
        <div className="img_bg"></div>
        <div className="img_bx">
          <video
            src="./images/banner/top_banner01.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>
    </>
  );
}
