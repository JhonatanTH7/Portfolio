import { InyectVantaBirds } from "./jsPages/vanta.js";
import { InyectNavBar } from "./jsPages/navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
});
