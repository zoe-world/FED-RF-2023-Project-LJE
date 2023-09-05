// MDLA js - mdla.js

// DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 로드구역 //////////////
window.addEventListener('DOMContentLoaded',loadFn);

// 로드함수 /////////////
function loadFn(){
    // 함수호출확인
    console.log('로딩!');

    /* 
        시나리오
        nav-item에 들어갈 텍스트들을 배열로 나열한 후에,
        그 텍스트들을 .nav-item에 넣어줘야함
        .nav-item 배열 개수에 맞게 생성해서 그 안에 집어 넣어야함
        span으로 단어를 하나씩 감싼뒤에, transition을 0.1씩 느리게 준다. 
    */
   // 0. 네비에 들어가야하는 텍스트
        const nav_name = [
            "Resort 2024",
            "Top stories",
            "Trend reports",
            "Latest shows"
        ];

    // console.log('네비확인:',nav_name[0],Array.isArray(nav_name));

    // 1. 대상: .nav-item
    // 1-1. 대상확인
    const nav_li = qsa('.nav-li');    
    const nav_item = qsa('.nav-item');    
    let nav_txt = nav_item.innerText;
    let new_nav = '';

    // 2. 이벤트 대상
    
    // for (let x of nav_name){
    //     console.log('x:',x)
    //     new_nav += `<span>${x}</span>`;
    // }

    const newEle = (txt) => {
        
    for (let x of txt){
        // console.log('x:',x)
        new_nav += `
        <li>
            <a href="#" class="nav-item"><span>${x}</span></a>
        </li>
        `;
    }
    return new_nav;
        
    }

    qsa('.nav-list li').forEach((ele,idx)=>ele.innerHTML=`${newEle(nav_name[idx])}`)

} //////// loadFn //////////
