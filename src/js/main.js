const defaultOptions = {
  // ドットインジケーターの表示
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後スライドボタンを表示
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // ループの有効化
}

// デフォルトの表示
const swiper = new Swiper(".sample-swiper .swiper-container", {
  ...defaultOptions,
});

// フェードエフェクト
const swiperFade = new Swiper(".sample-swiper-fade .swiper-container", {
  ...defaultOptions,

  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});

// カバーフローエフェクト
const swiperCoverflow = new Swiper(".sample-swiper-coverflow .swiper-container", {
  ...defaultOptions,

  loop: true, // ループの有効化
  slidesPerView: 1.6, // 表示するスライドの枚数
  centeredSlides : true, // スライドを中央揃えを有効化
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0, // スライドの回転角度
    stretch: 50, // スライドの間隔（px単位）
    depth: 200, // 奥行きの設定（translateをZ方向にpx単位で移動）
    slideShadows : true, // 先頭スライドの影を有効化
  },
});

// カードエフェクト
const swiperCards = new Swiper(".sample-swiper-cards .swiper-container", {
  ...defaultOptions,

  grabCursor: true,
  effect: "cards",
});

// クリエイティブエフェクト
const swiperCreative = new Swiper(".sample-swiper-creative .swiper-container", {
  ...defaultOptions,

  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: { // 表示しているスライドの移動先
      shadow: true, // 影の有効化
      translate: [0, 0, -400], // translateをX,Y,Zで指定
    },
    next: { // 次に表示されるスライドの設定
      translate: ["100%", 0, 0], // translateをX,Y,Zで指定
    },
  },
});