const img = document.getElementById("img");
const overlaytext = document.getElementById("overlay-text");
img.addEventListener("mouseover", script1);
function script1() {
  overlaytext.style.display = "block";
  img.style.opacity = "0.3";
  overlaytext.style.animation = "fadeIn";
  overlaytext.style.animationDuration = "1s";
}
img.addEventListener("mouseout", script2);
function script2() {
  img.style.opacity = "1";
  overlaytext.style.display = "none";
}
overlaytext.addEventListener("mouseover", script1);
overlaytext.addEventListener("mouseout", script2);
