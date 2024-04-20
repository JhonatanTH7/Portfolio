import { InyectVantaBirds } from "./vanta.js";
import { InyectNavBar } from "./navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
  getData();
});

async function getData() {
  const url = "../../data/projects/projects.json";
  try {
    const answer = await fetch(url);
    const data = await answer.json();

    const cardsContainer = document.querySelector(".page-content");
    data["FrontEnd"].forEach((card) => {
      cardsContainer.innerHTML += `
      
      <div
      class="card"
      style="
        background-image: url('${card.imageUrl}');
        background-size: cover;
      "
    >
      <div class="content">
        <h2 class="title">${card.name}</h2>
        <p class="copy">
          ${card.description}
        </p>
        <a
          href="${card.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          >View Page</a
        >
      </div>
    </div>

      `;
    });
  } catch (error) {
    console.error(error);
  }
}
