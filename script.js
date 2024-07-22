const menuBtn = document.getElementById("menu-btn");
const sideBar = document.getElementById("sidebar");
const sideBarCloseBtn = document.getElementById("sb-c-Btn");

menuBtn.addEventListener("click", () => {
  sideBar.style.right = "0";
});

sideBarCloseBtn.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});
