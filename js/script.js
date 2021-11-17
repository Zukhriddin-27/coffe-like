"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('#menu-btn'),
        navbar = document.querySelector('.navbar'),
        cartItem = document.querySelector('.cart-items-container'),
        cartBtn = document.querySelector('#cart-btn'),
        searchBtn = document.querySelector('#search-btn'),
        searchForm = document.querySelector('.search-form')

    function active() {
        navbar.classList.toggle('active-navbar');
        searchForm.classList.remove('active-search');
        cartItem.classList.remove('active-cart');
        console.log(11)
    }

    function cartactive() {
        cartItem.classList.toggle('active-cart');
        searchForm.classList.remove('active-search');
        navbar.classList.remove('active-navbar');

    }

    function searchActive() {
        searchForm.classList.toggle('active-search');
        cartItem.classList.remove('active-cart');
        navbar.classList.remove('active-navbar');
    }
    menuBtn.addEventListener("click", active);
    cartBtn.addEventListener("click", cartactive);
    searchBtn.addEventListener("click", searchActive);

    window.onscroll = () => {
        searchForm.classList.remove('active-search');
        navbar.classList.remove('active-navbar');
        cartItem.classList.remove('active-cart');
    }


});

// let navbar = document.querySelector(".navbar");
// document.querySelector("#menu-btn").onclick = () => {
//     navbar.classList.toggle('.active');
//     console.log(111)
// }