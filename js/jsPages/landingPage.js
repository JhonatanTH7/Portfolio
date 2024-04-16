import { InyectVantaBirds } from "./vanta.js";
const btnLandingPage = document.querySelector(".btnLandingPage");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
});

btnLandingPage.addEventListener("click", (event) => {
  event.preventDefault;
  window.location = "../../pages/projects.html";
});
mouseover;
