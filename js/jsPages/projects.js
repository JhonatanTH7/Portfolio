import { InyectVantaBirds } from "./vanta.js";
import { InyectNavBar } from "./navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");
const btnBackend = document.querySelector(".btnBackend");
const btnFrontend = document.querySelector(".btnFrontend");
const cardsContainer = document.querySelector(".page-content");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
  getData("Frontend");
});

async function getData(category) {
  const url = "../../data/projects/projects.json";
  try {
    const answer = await fetch(url);
    const data = await answer.json();

    data[category].forEach((card) => {
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

btnBackend.addEventListener("click", (event) => {
  event.preventDefault();
  clean();
  if (!btnBackend.classList.contains("Backend")) {
    btnBackend.classList.toggle("btnOn");
  }
  getData("Backend");
});

btnFrontend.addEventListener("click", (event) => {
  event.preventDefault();
  clean();
  if (!btnFrontend.classList.contains("Frontend")) {
    btnFrontend.classList.toggle("btnOn");
  }
  getData("Frontend");
});

function clean() {
  Array.from(cardsContainer.children).forEach((child) => {
    if (!child.classList.contains("shadow")) {
      cardsContainer.removeChild(child);
    }
  });
}
