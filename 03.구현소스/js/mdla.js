// MDLA js - mdla.js

// DOM 함수 객체 ///////////
const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  // 중간쿼리선택자를 하나 더 만듬
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  // 중간쿼리 전체선택자를 하나 더 만듬
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; ///////// domFn 객체 ///////////

// 로드구역 //////////////
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수 /////////////
function loadFn() {
  /* 부드러운 스크롤 호출 */
  startSS();
  /* 
        시나리오
        nav-item에 들어갈 텍스트들을 배열로 나열한 후에,
        그 텍스트들을 .nav-item에 넣어줘야함
        .nav-item 배열 개수에 맞게 생성해서 그 안에 집어 넣어야함
        span으로 단어를 하나씩 감싼뒤에, 단어 별로 끊어서 transition을 0.1씩 느리게 준다. 
    */
  // 0. 네비에 들어가야하는 텍스트
  let navName = ["Resort 2024", "Top stories", "Trend reports", "Latest shows"];

  // 1. 대상: .nav-item
  // 1-1. 대상확인
  const navLink = domFn.qsa(".nav-item");

  // 2. 이벤트 대상
  //.nav-item .btn-text 안에 span

  const newEle = (txt) => {
    let new_nav = "";
    for (let x of txt) {
      new_nav += `<span class="txt">${x}</span>`;
    }
    return new_nav;
  };
  // .nav-item안에 .btn-text, .btn-text2를 navName 배열 순으로 넣기
  //.btn-text 안에 span에 transitionDelay 주기
  navLink.forEach((ele, idx) => {
    ele.innerHTML = `
            <span class="btn-text">${newEle(navName[idx])}</span>
            <span class="btn-text2">${newEle(navName[idx])}</span>
        `;
    let temp = ele.querySelectorAll("span>span");
    let cnt = temp.length / 2;
    temp.forEach((ele, idx) => {
      let num = idx;
      if (idx >= cnt) {
        //.btn-text2
        num = idx - cnt;
        ele.style.display = "inline-block";
        ele.style.transform = "translate(0, 100%)";
      } else {
        //.btn-text
        ele.style.display = "inline-block";
        ele.style.transform = "translate(0px, 0px) translateZ(10px)";
      }
      ele.style.transitionDelay = 0.05 * num + "s";
    });
  }); ////////// forEach ////////////

  // navLink에 마우스오버했을 때,
  // span>span 중 앞에 .btn-text는 transform translateY 가 -100% 되어야 하고,
  // span>span 중 뒤에 .btn-text2는 transform translateY 가 0% 되어야 한다

  // 1. 대상선정
  // 1-1. navLink

  navLink.forEach((ele, idx) => {
    let mtit = domFn.qsaEl(ele, "span>span");
    let cnt = mtit.length / 2;
    domFn.addEvt(ele, "mouseover", overFn);
    domFn.addEvt(ele, "mouseout", leaveFn);
    function overFn() {
      Array.from(mtit).forEach((ele,idx)=>{
      if (idx >= cnt) {
            ele.style.transform = "translate(0px,0px)";
          } else {
            ele.style.transform = "translate(0px, 100%)";
          }
        })
    }
    function leaveFn() {
      Array.from(mtit).forEach((ele,idx)=>{
      if (idx >= cnt) {
            ele.style.transform = "translate(0px,100%)";
          } else {
            ele.style.transform = "translate(0px,0px)";
          }
        })
    }
  });
} //////// loadFn //////////
