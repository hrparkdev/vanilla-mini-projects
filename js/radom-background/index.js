const { body } = document;
const imageArray = ["0.jpg", "1.jpg", "2.jpg"];
const chooseImage = imageArray[Math.floor(Math.random() * imageArray.length)];
body.style.backgroundImage = `url(./images/${chooseImage})`;
body.style.backgroundSize = "cover";