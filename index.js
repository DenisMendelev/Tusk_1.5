document.addEventListener("DOMContentLoaded", function () {
  let showButton = document.getElementById("showButton");
  let brandsButtons = document.querySelectorAll(".brands-list__item");
  let showButtonImg = document.querySelector(".show__button-img");

  let isHidden = true;

  function toggleBrandsVisibility() {
    brandsButtons.forEach(function (brandsButton) {
      if (window.innerWidth >= 1120) {
        if (brandsButton.classList.contains("brands-9") || 
            brandsButton.classList.contains("brands-10") ||
            brandsButton.classList.contains("brands-11") 
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      } else {
        if (brandsButton.classList.contains("brands-7") ||
            brandsButton.classList.contains("brands-8") ||
            brandsButton.classList.contains("brands-9") ||
            brandsButton.classList.contains("brands-10") ||
            brandsButton.classList.contains("brands-11")
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      }
    });
  }

  toggleBrandsVisibility();
  window.addEventListener('resize', toggleBrandsVisibility);

  showButton.addEventListener("click", function () {
    isHidden = !isHidden;
    toggleBrandsVisibility();

    showButtonImg.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";

    let buttonText = showButton.querySelector(".show__button-text");
    buttonText.textContent = isHidden ? "Показать все" : "Скрыть";
  });
});

