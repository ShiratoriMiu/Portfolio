let slideIndex = 0;
let slideTimer = null;

function showSlide(index) {
  const slides = document.getElementsByClassName("slides");

  // インデックス範囲を調整
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  // 全スライドを非表示にして、1つだけ表示
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  // 自動切り替えをセット（毎回リセット）
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => showSlide(slideIndex + 1), 10000);
}

// 手動で切り替えるとき（左右ボタン）
function plusSlides(n) {
  showSlide(slideIndex + n);
}

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});
