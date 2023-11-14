// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from "./components/layout/Layout";

function App(){
  return(
    <>
      <Layout/>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)