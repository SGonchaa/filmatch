//*variables
const reviews = document.querySelector(".reviews");
const navLinks = document.querySelector(".nav-links");
const startedBtn = document.querySelector(".get-started-btn");
const joinBtn = document.querySelector(".jn-now-btn");
const linkList = document.querySelectorAll(".list-link");
const element = document.querySelector(".wrapper");
const freeContainer = document.querySelector(".free-app-container");
const imgGroup = document.querySelector(".img-group"); 
const reviewsHeader = document.querySelector(".reviews-header");
const footerContent = document.querySelector(".footer-content");
const chevron = document.querySelector(".chev");
const paragraph = document.querySelector(".p-paragraph");


chevron.addEventListener("click", () => {
  paragraph.classList.toggle("show");
});

//*click design
startedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  startedBtn.style.color = "#fff";
  startedBtn.style.backgroundColor = "#62BD95";
});

joinBtn.addEventListener(".click", (e) => {
  e.preventDefault();
  joinBtn.style.color = "#fff";
  joinBtn.style.backgroundColor = "#F37D90";
});

document.querySelectorAll(".list-link").forEach((item) => {
  item.addEventListener("click", (event) =>{
    event.preventDefault();
    item.style.color = "#F37D90";
    item.style.textDecoration = "underline";
  });
});

//*animations
//****1*/
const observer1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeIn");
    } else {
      entry.target.classList.remove("animate__animated", "animate__fadeIn");
    }
  });
};

const myObserver = new IntersectionObserver(observer1);
myObserver.observe(element);

//****2 */
const observer2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__wobble");
    } else {
      entry.target.classList.remove("animate__animated", "animate__wobble");
    }
  });
};

const myObserver2 = new IntersectionObserver(observer2);
myObserver2.observe(navLinks);

//****3 */
const observer3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__zoomIn");
    } else {
      entry.target.classList.remove("animate__animated", "animate__zoomIn");
    }
  });
};

const myObserver3 = new IntersectionObserver(observer3);
myObserver3.observe(startedBtn);

//****4 */
const observer4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__zoomIn");
    } else {
      entry.target.classList.remove("animate__animated", "animate__zoomIn");
    }
  });
};

const myObserver4 = new IntersectionObserver(observer4);
myObserver4.observe(joinBtn);

//****5 */
const observer5 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__swing");
    } else {
      entry.target.classList.remove("animate__animated", "animate__swing");
    }
  });
};

const myObserver5 = new IntersectionObserver(observer5);
myObserver5.observe(freeContainer);

//****6*/
const observer6 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__swing");
    } else {
      entry.target.classList.remove("animate__animated", "animate__swing");
    }
  });
};

const myObserver6 = new IntersectionObserver(observer6);
myObserver6.observe(imgGroup);

//****7*/
const observer7 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
    } else {
      entry.target.classList.remove("animate__animated", "animate__slideInLeft");
    }
  });
};

const myObserver7 = new IntersectionObserver(observer7);
myObserver7.observe(footerContent);

//****8*/
const observer8 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
    } else {
      entry.target.classList.remove("animate__animated", "animate__slideInLeft");
    }
  });
};

const myObserver8 = new IntersectionObserver(observer8);

//*slider
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