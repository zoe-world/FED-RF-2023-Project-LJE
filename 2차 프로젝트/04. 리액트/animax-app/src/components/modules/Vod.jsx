// Animax VOD 정보 컴포넌트
import { VideoListData } from "../data/video_list"
export function Vod({xy}){
    const selData = VideoListData;
    console.log(xy.x);

    return(
        <>
        {/* 1. vod 정보창 */}
        <section id="vod_area" className="vod_area" style={{
          position:"absolute",
          top:xy.y,
          left:xy.x,
          transformOrigin:"center center",
          transform:"scale(1)"
          }}>
          {/* vod 중앙박스 */}
          <div className="info_bx">
            <a href="#" title="동영상 재생" className="link_play link_ico">
              <span className="tootip">재생하기</span>
            </a>
            <a href="#" title="정보 더보기" className="link_info link_ico">
              <span className="tootip">상세보기</span>
            </a>
            <a href="#" title="찜하기" className="link_zzim link_ico">
              <span className="tootip">찜하기</span>
            </a>
            <a href="#" className="img_bx">
              <div className="img_group">
                <div className="bg"></div>
                <img src="./images/content/thum/thum_01.jpg" alt="포스터" />
              </div>
              <h4>
                <span className="tit">우리들의 비 내리는 프로토콜</span>
                <span className="txt">제9화 무너지는 징조 Latch Up</span>
              </h4>
            </a>
          </div>
        </section>
        </>
    )
}