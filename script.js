const menuBtn = document.getElementById("menu-btn");
const sideBar = document.getElementById("sidebar");
const sideBarCloseBtn = document.getElementById("sb-c-Btn");

menuBtn.addEventListener("click", () => {
  sideBar.style.right = "0";
});

sideBarCloseBtn.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navToTop.style.visibility = "hidden";
  } else {
    navToTop.style.visibility = "visible";
    console.log("Scrolling up");
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

navToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
