// Animax 상단영역 공통 컴포넌트

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../modules/Menu";

export function TopArea(){
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