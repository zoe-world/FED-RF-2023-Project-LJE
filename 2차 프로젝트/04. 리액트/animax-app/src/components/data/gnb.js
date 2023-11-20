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
        txt:"COMICS",
        link:"/comics",
        sub:[
            {
                txt: "LATEST COMICS",
                link: "/co1",
            },
            {
                txt: "DC UNIVERSE INFINITE",
                link: "/co2",
            },
            {
                txt: "ALL COMICS SERIES",
                link: "/co3",
            },
        ],
    },
    {
        txt:"MOVIES & TV",
        link:"/movies",
        sub:[
            {
                txt: "DC MOVIES",
                link: "/mv",
            },
            {
                txt: "DC SERIES",
                link: "/mv",
            },
            {
                txt: "DC ON HBO MAX",
                link: "/mv",
            },
        ]
    },
    {
        txt:"GAMES",
        link:"/games",
    },
    {
        txt:"NEWS",
        link:"/news",
    },
    {
        txt:"VIDEO",
        link:"/video",
    },
    {
        txt:"OPINIONS",
        link:"/board",
    },
];