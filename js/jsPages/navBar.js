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
      class="navBar_logo programmingLogo"
    />
    <div class="containerDropDownMenu programmingMenu">
    <ul class="dropDownMenu">
      <li>
        <a class="dropDownItem" href="projects.html">Projects</a>
      </li>
    </ul>
  </div>
  </div>
  <div class="navBar_sayHiContainer">
    <img
      src="../img/MonkeySayingHiNoBG.png"
      alt="Logo"
      class="navBar_logo sayHiLogo"
    />
    <div class="containerDropDownMenu sayHiMenu">
    <ul class="dropDownMenu">
      <li>
        <a class="dropDownItem languageItem" href="#">Language</a>
        <ul class="dropDownSubMenu">
          <p class="arrowLanguages"><</p>
          <li><a class="Flag spainFlag" href=""><img src="../img/Flags/Spain-Flag.png" alt="Spain-Flag" /></a></li>
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

  document
    .querySelector(".dropDownSubMenu")
    .addEventListener("mouseover", function () {
      document.querySelector(".languageItem").classList.add("hovered");
    });

  document
    .querySelector(".dropDownSubMenu")
    .addEventListener("mouseout", function () {
      document.querySelector(".languageItem").classList.remove("hovered");
    });
}
