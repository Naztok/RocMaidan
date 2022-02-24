const burger = document.querySelector("div.burger");
const flexList = document.querySelector(".flex-list");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementsByTagName("header")[0];
let sticky = 200;
burger.addEventListener("click", () => {
  if (flexList.classList.contains("open")) {
    console.log(flexList.classList);
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  } else if (flexList.classList.contains("closed")) {
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  } else {
    flexList.classList.toggle("open");
  }
});
console.log(header.offsetHeight);
console.log(window.pageYOffset);
window.onscroll = function() {
  stickyNav();
  closeInvisibleNav();
};
window.onload = function() {
  // setCopyright();
};
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    header.classList.remove("invisible");
    flexList.classList.add("stickyFlex");
  } else {
    header.classList.remove("sticky");
    flexList.classList.remove("stickyFlex");
  }
}
function closeInvisibleNav() {
  if (window.pageYOffset >= header.offsetHeight) {
    if (window.pageYOffset <= 195) {
      header.classList.add("invisible");
    }
  } else {
    header.classList.remove("invisible");
  }
}
/* function setCopyright() {
  (document.getElementById("copyright-year")).write(new Date().getFullYear());
} */

function sendForm(e) {
  //const { URLSearchParams } = require("url");
  //const url = new URL(window.location.href);
  //let params = new URLSearchParams(url.search.slice(1));

  /*const params = new URLSearchParams();
  params.append("a", 1);*/

  //console.log(new URL(window.location.href));
  let contactUsForm = document.querySelector("form.contact-us-form");
  let formData = new FormData(contactUsForm);
  let entries = [];
  for (let elem of formData.entries()) {
    entries.push(elem);
  }
  console.log(entries); 

    fetch("http://127.0.0.1:5500/functions/formEntry.js", { method: "POST", body: entries })
    .then(res => res.json())
    .then(json => console.log(json));


}
