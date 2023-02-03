/* *********************swiper-images*************/

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* *********************swiper-images*************/


/* *********************swiper-product*************/

 var swiper = new Swiper(".my-swiper-product", {
  breakpoints: {
    1000: {
        slidesPerView: 4,
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    484: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    280: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    100: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
},
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next-card",
     prevEl: ".swiper-button-prev-card",
   },
 });
 

 /* *********************swiper-product*************/

 /* *********************swiper-offset*************/

 var swiper = new Swiper(".my-swiper-offset", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

 /* *********************swiper-offset*************/




 
 const plus = document.querySelector('.plus'),
 minus = document.querySelector('.minus'),
 num = document.querySelector('#number');

 let a = 1;
 let zero = 0

 plus.addEventListener('click', ()=>{
  a++;
  a = (a < 10)? zero + a : a;
  num.innerText = a;
 });

 minus.addEventListener('click', ()=>{
  if(a > 1){
    a--;
    a = (a < 10) ? zero + a : a;
    num.innerText = a;
  }
})
