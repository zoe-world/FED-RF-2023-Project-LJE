import React from 'react';
import ReactDOM from 'react-dom/client';
import { TopArea } from './layout/TopArea';

function App(){
  return(
    <>
      <TopArea/>
      
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)