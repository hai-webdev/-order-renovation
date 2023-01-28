// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/guarantee";
import "../common/popup";
import "../common/footer";
import "../common/aside";

import Swiper from "swiper";
const bannerSwiper = new Swiper(".banner-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const personalitySwiper = new Swiper(".personality-swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

const galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
const galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
