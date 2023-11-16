const BAR = document.getElementById("menuToggle")
const NAVMENU = document.querySelector(".nav-links")
const NAV = document.querySelector(".navigation-bar");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll > 19) {
    NAV.classList.add("box-shadow")
  }
  else{ 
    NAV.classList.remove("box-shadow")
  }
})

BAR.addEventListener("click", () => {
  NAVMENU.classList.toggle("trans")
})







const texts = ["Now you can earn money while travelling", "Pick up packages, deliver and earn", "Send packages faster and more affordably"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 80; // Delay between typing characters
const erasingDelay = 20; // Delay between erasing characters
const newTextDelay = 200; // Delay before starting to type the next text
// texts.style.borderColor = "red"

function typeText() {
  const text = texts[textIndex];
  const currentText = text.substring(0, charIndex);
  document.getElementById("typewriter").textContent = currentText;
  charIndex++;

  if (charIndex <= text.length) {
    setTimeout(typeText, typingDelay);
  } else {
    isDeleting = true;
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  const text = texts[textIndex];
  const currentText = text.substring(0, charIndex - 1);
  document.getElementById("typewriter").textContent = currentText;
  charIndex--;

  if (currentText === "") {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 0); // Start typing the next text immediately
  } else {
    setTimeout(eraseText, erasingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeText, newTextDelay);
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true", 
  fade: "true",
  grabCursor: "true",
  pagination: {
    dynamicBullets: true,
    el: ".swiper-pagination", 
    clickable: true
  },
  navigation: {
    nextEL: ".swiper-button-next",
    prevEL: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },

    520: {
      slidesPerView: 2
    },

    950: {
      slidesPerView: 3
    }
  }
})