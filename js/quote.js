const quotes = [
 {
    quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
       {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다​",
    author: "데모스테네스"
  },
        {
    quote: "언제나 현재에 집중할 수 있다면 행복할것이다.​",
    author: "파울로 코엘료"
  }, {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다..​",
    author: "나폴레옹"
  },{
    quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.​",
    author: "생떽쥐베리"
  },{
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.​",
    author: "나딘 스테어"
  },{
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.​",
    author: "하버트 개서"
  },
  
  
  
]

const quoteBox =document.querySelector(".quote-box__box")
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


function changeQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = `${ todaysQuote.quote }`;
  author.innerText = `-${ todaysQuote.author }-`;
}
const images = ["bg.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg"];

function changeImage(){
  const bgImage = document.createElement("img");
quoteBox.appendChild(bgImage);
   const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.className ="changeimg"
  bgImage.src = `img/${chosenImage}`; 
 }

 changeQuote()
changeImage();
setInterval(changeImage, 4777);
setInterval(changeQuote, 4777);


quoteBox.addEventListener("click", changeQuote);




