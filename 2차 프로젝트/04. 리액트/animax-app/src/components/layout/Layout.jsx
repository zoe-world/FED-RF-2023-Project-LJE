// Animax 레이아웃 컴포넌트
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { QuickArea } from "./QuickArea";
import { FooterArea } from "./FooterArea";
import { useNavigate } from "react-router-dom";
import { VodArea } from "./VodArea";


export function Layout() {
  // 랜더링 후 (화면보이기전) 실행구역
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const goNav = useNavigate();

  // 라우터 이동함수: pgName - 페이지이름 / param -전달값
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

  return (
    <>
      <div className="wrap">
        <QuickArea chgPageFn={chgPage} />
        <TopArea />
        <MainArea />
        <VodArea />
        <FooterArea />
      </div>
    </>
  );
}
