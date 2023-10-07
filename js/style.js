let images;
let currentIndex = 0;

function updateImages() {
  const width = window.innerWidth;

  if (width <= 960) {
    images = document.querySelectorAll('.header__main-visual-image--mobile');
  } else {
    images = document.querySelectorAll('.header__main-visual-image--desktop');
  }
}

function showNextImage() {
  updateImages();

  images[currentIndex].style.opacity = '0';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1';
}


window.onload = function() {
  updateImages();

  setInterval(showNextImage, 3000);
}

window.addEventListener('resize', updateImages);


// 切り替え
window.addEventListener("resize", switchText);

function switchText() {
    const width = window.innerWidth;
    const pcContent = document.getElementById("pc-content");
    const mobileContent = document.getElementById("mobile-content");

    if (width <= 960) {
        pcContent.style.display = "none";
        mobileContent.style.display = "block";
    } else {
        pcContent.style.display = "block";
        mobileContent.style.display = "none";
    }
}

switchText();
