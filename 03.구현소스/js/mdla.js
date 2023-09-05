// MDLA js - mdla.js

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 로드구역 //////////////
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수 /////////////
function loadFn() {
    // 함수호출확인
    console.log("로딩!");

    /* 
        시나리오
        nav-item에 들어갈 텍스트들을 배열로 나열한 후에,
        그 텍스트들을 .nav-item에 넣어줘야함
        .nav-item 배열 개수에 맞게 생성해서 그 안에 집어 넣어야함
        span으로 단어를 하나씩 감싼뒤에, transition을 0.1씩 느리게 준다. 
    */
    // 0. 네비에 들어가야하는 텍스트
    const navName = ["Resort 2024", "Top stories", "Trend reports", "Latest shows"];

    // 1. 대상: .nav-item
    // 1-1. 대상확인
    const navLink = qsa(".nav-item");

    // 2. 이벤트 대상
    //.nav-item .btn-text 안에 span
    const newEle = (txt) => {
        let new_nav = "";
        for (let x of txt) {
            new_nav += `<span>${x}</span>`;
        }
        return new_nav;
    };
    navLink.forEach((ele, idx) => {
        (ele.innerHTML = `
            <span class="btn-text">${newEle(navName[idx])}</span>
            <span class="btn-text2">${newEle(navName[idx])}</span>
        `)
    });

    // 3. 생성된 span에 transition주기
    let navTxt = qsa('.btn-text span');
    navTxt.forEach((ele,idx)=>{
        (ele.style.transitionDelay = (0.05*idx) + 's')
    })

    console.log(navTxt);
} //////// loadFn //////////
