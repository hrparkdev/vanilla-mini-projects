const todayInformation = document.querySelector(".today-information");
const calender = document.querySelector(".calender");
const clock = document.querySelector(".clock");

function appearToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  calender.innerText = `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일`;

  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

appearToday();
setInterval(appearToday, 1000);