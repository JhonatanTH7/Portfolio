export function InyectNavBar(container) {
  container.innerHTML = `
  <div class="navBar_logoContainer">
  <a href="../index.html"
    ><img
      src="../img/Logos/Monkey1NoBG.png"
      alt="Logo"
      class="navBar_logo"
  /></a>
  </div>
  <div class="navBar_rightSide">
  <div class="navBar_programmingContainer">
    <img
      src="../img/MonkeyCodingNoBG.png"
      alt="Logo"
      class="navBar_logo"
    />
    <!-- <a href="#">Languages</a>
    <a href="#"> Projects </a> -->
  </div>
  <div class="navBar_sayHiContainer">
    <img
      src="../img/MonkeySayingHiNoBG.png"
      alt="Logo"
      class="navBar_logo"
    />
    <!-- <a href="#">Languages</a>
    <!-- <a href="#">Say Hi!</a> -->
  </div>
  </div>
    `;
}
