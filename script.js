const swiper = new Swiper('.swiper', {
    // オプションの設定
　　loop: true, //最後までスライドしたら最初の画像に戻る

    //ページネーションを設定
    pagination: {
      el: '.swiper-pagination',
    },

    //ナビゲーションボタン(矢印)表示の設定
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
});