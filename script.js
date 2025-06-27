let slideIndex = 0;
let slideTimer; // タイマーIDを保存する変数

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  // すべて非表示に
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 次のスライドへ
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  // 次の自動切り替えタイマーをセット（10秒）
  slideTimer = setTimeout(showSlides, 10000);
}

// 手動で前後にスライドするとき
function plusSlides(n) {
  // 現在のタイマーをキャンセル
  clearTimeout(slideTimer);

  // インデックスを更新して再表示
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;

  showSlides(); // 再スタート
}

// ページ読み込み時にスライドショー開始
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});
