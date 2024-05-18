const PgToggleBtn = document.getElementById("pgtogglebtn");
const alterpage = document.getElementById("alterpage");

PgToggleBtn.addEventListener("click", () => {
  alterpage.classList.contains("toggle")
    ? alterpage.classList.remove("toggle")
    : alterpage.classList.add("toggle");
});

// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const links = document.getElementById("main-nav-list");

button.addEventListener("click", function () {
  links.classList.toggle("toggled");
  console.log(links.classList);
});

// Thumb Navigation Toggle

const thumbButton = document.getElementById("thumb-nav-button");
const thumbLinks = document.getElementById("thumb-nav-secondary");

thumbButton.addEventListener("click", function () {
  thumbLinks.classList.toggle("toggled");
});

const toggleBtn = document.getElementById("toggle-btn");
const title = document.getElementById("section-title");
const titleImg = document.getElementById("title-image");

// function togglePage() {
//   titleImg.classList.toggle("toggle");
//   isToggle ?
//   titleImg.src = "images/sample-culture.JPG";
//   titleImg.src = "images/places/sample-cover-places.jpg";
// }

toggleBtn.addEventListener("click", togglePage);

// 기능 1
// 토글버튼, 어센틱 페이지 오른쪽->왼쪽으로 튀어나오기
// 상단은 그대로 토글 버튼 유지
// 왼쪽 여백 주면서 조금 어둡게

// 기능 2
// food 클릭하면 해당 사진 커지고(또는 영상 재생), 튀어나온 느낌
// 설명 들어가고, 주변 어둡게,  아무데나 클릭하면 원상태로 돌아가기
