const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-input");

function appearUserName() {
  const getUserName = localStorage.getItem("username");
  if (getUserName === null) {
    loginForm.classList.remove("hidden");
  } else if (getUserName !== null) {
    loginForm.classList.add("hidden");
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
  localStorage.setItem("username", userName);
  appearUserName();
});

