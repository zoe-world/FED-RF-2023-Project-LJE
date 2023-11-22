// Animax 레이아웃 컴포넌트
import React, { useLayoutEffect } from "react";
import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { QuickArea } from "./QuickArea";
import { FooterArea } from "./FooterArea";

export function Layout(){
  // 랜더링 후 (화면보이기전) 실행구역 
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  });
    return(
        <>
        <QuickArea/>
        <TopArea/>
        <MainArea/>
        <FooterArea />
      </>
    );
}