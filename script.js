const menuBtn = document.getElementById("menu-btn");
const sideBar = document.getElementById("sidebar");
const sideBarCloseBtn = document.getElementById("sb-c-Btn");
const webLogo = document.getElementById("logo");
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel-slide");
let currentIndex = 0;

webLogo.addEventListener("click", () => {
  location.replace("index.html");
});

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

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

// Initial setup
updateCarousel();
