// Sticky Menu
var menu = document.getElementsByClassName("header")[0];
if (window.pageYOffset >= 32) {
  menu.classList.add("sticky");
}
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;
  if (currentScroll <= 32) {
    menu.classList.remove("sticky");
    return;
  } else {
    menu.classList.add("sticky");
  }
});

// Portfolio slider
new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1151: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
  },
  navigation: {
    nextEl: ".slider-navigation .next",
    prevEl: ".slider-navigation .prev",
  },
});

// experiences
document
  .querySelector(".experience-section .companies-list")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      document.querySelector(".experience-section .selector").style.top =
        e.target.offsetTop + "px";
      document
        .querySelector(".experience-section .companies-list li.active")
        .classList.remove("active");
      e.target.classList.add("active");
      var targetTab = e.target.getAttribute("data-tab");
      if (targetTab) {
        document
          .querySelector(".experience-section .content.active")
          .classList.remove("active");
        document.getElementById(targetTab).classList.add("active");
      }
    }
  });

// skills
var bars = document.querySelectorAll(".progress-bar .main-bar .fill");
window.addEventListener("scroll", function () {
  if (
    isInViewport(document.getElementsByClassName("progress-bar-wrapper")[0])
  ) {
    bars.forEach((item) => {
      if (isInViewport(item)) {
        item.style.width = item.getAttribute("data-width") + "%";
      }
    });
  }
});

function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
