// HTML
const toggleBtn = document.getElementById("toggle-button");
const togglePg = document.getElementById("toggle-page");

// // for toggle accessibility
// toggleBtn.addEventListener("change", () => {
//   toggleBtn.setAttribute("aria-checked", toggleBtn.checked);
// });

// // page toggle
// toggleBtn.addEventListener("click", () => {
//   togglePg.classList.toggle("toggled");
//   console.log("clickc");
// });

// nav list

const navBtn = document.getElementById("nav-btn");
const navList = document.getElementById("nav-list");

navBtn.addEventListener("click", () => {
  console.log("click!!");
  navList.classList.toggle("active");
});
