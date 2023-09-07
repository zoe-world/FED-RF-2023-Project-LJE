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
        span으로 단어를 하나씩 감싼뒤에, 단어 별로 끊어서 transition을 0.1씩 느리게 준다. 
    */
    // 0. 네비에 들어가야하는 텍스트
    let navName = ["Resort 2024", "Top stories", "Trend reports", "Latest shows"];

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
    // .nav-item안에 .btn-text, .btn-text2를 navName 배열 순으로 넣기
    navLink.forEach((ele, idx) => {
        ele.innerHTML = `
            <span class="btn-text">${newEle(navName[idx])}</span>
            <span class="btn-text2">${newEle(navName[idx])}</span>
        `;
    });

    //.btn-text 안에 span에 transitionDelay 주기.
    navLink.forEach((ele) => {
        let temp = ele.querySelectorAll("span>span");
        let cnt = temp.length / 2;
        temp.forEach((ele, idx) => {
            let num = idx;
            if (idx >= cnt) {
                num = idx - cnt;
                ele.style.display = "inline-block";
                ele.style.transform = "translateY(100%)";
            } else {
                ele.style.display = "inline-block";
                ele.style.transform = "translateY(0)";
            }
            ele.style.transitionDelay = 0.05 * num + "s";
        });
    });
} //////// loadFn //////////
