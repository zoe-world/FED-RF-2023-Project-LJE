// mdla data js - data.js
/************************************* 
    [ 데이터항목 ]
    1.메뉴명 : navName
*************************************/
const navName = ["Resort 2023","Top stories","Trend reports","Latest shows","Menu","Close"];

// 메인 커서 이미지 데이터
/************************************* 
    [ 데이터항목 ]
    1.브랜드명 : brand
    2.이미지명 : imgName
    3.쇼주제 : title
    4.설명 : description
*************************************/
const brand = {
  Versace: {
    brand: "Versace",
    imgName: "cursor01",
    title: "Curve Appeal",
    description:
      "The hourglass silhouette of fall 2023 references both Christian Dior’s New Look of 1947 and Martin Margiela’s 1997 Stockman dress-form collection.",
  },
  Balenciaga: {
    brand: "Balenciaga",
    imgName: "cursor02",
    title: "Blow-Up",
    description:
      "Coincidence or reaction? With prices still expanding designers explored ever more exaggerated volumes for fall.",
  },
  "Thom Browne": {
    brand: "Thom Browne",
    imgName: "cursor03",
    title: "Central Casting",
    description:
      "Theatrical runway presentations may have ceded to more traditional show formats, but that didn’t stop designers from conjuring comic-book heroes.",
  },
  "Bottega Veneta": {
    brand: "Bottega Veneta",
    imgName: "cursor04",
    title: "Drama Queens",
    description:
      "The convergence of “The Tudors” exhibition at The Met, the deaths of Vivienne Westwood and Queen Elizabeth II, and the impending coronation are making this a very English moment.",
  },
  "Miu Miu": {
    brand: "Miu Miu",
    imgName: "cursor05",
    title: "Keeping It Real",
    description:
      "Fashion’s rush to minimalism is part of a larger reevaluation of the classic wardrobe, including the separates-led Take Ivy look.",
  },
  "The Row": {
    brand: "The Row",
    imgName: "cursor06",
    title: "All Tár, All the Time",
    description:
      "Lydia Tár might be a fictional character, but she is a bona fide fashion muse.",
  },
};

// resort2023 이미지 데이터
/************************************* 
    [ 데이터항목 ]
    1.브랜드명 : brand
    2.이미지명 : imgName
    3.쇼주제 : title
    4.설명 : description
*************************************/
const runway = {
  balenciaga: {
    name: "balenciaga",
    img: [
      "balenciaga01_1",
      "balenciaga01_2",
      "balenciaga01_3",
      "balenciaga01_4",
      "balenciaga01_5",
      "balenciaga01_6",
      "balenciaga01_7",
    ],
  },

  chanel: {
    name: "chanel",
    img: [
      "chanel02_1",
      "chanel02_2",
      "chanel02_3",
      "chanel02_4",
      "chanel02_5",
      "chanel02_6",
      "chanel02_7",
    ],
  },
  dior: {
    name: "christian dior",
    img: [
      "resort03_1",
      "resort03_2",
      "resort03_3",
      "resort03_4",
      "resort03_5",
      "resort03_6",
      "resort03_7",
    ],
  },
  thom: {
    name: "thom browne",
    img: [
      "resort04_1",
      "resort04_2",
      "resort04_3",
      "resort04_4",
      "resort04_5",
      "resort04_6",
      "resort04_7",
    ],
  },
  valentino: {
    name: "valentino",
    img: [
      "resort05_1",
      "resort05_2",
      "resort05_3",
      "resort05_4",
      "resort05_5",
      "resort05_6",
      "resort05_7",
    ],
  },
};

export {navName,brand,runway};