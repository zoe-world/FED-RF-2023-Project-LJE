// redux/slide.js
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  value: { curIdx: "", curTit: "", curDesc: "", curImg: "", curEpiTit: "" },
};

export const itemSlice = createSlice({
  name: "item",
  // 초기값
  initialState,
  reducers: {
    mouseOver: (state,action) => {
      state.list.find((v) => v.idx === action.idx);
    },
  },
  state: {
    list: [
      {
        idx: "1",
        tit: `우리들의 비 내리는 프로토콜`,
        desc: `엄마와 여동생 셋이서 살고 있는 고등학교 2학년 토키노야 슌.^사고로 인한 아빠의 죽음과 여동생의 부상을 계기로, 한때 열중했던 게임을 그만두고^현재는 E스포츠 카페 'FOX ONE'에서 일하고 있었다.^^소꿉친구이기도 한 게임 친구들과 교류하면서 슌은 알바와 공부에 열중했지만,^별안간 'FOX ONE'에 막대한 액수의 빚이 있다는 것이 발각되었다.^^`,
        thumSrc: "/images/content/thum/thum_01.jpg",
        epiTit: "제9화 무너지는 징조 Latch Up",
      },
      {
        idx: "2",
        tit: `아이돌 마스터`,
        desc: `아이돌그것은 영원한 소녀들의 동경.하지만 그 정점에 서는 것은 극히 일부에 불과하다.이것은 그러한 서바이벌의 세계에 도전해나가는13명 소녀들의 이야기...`,
        thumSrc: "/images/content/thum/thum_02.jpg",
        epiTit: "26화 특별편 765프로덕션 이야기",
      },
      {
        idx: "3",
        tit: `진격의 거인`,
        desc: `100여년 전, 갑자기 나타난 거인4들에 의해 멸종 위기에 처한 인류는 살아남기 위해 50m의 거대한 벽을 쌓고 그 안에서 숨죽이며 살아가고 있었다.^그러던 어느 날, 초대형 거인의 등장으로 벽은 무너지고, 거인들이 벽 안으로`,
        thumSrc: "/images/content/thum/thum_03.jpg",
        epiTit: "25화 벽 - 스토헤스 구 급습 3",
      },
      {
        idx: "4",
        tit: `오늘부터 신령님`,
        desc: `빚 때문에 아버지는 가출하고 집은 압류당해^젊은 나이에 홈리스 신세가 된 여고생 모모조노 나나미.^^곤란해 하고 있는 나나미 앞에 집을 넘겨주겠다고 말하는 수상한 남자가 나타난다.^그 남자의 정체는`,
        thumSrc: "/images/content/thum/thum_04.jpg",
        epiTit: "13화 오늘부터 신령님",
      },
      {
        idx: "5",
        tit: `코드 기아스 반역의 를르슈`,
        desc: `너를 지키기 위해, 세계를 파괴한다──.^초대국 브리타니아 제국에 점령당한 일본=에어리어11.^^그곳에서 살고 있는 소년 를르슈와 스자쿠.`,
        thumSrc: "/images/content/thum/thum_05.jpg",
        epiTit: "STAGE 14 기아스 대 기아스",
      },
      {
        idx: "6",
        tit: `마이 홈 히어로`,
        desc: `47년간 한 번도 법을 어기지 않고 살아왔다.^하지만, 오늘부터는 살인귀다. 아아......^^사람이 사람을 죽였을 때, 대체 어떤 기분일까를^보잘것없는 회사원, 47세의 '토`,
        thumSrc: "/images/content/thum/thum_06.jpg",
        epiTit: "제12화 지금의 행복",
      },
      {
        idx: "7",
        tit: `【최애의 아이】`,
        desc: `이 연예계에서 거짓말은 무기다"^^지방 도시에서 일하는 산부인과 의사 고로.^어느 날, '최애' 아이돌 'B코마치'의 멤버 아이가 그의 앞에 나타난다.`,
        thumSrc: "/images/content/thum/thum_07.jpg",
        epiTit: "제11화 아이돌",
      },
      {
        idx: "8",
        tit: `장송의 프리렌`,
        desc: `용사 힘멜 일행과 함께 10년에 걸친 모험 끝에 마왕을 물리치고^세계에 평화를 가져온 마법사 프리렌.^^천 년을 넘게 사는 엘프인 그녀는 힘멜 일행과 재회를 약속하고 혼자 여행을 떠난다.`,
        thumSrc: "/images/content/thum/thum_08.jpg",
        epiTit: "제13화 동족 혐오",
      },
      {
        idx: "9",
        tit: `5등분의 신부 ∽`,
        desc: `애니메이션 시리즈에서는 그려지지 않았던 원작 에피소드^알려지지 않은 자매들 각자의 마음은.^^낙제 직전에다 공부를 싫어하는 미소녀 다섯 쌍둥이를^아르바이트 가정교사로서 졸업 전까지 가르치게 된 후타`,
        thumSrc: "/images/content/thum/thum_09.jpg",
        epiTit: "제2화 우연이 없는 여름 방학 (후편)",
      },
      {
        idx: "10",
        tit: `SPY×FAMILY Season 2`,
        desc: `사람은 누구나 아무에게도 보여줄 수 없는 자신을 갖고 있다.^^세계 각국이 물밑에서 치열하게 정보전을 펼치는 시대.^오스타니아와 웨스탈리스는 십수 년간에 걸쳐 냉전 상태에 있었다.`,
        thumSrc: "/images/content/thum/thum_10.jpg",
        epiTit: "MISSION:34 미래를 잇는 손",
      },
      {
        idx: "11",
        tit: `새로운 상사는 귀여운 허당`,
        desc: `상사의 갑질 때문에 멘탈과 위장에 탈이 나서^광고 회사의 영업직으로 이직한 모모세.^^하지만 과거의 트라우마 때문에^'새로운 상사도 또 갑질을 하면 어떡하지...'라는 생각을 하다`,
        thumSrc: "/images/content/thum/thum_11.jpg",
        epiTit: "9화째 그게 궁금하세요~!?",
      },
      {
        idx: "12",
        tit: `아가씨와 충견군`,
        desc: `부모님을 어렸을 때 교통사고로 여읜 세나가키 이사쿠는,^야쿠자 조직의 두목인 할아버지의 집에 거두어져 지내게 되었다.^^어린 이사쿠의 보호자로서 그녀를 돌보게 된 사람은,^할아버지네 야쿠자 조직의 부두목이기도 한 우토 케이야였다.`,
        thumSrc: "/images/content/thum/thum_12.jpg",
        epiTit: "제10화 잔향과 속삭임",
      },
      {
        idx: "13",
        tit: `울퉁불퉁 마녀 모녀의 사정`,
        desc: `혼자서 숲에서 지내는 마녀 아리사는 어느 날 인간 아기를 줍게 되었다.^^당혹스러워하면서도 그 아이에게 비올라라고 이름을 붙인 아리사는^그렇게 그 아이를 돌보게 되었는데.`,
        thumSrc: "/images/content/thum/thum_13.jpg",
        epiTit: "제10화 틀어박힌 아들의 고민 사정 / 속내와 겉치레의 공원 사정",
      },
      {
        idx: "14",
        tit: `지박소년 하나코 군`,
        desc: `'저기, 알고 있니? 이 학교의 7대 불가사의 이야기……^카모메 학원에 전해오는 가장 유명한 7대 불가사의에 대한 소문.^^구 교사 3층 여자 화장실 세 번째 칸에는 하나코 씨가 있는데^불러낸 사람의 소원을 무엇이든 이뤄준대.`,
        thumSrc: "/images/content/thum/thum_14.jpg",
        epiTit: "제12괴이 인어공주",
      },
      {
        idx: "15",
        tit: `어떤 아재의 VRMMO 활동기`,
        desc: ` 원 모어 프리 라이프 온라인.^그것은, '또 하나의 인생'이라는 말이 있을 정도로 리얼한 경험이 가능한 VRMMO.^^아저씨 회사원인 타나카 다이치는 어스라는 이름으로 이 게임을 플레이하고 있었다.^전투 같은 데에서 활약해 눈에 띄지 않도록,`,
        thumSrc: "/images/content/thum/thum_15.jpg",
        epiTit: "제10화 어스, 파트너가 생기다",
      },
    ],
    curIdx: "",
    curTit: "",
    curDesc: "",
    curImg: "",
    curEpiTit: "",
  },
});

switch (action.type) {
  case "CHANGE_ITEM":
    const curItem = state.list.find((v) => v.idx === action.idx);
    return {
      ...state,
      curIdx: curItem.idx,
      curTit: curItem.tit,
      curDesc: curItem.desc,
      curImg: curItem.thumSrc,
      curEpiTit: curItem.epiTit,
    };
  case "CLEAR_ITEM":
    return {
      ...state,
    };
  default:
    return state;
}

export default itemSlice.reducer;