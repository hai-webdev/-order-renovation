// import Swiper from "swiper";
$("section.offer-container .close").on("click", function () {
  offerPopupHide();
});
$("section.offer-container .mask").on("click", function () {
  offerPopupHide();
});
$(".offer-popup-show").on("click", function () {
  offerPopupShow();
});
function offerPopupShow() {
  $("section.offer-container ").fadeIn();
}
function offerPopupHide() {
  $("section.offer-container ").fadeOut();
}

// $(".swiper-popup-show").on("click", function(){
//     // var index = $(this).index();
//     popupSwiperShow()
// })

// var popupSwiper = null;

// function popupSwiperShow(num) {
//   $("section.rotation-img-container").fadeIn();
//   popupSwiper = new Swiper(".popup-swiper", {
//     // initialSlide: num,
//     navigation:{
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });
// }
// function popupSwiperHide(){
//     popupSwiper = null;
//     $("section.rotation-img-container").fadeOut();
// }
// $("section.rotation-img-container .close").on("click", () => {
//     popupSwiperHide();
// })
// $("section.rotation-img-container .mask").on("click", () => {
//     popupSwiperHide();
// })