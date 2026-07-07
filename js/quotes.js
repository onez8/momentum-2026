const quotes = [
  {
    quote: "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
    author: " 시편 23:1",
  },
  {
    quote: "두려워하지 말라. 내가 너와 함께 함이라",
    author: " 이사야 41:10",
  },
  {
    quote: "수고하고 무거운 짐 진 자들아 다 내게로 오라.",
    author: " 마태복음 11:28",
  },
  {
    quote: "강하고 담대하라.",
    author: " 여호수아 1:9",
  },
  {
    quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
    author: " 빌립보서 4:13",
  },
  {
    quote: "내가 세상 끝날까지 너희와 항상 함께 있으리라.",
    author: " 마태복음 28:20",
  },
  {
    quote: "주는 그리스도시요 살아계신 하나님의 아들이시니이다.",
    author: " 마태복음 16:16",
  },
  {
    quote: "너의 길을 여호와께 맡기라. 그를 의지하면 그가 이루시고.",
    author: " 시편 37:5",
  },
  {
    quote: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다.",
    author: " 시편 119:105",
  },
  {
    quote: "여호와를 앙망하는 자는 새 힘을 얻으리니.",
    author: " 이사야 40:31",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
