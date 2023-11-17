// Animax 하단영역 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faFacebookF,
faXTwitter,
faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function FooterArea() {
return (
<>
    <footer className="footer_area" id="footer_area">
        <div className="info_box">
            <dl className="ntc_list">
                <dt className="tag">공지사항</dt>
                <dd className="tit">
                    <a href="#">
                        샹그릴라 프론티어 -망겜 헌터 갓겜에 도전하다- 방송시간 변경 안내
                    </a>
                </dd>
            </dl>
            <div className="sns_box">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
        </div>
        <div className="foot_box">
            <div className="fif_box">
                <h2><img src="./images/logo_w.png" alt="" /></h2>
                <ul className="link_list">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                </ul>
                <address>
                    <ul>
                        <li>상호: 애니맥스브로드캐스팅코리아 유한회사</li>
                        <li>대표이사: 전승택</li>
                        <li>개인정보관리책임자: 구본승</li>
                        <li>주소 : 서울 영등포구 국제금융로 10 Three IFC 28층</li>
                        <li>사업자등록번호: 101-86-20166</li>
                        <li>대표번호: 02-705-5000</li>
                    </ul>
                </address>
                <p>Copyright &copy; 2020 KC Global Media Singapore Pte. Ltd. All Rights Reserved.</p>
            </div>
            <div className="cs_box">
                <a href="tel:02-705-5000" className="tel">T.02-705-5000</a>
                <ul className="cs_list">
                    <li>월 - 금 : 10:00AM ~ 6:00PM</li>
                    <li>토,일 공휴일 휴무 / 점심시간 : 12:30PM ~ 1:30PM</li>
                </ul>
                <div className="fs_list">
                    <select name="" className="foot_select">
                        <option>FAMILY SITE</option>
                    </select>
                </div>
            </div>
        </div>
    </footer>
</>
);
} ////// FooterArea 컴포넌트 ////