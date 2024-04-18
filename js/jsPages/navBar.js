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
  </div>
  <div class="navBar_sayHiContainer">
    <img
      src="../img/MonkeySayingHiNoBG.png"
      alt="Logo"
      class="navBar_logo sayHiLogo"
    />
    <div class="containerDropDownMenu">
    <ul class="dropDownMenu">
      <li>
        <a class="dropDownItem" href="#">Language</a>
        <ul class="dropDownSubMenu">
          <li><a class="Flag" href=""><img src="../img/Flags/Spain-Flag.png" alt="Spain-Flag" /></a></li>
          <li><a class="Flag" href=""><img src="../img/Flags/USA-Flag.png" alt="USA-Flag" /></a></li>
        </ul>
      </li>
      <li>
        <a class="dropDownItem" href="sayHi.html">Say Hi!</a>
      </li>
    </ul>
  </div>
  </div>
  </div>
    `;
}
