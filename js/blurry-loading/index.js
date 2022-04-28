const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
  
let loadingNum = loadingText.innerText;

function changeLoadingNum() {
  if (loadingNum < 100) {
    loadingNum++;
    loadingText.innerText = `${loadingNum}%`;
  } else {
    loadingText.innerText = "";
    clearInterval(intervalID);
  }

  const nLoadingNum = Number(loadingNum);
  bg.style.filter = `blur(${100 - nLoadingNum}px)`;
}

const intervalID = setInterval(changeLoadingNum, 50);
