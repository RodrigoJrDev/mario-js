const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

jump = () => {
  mario.classList.add("mario-jump");

  setTimeout(() => {
    mario.classList.remove("mario-jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log("loop");
  const pipePosition = pipe.offsetLeft;
  const marioPostion = +window.getComputedStyle(mario).bottom.replace("px", "");
  console.log(marioPostion);

  if (pipePosition <= 120 && pipePosition > 0 && marioPostion < 105) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPostion}px`;
    mario.src = "template/imgs/game-over.png";
    mario.style.width = "85px";
    mario.style.marginLeft = "25px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
