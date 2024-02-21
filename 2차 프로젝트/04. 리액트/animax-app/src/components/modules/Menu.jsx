// Animax 메뉴 컴포넌트
import { useState } from "react";
import { menu } from "../data/gnb"; 
import { NavLink } from "react-router-dom";

export function Menu(props) {
    // props.cat - 메뉴 분류명
    // 선택데이터
    const selMenu = menu[props.cat];
  return (
    <>
      {selMenu.map((v, i) => (
        <li key={i}>
          <NavLink to={v.link} className={({isActive})=> isActive?v.link+' active':v.link}>{v.txt}</NavLink>
        </li>
      ))}
    </>
  );
}
