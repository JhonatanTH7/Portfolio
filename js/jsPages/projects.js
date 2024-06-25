import { InyectVantaBirds } from "./vanta.js";
import { InyectNavBar } from "./navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");
const btnBackend = document.querySelector(".btnBackend");
const btnFrontend = document.querySelector(".btnFrontend");
const btnFullStack = document.querySelector(".btnFullstack");
const cardsContainer = document.querySelector(".page-content");

document.addEventListener("DOMContentLoaded", () => {
  // InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
  getData("Frontend");
});

btnBackend.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnBackend.classList.contains("btnOn")) {
    btnFrontend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnBackend.classList.toggle("btnOn");
    getData("Backend");
  }
});

btnFrontend.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnFrontend.classList.contains("btnOn")) {
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnFrontend.classList.toggle("btnOn");
    getData("Frontend");
  }
});

btnFullStack.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnFullStack.classList.contains("btnOn")) {
    btnFrontend.classList.remove("btnOn");
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.toggle("btnOn");
    getData("Fullstack");
  }
});

function clean() {
  Array.from(cardsContainer.children).forEach((child) => {
    if (!child.classList.contains("shadow")) {
      cardsContainer.removeChild(child);
    }
  });
}

async function getData(category) {
  clean();
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
