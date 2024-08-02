const menuBtn = document.getElementById("menu-btn");
const sideBar = document.getElementById("sidebar");
const sideBarCloseBtn = document.getElementById("sb-c-Btn");
const webLogo = document.getElementById("logo");

webLogo.addEventListener("click", () => {
  location.replace("index.html");
});

// document.getElementById("backHome").addEventListener("click", () => {
//   location.href = "services.html";
// });

menuBtn.addEventListener("click", () => {
  sideBar.style.right = "0";
});

sideBarCloseBtn.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
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
