// Animax 상단영역 공통 컴포넌트

import { useEffect, useState } from "react";
import { menu } from "../data/gnb"; 
import { Link } from "react-router-dom";

export function TopArea(){
    const gnb = menu.splice(3);

    const [ScrollY, setScrollY] = useState(0);
    const [ScrollAct,SetScrollAct] = useState(false);

    function handleScroll(){
        if(ScrollY > 70){
            setScrollY(window.pageYOffset);
            SetScrollAct(true);
        }
        else{
            setScrollY(window.pageYOffset);
            SetScrollAct(false);
        }
    }
    function scrollListener(){
        window.addEventListener("scroll", handleScroll)
    }
    useEffect(()=>{
        scrollListener();
        return (()=>{
            window.removeEventListener("scroll",handleScroll)
        })
    })
    return(
        <>
            {/* 1. 상단영역 */}
            <header className={ScrollAct?"top_area "+"fixed":"top_area"}>
                {/* 1-1.로고박스 */}
                <h1 className="logo">
                    <a href="#">
                        <img src="./images/logo.png" alt="Animax" />
                    </a>
                </h1>
                {/* 1-2.GNB박스 */}
                <nav className="gnb_box">
                    <ul>
                        {menu.map((v,i)=> (
                            <li key={i}>
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
                        {/* <li><a href="#">홈</a></li>
                        <li><a href="#">프로그램</a></li>
                        <li><a href="#">LIVE</a></li> */}
                    </ul>
                </nav>
                {/* 1-3.UTIL박스 */}
                <div className="util_box">
                    <ul>
                        <li className="search">
                            <a href="#"><span className="sr-only">검색</span></a>
                        </li>
                        <li className="ttbl"><a href="#">이용권</a></li>
                        <li className="ttbl"><a href="#">편성표</a></li>
                        <li className="login"><a href="#">로그인</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}////// TopArea 컴포넌트 ////