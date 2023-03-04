const b = document.querySelector("button.button--no");
b.addEventListener("mouseover", moveHover);
function moveHover() {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;
  b.style.left = i + "px";
  b.style.top = j + "px";
}
document.querySelector("button.button--yes").addEventListener("click", function () {
  alert("Yo Let's Go");
});
