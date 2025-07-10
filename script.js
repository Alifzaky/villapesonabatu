const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// close menu when close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// inisialisasi swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.getElementById("sheet-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwzwXUYZ4B3Ww4Ba8q3yH6hX_qn7CAVuaG6x2ssen4WTbbUWq3QyhvIlvHyLKe98FfI/exec"; // GANTI DENGAN LINK WEB APP KAMU

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      nama: nama,
      email: email,
      pesan: pesan,
    }),
  })
    .then((response) => response.text())
    .then((result) => {
      alert("✅ Pesan berhasil dikirim!");
      document.getElementById("sheet-form").reset();
    })
    .catch((error) => {
      alert("❌ Gagal mengirim pesan!");
      console.error("Error!", error.message);
    });
});
