// This helper builds the automatic arcade demo so learners can focus on the marquee.
const demo = document.querySelector("#arcade-demo");

if (demo) {
  const cannon = document.createElement("div");
  cannon.className = "cannon";
  demo.append(cannon);

  const aliens = [];
  let offsetX = 0;
  let offsetY = 0;
  let direction = 1;
  let resetTimer = null;

  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 6; column += 1) {
      const alien = document.createElement("div");
      alien.className = "alien";
      alien.dataset.alive = "true";
      demo.append(alien);
      aliens.push({ element: alien, row, column });
    }
  }

  function placeAliens() {
    aliens.forEach((alien) => {
      const left = 24 + alien.column * 46 + offsetX;
      const top = 22 + alien.row * 34 + offsetY;
      alien.element.style.left = `${left}px`;
      alien.element.style.top = `${top}px`;
    });
  }

  function livingAliens() {
    return aliens.filter((alien) => alien.element.dataset.alive === "true");
  }

  function resetAliens() {
    offsetX = 0;
    offsetY = 0;
    direction = 1;
    aliens.forEach((alien) => {
      alien.element.dataset.alive = "true";
      alien.element.classList.remove("hit");
    });
    placeAliens();
  }

  function marchAliens() {
    offsetX += direction * 14;

    if (offsetX > 84 || offsetX < 0) {
      direction *= -1;
      offsetY += 12;
    }

    if (offsetY > 78) {
      resetAliens();
      return;
    }

    placeAliens();
  }

  function moveCannon(time) {
    const travel = Math.max(demo.clientWidth - 58, 1);
    const wave = (Math.sin(time / 620) + 1) / 2;
    const left = 8 + wave * travel;
    cannon.style.left = `${left}px`;
    requestAnimationFrame(moveCannon);
  }

  function fireLaser() {
    const cannonLeft = parseFloat(cannon.style.left || "0");
    const laserX = cannonLeft + 19;
    const laser = document.createElement("div");
    laser.className = "laser";
    laser.style.left = `${laserX}px`;
    demo.append(laser);

    window.setTimeout(() => laser.remove(), 680);

    const target = livingAliens()
      .map((alien) => {
        const alienLeft = parseFloat(alien.element.style.left || "0") + 14;
        return { alien, distance: Math.abs(alienLeft - laserX) };
      })
      .sort((a, b) => a.distance - b.distance)[0];

    if (target && target.distance < 32) {
      window.setTimeout(() => {
        target.alien.element.dataset.alive = "false";
        target.alien.element.classList.add("hit");

        if (livingAliens().length === 0 && !resetTimer) {
          resetTimer = window.setTimeout(() => {
            resetTimer = null;
            resetAliens();
          }, 900);
        }
      }, 260);
    }
  }

  placeAliens();
  requestAnimationFrame(moveCannon);
  window.setInterval(marchAliens, 520);
  window.setInterval(fireLaser, 780);
}
