// Animax GNB메뉴 데이터
export const menu = [
    {
        txt:"홈",
        link:"/",
    },
    {
        txt:"프로그램",
        link:"/program",
    },
    {
        txt:"LIVE",
        link:"/live",
    },
    {
        txt:"고객센터",
        link:"/cs",
        sub:[
            {
                txt: "공지사항",
                link: "/notice",
            },
            {
                txt: "FAQ",
                link: "/faq",
            },
        ]
    },
    {
        txt:"이용약관",
        link:"/policy",
        sub:[
            {
                txt: "이용약관",
                link: "/policy",
            },
            {
                txt: "개인정보처리방침",
                link: "/privacy",
            },
        ]
    },
    {
        txt:"로그인",
        link:"/login",
    },
    {
        txt:"이용권",
        link:"/ticket",
    },
];