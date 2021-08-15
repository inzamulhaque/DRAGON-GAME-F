let score = 0;
let cross = true;

document.onkeydown = (e) => {
    if (e.keyCode == 38) {
      const dino = document.querySelector(".dino");
      dino.classList.add("animateDino");
      setTimeout(() => {
        dino.classList.remove("animateDino");
      }, 900);
    }
    if (e.keyCode == 39) {
        const dino = document.querySelector(".dino");
        let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinox + 112 +"px";
    }
    if (e.keyCode == 37) {
        const dino = document.querySelector(".dino");
        let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinox - 112) +"px";
    }
}

setInterval(() => {
    const dino = document.querySelector(".dino");
    const gameOver = document.querySelector(".gameOver");
    const obstacle = document.querySelector(".obstacle");

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    let offSetX = Math.abs(dx-ox);
    let offSetY = Math.abs(dy-oy);

    if (offSetX < 73 && offSetY < 30) {
        gameOver.style.display = "block";
        obstacle.classList.remove("obstacleAni");
    } else if (offSetX < 45 && cross) {
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            let newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
        }, 500);
    }
}, 10);

const updateScore = (score) => {
    const scoreCont = document.getElementById("scoreCont");
    scoreCont.innerHTML = `Your Score: ${score}`;
}