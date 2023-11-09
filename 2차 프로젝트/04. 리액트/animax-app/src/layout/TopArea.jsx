// 상단 컴포넌트

import { Logo } from "../contents/Logo";


export function TopArea(){
    return(
        <>
            {/* 1. 상단영역 */}
            <header className="top_area">
                {/* 1-1.로고박스 */}
                <Logo />
                {/* 1-2.GNB박스 */}
                <nav className="gnb_box">
                    <ul>
                        <li><a href="#">홈</a></li>
                        <li><a href="#">프로그램</a></li>
                        <li><a href="#">공지사항</a></li>
                    </ul>
                </nav>
                {/* 1-3.UTIL박스 */}
                <div className="util_box">
                    <ul>
                        <li className="search">
                            <a href="#"><span className="sr-only">검색</span></a>
                        </li>
                        <li className="ttbl"><a href="#">편성표</a></li>
                        <li className="join"><a href="#">회원가입</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}////// TopArea 컴포넌트 ////