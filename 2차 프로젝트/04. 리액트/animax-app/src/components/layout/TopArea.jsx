// Animax 상단영역 공통 컴포넌트

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../modules/Menu";

export function TopArea(){
    const [isScrollTop, setIsScrollTop] = useState(0);

    const checkTop = () => {
      if (window.scrollY >= 70) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
      console.log("함수 구역", window.scrollY, "250 이하냐? ", isScrollTop);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", checkTop);
      return () => {
        window.removeEventListener("scroll", checkTop);
      };
    });

    return(
        <>
            {/* 1. 상단영역 */}
            <header className={isScrollTop < 70?"top_area "+"fixed":"top_area"}>
                {/* 1-1.로고박스 */}
                <h1 className="logo">
                    <Link to="/">
                        <img src="./images/logo.png" alt="Animax" />
                    </Link>
                </h1>
                {/* 1-2.GNB박스 */}
                <nav className="gnb_box">
                    <ul>
                        <Menu cat="gnb"/>
                    </ul>
                </nav>
                {/* 1-3.UTIL박스 */}
                <div className="util_box">
                    <ul>
                        <li className="search">
                            <a href="#"><span className="sr-only">검색</span></a>
                        </li>
                        <Menu cat="util"/>
                    </ul>
                </div>
            </header>
        </>
    );
}////// TopArea 컴포넌트 ////