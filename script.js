let swiper = new Swiper (".mySwiper", {
    slidesPerview: 1,
    spaceBetween :20,
});


const chevron = document.querySelector(".chev");
const paragraph = document.querySelector(".p-paragraph");

chevron.addEventListener("click", () => {
  paragraph.classList.toggle("show");
});

let swiper = new Swiper(".mySwiper", {
  slidesperView: 1,
  spaceBetween: 20,
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },
});