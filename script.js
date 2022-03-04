"use strict";

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navlink = document.querySelector(".nav__links");

const mobileNav = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", function() {
    hamburger.style.display = "none";
    // // close.style.opacity = 1;
    // navlink.style.visibilty = "visible";

    // close.style.display = "inline";

    // navlink.style.display = "inline";
    container.classList.add("visible");
});