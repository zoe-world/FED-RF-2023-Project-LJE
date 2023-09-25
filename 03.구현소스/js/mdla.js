// MDLA js - mdla.js

import {
  navName,
  brand,
  runway
} from "./data.js";

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
  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
}; ///////// domFn 객체 ///////////

/* 부드러운 스크롤 호출 */
startSS();

// 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0, 0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤시 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
domFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
//////// mouseup /////////////

// 0. 키보드 방향키 이동시 위치값 반영
domFn.addEvt(window, "keyup", () => setPos(window.scrollY));
//////// keyup /////////////

// nav-item 에 들어가는 span html 로 넣기

const newEle = (txt) => {
  let new_nav = "";
  for (let x of txt) {
    new_nav += `<span class="txt">${x}</span>`;
  }
  return new_nav;
};
const navBox = domFn.qs(".nav");
const navA = domFn.qsa(".nav a");
let hcod = "";

hcod += "<ul class='nav__list'>";

for (let i = 0; i < navA.length + 1; i++) {
  /* 
    class name명 공백 제거 후 대문자를 소문자로 변환 
  */
  let navIdx = navName[i];
  navIdx = navIdx.replace(/(\s*)/g, "").toLowerCase();

  hcod += `
  <li class="nav__li">
  <a href="#" class="nav-item ${navIdx}"></a>
  </li>
  `;
}
navBox.innerHTML = hcod;
/* 
.nav-item안에 .btn-text, .btn-text2를 navName 배열 순으로 넣고,
.btn-text 안에 span에 transitionDelay 주기
*/

const navLink = domFn.qsa(".nav-item");

function navData() {
  navLink.forEach((ele, idx) => {
    ele.innerHTML = `
              <span class="btn-text">${newEle(navName[idx])}</span>
              <span class="btn-text2">${newEle(navName[idx])}</span>
          `;
    let temp = domFn.qsaEl(ele, "span>span");
    let cnt = temp.length / 2;
    temp.forEach((ele, idx) => {
      let num = idx;
      if (idx >= cnt) {
        //.btn-text2
        num = idx - cnt;
        ele.style.transform = "matrix(1, 0, 0, 1, 0, 18)";
        ele.style.transitionDelay = 0.05 * num + "s";
      } else {
        //.btn-text
        ele.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        ele.style.transitionDelay = 0.05 * num + "s";
      }
    }); ////////// forEach ////////////
  }); ////////// forEach ////////////

  // navLink에 마우스오버했을 때, .btn-text에 translate 효과 주기
  navLink.forEach((ele) => {
    let mtit = domFn.qsaEl(ele, "span>span");
    let cnt = mtit.length / 2;
    domFn.addEvt(ele, "mouseover", overFn);
    domFn.addEvt(ele, "mouseout", leaveFn);

    function overFn() {
      Array.from(mtit).forEach((ele, idx) => {
        let num = idx;
        //.btn-text2
        if (idx >= cnt) {
          num = idx - cnt;
          ele.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          ele.style.transitionDelay = 0.05 * num + "s";
        } else {
          ele.style.transform = "matrix(1, 0, 0, 1, 0, -18)";
          ele.style.transitionDelay = 0.05 * num + "s";
        }
      });
    }

    function leaveFn() {
      Array.from(mtit).forEach((ele, idx) => {
        let num = idx;
        if (idx >= cnt) {
          //.btn-text2
          num = idx - cnt;
          ele.style.transform = "matrix(1, 0, 0, 1, 0, 18)";
          ele.style.transitionDelay = 0.02 * num + "s";
        } else {
          ele.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          ele.style.transitionDelay = 0.02 * num + "s";
        }
      });
    }
  });
}

navData();

/******************************************************** 
    [ menu 버튼 클릭시 전체메뉴 영역 보여주기 ]
*******************************************************/
const header = domFn.qs(".header");
const menuBtn = domFn.qs(".menu");
const fullMenu = domFn.qs(".fsc__wrap");
const closeBtn = domFn.qs(".close");
const menuList = domFn.qsa(".nav-item");

domFn.addEvt(menuBtn, "click", openFn);
domFn.addEvt(closeBtn, "click", closeFn);

function openFn() {
  closeBtn.classList.add('active');
  header.classList.add('inverse');
  fullMenu.classList.add('show');
  document.body.classList.add('scroll');
  menuList.forEach(ele=>{
    if(ele.innerText == 'close'){
      closeBtn.classList.remove('hide')
    } else {
      ele.classList.add('hide')
    }
  })
} /////////// menuFn ///////////
function closeFn() {
  document.body.classList.remove('scroll');
  closeBtn.classList.remove('active');
  header.classList.remove('inverse');
  fullMenu.classList.remove('show');
} /////////// menuFn ///////////

/******************************************************** 
    [ 메인 영역에 마우스 오버시 패션쇼 게시글 바로가기 링크 생성하기 ]
    - for-in문을 이용하여 HTML코드 구성 
*******************************************************/

const cursorBox = domFn.qs(".cursor__box");
let hcode = "";

for (let x in brand) {
  hcode += `
  <a href="#" class="cursor__wrap">
    <img src="./images/${brand[x]["imgName"]}.png" loading="eager" alt="" />
    <h3 class="h3__case">
        <span class="brand__name">${brand[x]["brand"]} <span class="tit">${brand[x]["title"]}.</span></span>
        Tapping into youth culture to create a new kind of entertainment
        brand.
    </h3>
  </a>
  `;
}
cursorBox.innerHTML = hcode;

/******************************************************** 
[ 메인 영역에 마우스 오버시 패션쇼 게시글 바로가기 링크 생성하기 ]
    - 마우스 커서 따라가면서, 이미지 나타났다가 사라지기
*******************************************************/
let wrappers = Array.from(domFn.qsa(".cursor__wrap"));
let lastIndex = -1;
let lastX = -1;
let lastY = -1;
let mouseIdleTimeout = null;
let lastVisibleWrapper = null;
let cursorContainer = document.querySelector(".cursor__box"); // Added cursorContainer variable here for easy access.
function fadeOutAndScaleDown(wrapper) {
  setTimeout(() => {
    wrapper.classList.add("hide");
    setTimeout(() => {
      wrapper.classList.remove("visible", "hide");
      wrapper.style.transform = "scale(0)";
      wrapper.style.opacity = "0";
    }, 1000);
  }, 1000);
}
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  if (
    lastX === -1 ||
    lastY === -1 ||
    Math.abs(mouseX - lastX) >= 100 ||
    Math.abs(mouseY - lastY) >= 100
  ) {
    const i = (lastIndex + 1) % wrappers.length;
    const wrapper = wrappers[i];
    wrapper.style.left = `${mouseX - wrapper.offsetWidth / 2}px`;
    wrapper.style.top = `${mouseY - wrapper.offsetHeight / 2}px`;
    wrapper.style.zIndex = `${i + 1}`;
    wrapper.style.transform = "scale(1)";
    wrapper.style.opacity = "1";
    wrapper.classList.add("visible");
    if (lastVisibleWrapper && lastVisibleWrapper.classList.contains("hold")) {
      lastVisibleWrapper.classList.remove("hold");
    }
    lastVisibleWrapper = wrapper;
    if (mouseIdleTimeout !== null) {
      clearTimeout(mouseIdleTimeout);
    }
    mouseIdleTimeout = setTimeout(() => {
      if (
        lastVisibleWrapper &&
        !cursorContainer.classList.contains("fadeout")
      ) {
        // Added check for cursorContainer's class
        lastVisibleWrapper.classList.add("hold");
        // cursorDot.classList.add('cursorbtn');
      }
    }, 1000);
    lastIndex = i;
    lastX = mouseX;
    lastY = mouseY;
    fadeOutAndScaleDown(wrapper);
  }
});

/******************************************************** 
    [ Resort2023 패션쇼 데이터 구성하기 ]
    -배열데이터를 이용하여 HTML코드 구성
*******************************************************/
const runwBox = domFn.qs(".runway__box");
let tcode = "";

tcode += "<ul class='runway__list'>";

for (let x in runway) {
  tcode += `
    <li class="runway__li" data-name="${runway[x]["name"]}">
      <a href="#" class="runway__name">${runway[x]["name"]}</a>
    </li>
    `;
}
runwBox.innerHTML = tcode;

/******************************************************** 
    [ Resort2023 패션쇼 브랜드별로 이미지 변경하기 ]
*******************************************************/
const photoWrap = domFn.qs(".photo__wrap");

let pcode = "";
let num = 0;
pcode += '<div class="photo__box">';

for (let y in runway){
  num++;

  let dataName = domFn.qsEl(y,'.runway__li').getAttribute('data-name');
  console.log(dataName)
  pcode += `
  <ul ${brandName == domFn.qs('.runway__li').src('data-name')?'data-name="${brandName}"':''}>
    
  </ul>
  `;
}
pcode += '</div>';
photoWrap.innerHTML = pcode;


let stsMove = 1;
let scTop = window.scrollY;

domFn.addEvt(window, "scroll", moveSlide);

function moveSlide() {
  if (stsMove) return;

  let bTop = domFn.getBCR(photoWrap);

  // 움직일 대상
  const target = domFn.qs(".photo__list");
  // console.log(scTop,bTop, target);

  if (bTop > 0) {
    target.style.left = "0px";
  } else if (bTop <= 0 && bTop >= -2300) {
    target.style.left = bTop + "px";
  } else {
    target.style.left = "-2300px";
  }
} ////////// moveSlide 함수 ///////

// .runway__li 클릭시, .runway__wrap 박스 왼쪽으로 사라지기
const runwLi = domFn.qsa(".runway__li");
const menuBox = domFn.qs(".runway__wrap");


runwLi.forEach((ele) => {
  domFn.addEvt(ele, "click", (e) => {
    e.preventDefault();
    ele.classList.add("on");
    if (ele.classList.contains("on")) {
      menuBox.style.transform = `translateX(calc(-100vw - 2.4rem*2))`;
      menuBox.style.transition = "1s";
      stsMove = 0;
      photoBox.style.height = "calc(100vh + 2300px)";
    } else {}
  });
});