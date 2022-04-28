const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  const difference = new Date(xmasDay - now);

  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const strDays = `${days < 10 ? `0${days}` : days}d`;
  const strHours = `${hours < 10 ? `0${hours}` : hours}h`;
  const strMinutes = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const strSeconds = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `${strDays} ${strHours} ${strMinutes} ${strSeconds}`;
}

getTime();
setInterval(getTime, 1000);