//footer popup img change

let popupSlideIndex = 0;
popUpShowpopUpSlides();

function popUpShowpopUpSlides() {
    let i;
    let popUpSlides = document.getElementsByClassName("popupImgChange");
    let popUpDots = document.getElementsByClassName("popUpDot");
    for (i = 0; i < popUpSlides.length; i++) {
        popUpSlides[i].style.display = "none";
    }
    popupSlideIndex++;
    if (popupSlideIndex > popUpSlides.length) {
        popupSlideIndex = 1
    }
    for (i = 0; i < popUpDots.length; i++) {
        popUpDots[i].className = popUpDots[i].className.replace(" active", "");
    }
    popUpSlides[popupSlideIndex - 1].style.display = "block";
    popUpDots[popupSlideIndex - 1].className += " active";
    setTimeout(popUpShowpopUpSlides, 500); // Change image every 2 seconds
};

$(".bithu-footer-popup-close-btn").click(function () {
    $(".bithu-footer-popup").fadeOut("active");
});