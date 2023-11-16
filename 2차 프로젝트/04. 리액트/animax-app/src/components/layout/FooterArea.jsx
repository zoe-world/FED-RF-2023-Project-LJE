// Animax 하단영역 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function FooterArea(){
    return(
        <>
            <div id="footer_area">
                <footer className="footer_area">
                    <div className="info_box">
                        <dl className="ntc_list">
                            <dt className="tag">공지사항</dt>
                            <dd className="tit"><a href="#">샹그릴라 프론티어 -망겜 헌터 갓겜에 도전하다- 방송시간 변경 안내</a></dd>
                        </dl>
                        <div className="sns_box">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}////// FooterArea 컴포넌트 ////