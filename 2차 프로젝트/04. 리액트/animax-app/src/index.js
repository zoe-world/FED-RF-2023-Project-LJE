// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { Program } from "./components/pages/Program";
import { Live } from "./components/pages/Live";
import { Customer } from "./components/pages/Customer";
import { Login } from "./components/pages/Login";
function App(){
  return(
    <>
      {/* "homepage": "https://zoe-world.github.io/FED-RF-2023-Dist-LJE/" */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>

            <Route path="main" element={<Main/>}/>
            <Route path="/program" element={<Program />}/>
            <Route path="/live" element={<Live />}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/customer" element={<Customer cat="customer"/>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)