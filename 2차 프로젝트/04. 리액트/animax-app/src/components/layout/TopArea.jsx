// Animax 상단영역 공통 컴포넌트

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../modules/Menu";

export function TopArea(){
    const layoutRef = useRef(null);
    const handleScroll = useCallback((e) => {
        console.log(e,'됨?')
      }, [])
      
      useEffect(() => {
        if (layoutRef.current) {
          layoutRef.current.addEventListener('scroll', handleScroll)
          return () => layoutRef.current.removeEventListener('scroll', handleScroll)
        }
      }, [])
    // const [ScrollY, setScrollY] = useState(0);
    // const [ScrollAct,SetScrollAct] = useState(false);

    // function handleScroll(){
    //     if(ScrollY > 70){
    //         setScrollY(window.pageYOffset);
    //         SetScrollAct(true);
    //     }
    //     else{
    //         setScrollY(window.pageYOffset);
    //         SetScrollAct(false);
    //     }
    // }        
    // useLayoutEffect(()=>{
    //     window.addEventListener("scroll", handleScroll);
    //     return ()=>{
    //         window.removeEventListener("scroll",handleScroll)
    //     }
    // },[ScrollY])
    return(
        <>
            {/* 1. 상단영역 */}
            <header  ref={layoutRef}>
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