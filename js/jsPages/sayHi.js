import { InyectVantaBirds } from "./vanta.js";
import { InyectNavBar } from "./navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
});
