"use strict";

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Setting up slides. extra slides on the right
slides.forEach(
  (el, ind) =>
    (el.style.transform = `translateX(${100 * (currentSlide - ind)}%)`)
);
