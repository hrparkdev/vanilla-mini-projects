const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "nsername";

function appearUserName() {
  const getUserName = localStorage.getItem(USERNAME_KEY);
  if (getUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  } else if (getUserName !== null) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(`Hello, ${getUserName}`);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
  }
}

appearUserName();
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  appearUserName();
});

