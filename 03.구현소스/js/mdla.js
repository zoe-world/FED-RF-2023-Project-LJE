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
  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
}; ///////// domFn 객체 ///////////

/* 부드러운 스크롤 호출 */
startSS();

// nav-item 에 들어가는 span html 로 넣기

const navName = [
  "Resort 2023",
  "Top stories",
  "Trend reports",
  "Latest shows",
  "Menu",
];

const navLink = domFn.qsa(".nav-item");
const newEle = (txt) => {
  let new_nav = "";
  for (let x of txt) {
    new_nav += `<span class="txt">${x}</span>`;
  }
  return new_nav;
};
/* 
.nav-item안에 .btn-text, .btn-text2를 navName 배열 순으로 넣고,
.btn-text 안에 span에 transitionDelay 주기
*/
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
  });
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

/* 
  메인그림판영역에서 마우스 커서를 따라서 이동하는 .cursor__wrap 만들기 
*/

// 1.  대상선정 : .cursor__box
const cursorBox = domFn.qs(".cursor__box");
let hcode = "";

for (let x in brand) {
  hcode += `
  <a href="#" class="cursor__wrap">
    <img src="./images/${brand[x]["imgsrc"]}" loading="eager" alt="" />
    <h3 class="h3__case">
        <span class="brand__name">${brand[x]["brand"]}.</span>
        <span class="tit">${brand[x]["title"]}.</span>
        Tapping into youth culture to create a new kind of entertainment
        brand.
    </h3>
  </a>
  `;
}
cursorBox.innerHTML = hcode;

// sticky menu 내용넣기
// 대상선정 sticky-menu

const rw = domFn.qs(".photo__wrap");
domFn.addEvt(window, "scroll", moveSlide);
function moveSlide() {
  // 스크롤 위치값
  let scTop = window.scrollY;

  let bTop = domFn.getBCR(rw);

  // 움직일 대상
  const target = domFn.qs('.photo__list');
  // console.log(scTop,bTop, target);

  if(bTop > 0 ){
    target.style.left = "0px";
  } else if (bTop <= 0 && bTop >= -4800){
    target.style.left = bTop + "px";
  } else {
    target.style.left = "-4800px";
  }
} ////////// moveSlide 함수 ///////
