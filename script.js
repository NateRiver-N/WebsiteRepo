
// script.js - small UI interactions
// document.addEventListener('DOMContentLoaded', function(){
//   var btn = document.querySelector('.menu-toggle');
//   var nav = document.querySelector('.nav');
//   if(btn){
//     btn.addEventListener('click', function(){
//       var expanded = this.getAttribute('aria-expanded') === 'true';
//       this.setAttribute('aria-expanded', !expanded);
//       if(nav.style.display === 'flex') nav.style.display = '';
//       else nav.style.display = 'flex';
//     });
//   }
// });

// --- Gallery Filter System ---
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".filter-btn");
//   const items = document.querySelectorAll(".masonry-item");

//   buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
      // Remove existing active class
//       buttons.forEach(b => b.classList.remove("active"));
//       btn.classList.add("active");

//       const filter = btn.getAttribute("data-filter");

//       items.forEach(item => {
//         if (filter === "all") {
//           item.style.display = "block";
//         } else {
//           item.style.display = item.classList.contains(filter) ? "block" : "none";
//         }
//       });
//     });
//   });
// });



// --- Mobile Navigation Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
});

// --- Smooth Scroll for Navbar Links ---
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// --- Image Modal Viewer ---

const lightbox = document.getElementById("imgLightbox");
const lightboxImg = document.getElementById("imgLightboxContent");
const closeBtn = document.querySelector(".img-close");

document.querySelectorAll(".product img, .pop img,img.open").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});






