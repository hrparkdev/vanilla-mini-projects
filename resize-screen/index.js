const body = document.body;

const BIG_SCREEN = "big-screen";
const MEDIUM_SCREEN = "medium-screen";
const SMALL_SCREEN = "small-screen";

function handleResize() {
  const width = window.innerWidth;

  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.add(SMALL_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  }
}

window.addEventListener("resize", handleResize);