"use strict";

const slides = document.querySelectorAll(".slide");
const rightSlider = document.querySelector("#right-slider-btn");
const leftSlider = document.querySelector("#left-slider-btn");
let currentSlide = 0;
const sliderCaption = document.querySelector("#slider-caption");
const nav = document.querySelector(".header");
const navItems = document.querySelectorAll(".nav-item");

// Setting up slides. extra slides on the right
slides.forEach((el, ind) => {
  el.style.transform = `translateX(${100 * (ind - currentSlide)}%)`;
});

const showSlide = function (currentSlide) {
  slides.forEach(
    (el, ind) =>
      (el.style.transform = `translateX(${100 * (ind - currentSlide)}%)`)
  );
  //adds fade in letters over slider
  currentSlide === 0
    ? (sliderCaption.style.opacity = "1")
    : (sliderCaption.style.opacity = "0");
};

const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
};

const navFunc = function (e) {
  if (e.target.classList.contains("nav-item")) {
    const target = e.target;
    navItems.forEach((el) => (el.style.opacity = this));
    target.style.opacity = "1";
  }
};

//left and right slider functions
rightSlider.addEventListener("click", nextSlide);
leftSlider.addEventListener("click", previousSlide);

nav.addEventListener("mouseover", navFunc.bind("0.5"));
nav.addEventListener("mouseout", navFunc.bind("1"));
