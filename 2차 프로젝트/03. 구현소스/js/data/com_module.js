// 상단,하단 공통 모듈 html 코드
export default {
    "topArea":`
        <!-- 1-1.로고박스 -->
        <h1 class="logo">
            <a href="#">
                <img src="./images/logo.png" alt="Animax" />
            </a>
        </h1>
        <!-- 1-2.GNB박스 -->
        <nav class="gnb">
            <ul>
                <li>
                    <a href="#">홈</a>
                </li>
                <li>
                    <a href="#">프로그램</a>
                </li>
                <li>
                    <a href="#">공지사항</a>
                </li>
            </ul>
        </nav>
        <!-- 1-3.SIDE박스 -->
        <div class="side-box">
        </div>
    `,
    "footerArea":`
        <!-- 3-1.하단로고 -->
        <div class="blogo">
            <img src="./images/footer_logo.png" alt="하단로고">
        </div>
        <!-- 3-2.회사주소 -->
        <address class="addr">
            WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
            ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED 
            BY DOOSAN MAGAZINE.
        </address>
        <!-- 3-3.하단링크 -->
        <ul class="blink">
            <li>
                <a href="#">정기구독</a>
            </li>
            <li>
                <a href="#">회사소개</a>
            </li>
            <li>
                <a href="#">광고 및 제휴</a>
            </li>
            <li>
                <a href="#">개인정보 처리방침</a>
            </li>
        </ul>
    `,
}