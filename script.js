let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 5000); // 5秒ごとに切り替え
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}
