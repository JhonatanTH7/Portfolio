import { InyectNavBar } from "./navBar.js";
const navBar = document.querySelector(".navBar");
const btn = document.getElementById("buttonFormEmailJS");
const form = document.getElementById("form");
const btnClose = document.querySelector(".btn-close");

document.addEventListener("DOMContentLoaded", () => {
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
      setTimeout(() => {
        btnClose.click();
      }, 1500);
    },
    (err) => {
      btn.value = "Send Email";
      alert("Ooops, something went wrong :( " + JSON.stringify(err));
    }
  );
  form.reset();
});
