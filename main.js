// main.js

// Toggle menu mobile
const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
  })

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
  })
}

// Cấu hình dùng lại cho ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

// ABOUT
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption)
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
})
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
})

// SERVICE
ScrollReveal().reveal(".service__container .section__header", scrollRevealOption)
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
})
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
})

// Swiper testimonials
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
})

// BLOG
ScrollReveal().reveal(".blog__content .section__header", scrollRevealOption)
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
})
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
})
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
})

// Instagram auto-scroll nhân đôi ảnh để chạy vô hạn
const instagram = document.querySelector(".instagram__flex")
if (instagram) {
  Array.from(instagram.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true)
    instagram.appendChild(duplicateNode)
  })
}
