document.addEventListener("DOMContentLoaded", function() {
    let showButton = document.getElementById("showButton");
    let logoButtons = document.querySelectorAll(".logo__button-container");
    let showButtonImg = document.querySelector(".show__button-img");

    let isHidden = true;

    function toggleLogoVisibility() {
        
        logoButtons.forEach(function(logoButton) {
            if (window.innerWidth >= 1120) {
                if (logoButton.classList.contains("logo-9") ||
                    logoButton.classList.contains("logo-10") || 
                    logoButton.classList.contains("logo-11")
                ){
                    logoButton.style.display = isHidden ? "none" : "block"; 
                }
            } else  {
                if (logoButton.classList.contains("logo-7") ||
                    logoButton.classList.contains("logo-8") || 
                    logoButton.classList.contains("logo-9") ||
                    logoButton.classList.contains("logo-10") || 
                    logoButton.classList.contains("logo-11")
                ){
                    logoButton.style.display = isHidden ? "none" : "block";
                }
            }
        });
    }

    toggleLogoVisibility();
		
    showButton.addEventListener("click", function() {
        isHidden = !isHidden;
        toggleLogoVisibility();

        showButtonImg.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";

        let buttonText = showButton.querySelector(".show__button-text");
        buttonText.textContent = isHidden ? "Показать все" : "Скрыть";
    });

    window.addEventListener("resize", function() {
        toggleLogoVisibility();
    });
});

