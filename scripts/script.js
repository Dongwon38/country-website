const toggleBtn = document.getElementById("toggle-btn");
const toggleone = document.getElementById("aaa");
const toggletwo = document.getElementById("bbb");

function switchPage() {
  toggleone.classList.toggle("toggled");
  console.log(toggleone);
  toggletwo.classList.toggle("toggled");
}

toggleBtn.addEventListener("click", switchPage);
