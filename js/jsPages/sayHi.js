import { InyectVantaBirds } from "./vanta.js";
import { InyectNavBar } from "./navBar.js";
const vantaBirds = document.querySelector("#vantaBirds");
const navBar = document.querySelector(".navBar");
const btn = document.getElementById("buttonFormEmailJS");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  InyectVantaBirds(vantaBirds);
  InyectNavBar(navBar);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_e7uymcv";
  const templateID = "template_mg02097";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
  form.reset();
});
