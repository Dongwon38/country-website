// HTML
const toggleBtn = document.getElementById("toggle-button");
const togglePg = document.getElementById("toggle-page");

// nav list

const navBtn = document.getElementById("nav-btn");
const navList = document.getElementById("nav-list");

navBtn.addEventListener("click", () => {
  console.log("click!!");
  navList.classList.toggle("active");
});
