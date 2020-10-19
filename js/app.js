const btn = document.getElementById("checkbox");
const menu = document.getElementById("dropdown");
const icon = document.getElementById("menutoggle");

btn.addEventListener("click", function () {
  if (btn.checked != true) {
    icon.style.backgroundImage = "url(images/icon-hamburger.svg)";
    icon.style.backgroundRepeat = "no-repeat";
    icon.style.backgroundSize = "contain";
    menu.style.display = "none";
  } else {
    icon.style.backgroundImage = "url(images/icon-close.svg)";
    icon.style.backgroundRepeat = "no-repeat";
    icon.style.backgroundSize = "contain";
    menu.style.display = "block";
  }
});
