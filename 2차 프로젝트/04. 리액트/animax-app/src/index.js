// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { Program } from "./components/pages/Program";
import { Live } from "./components/pages/Live";

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="/program" element={<Program />}/>
            <Route path="/live" element={<Live />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)