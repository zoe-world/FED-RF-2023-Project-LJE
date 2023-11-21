// Animax 레이아웃 컴포넌트
import React from "react";
import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { QuickArea } from "./QuickArea";
import { FooterArea } from "./FooterArea";

export function Layout(){

    return(
        <>
        <QuickArea/>
        <TopArea/>
        <MainArea/>
        <FooterArea />
      </>
    );
}