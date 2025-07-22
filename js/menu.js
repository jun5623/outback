var swiper = new Swiper(".mySwiper2", {
  grabCursor: true,
  effect: "creative",
  loop:true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});