// Show/hide cart preview
const cartBtn = document.getElementById("cartBtn");
const cartPreview = document.getElementById("cartPreview");

cartBtn.addEventListener("click", () => {
  cartPreview.style.display = cartPreview.style.display === "block" ? "none" : "block";
});

// Close notification bar
document.querySelector(".notification-close").addEventListener("click", () => {
  document.querySelector(".notification-bar").style.display = "none";
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Swiper sliders
const dealsSwiper = new Swiper("#dealsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

const testimonialSwiper = new Swiper("#testimonialSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
