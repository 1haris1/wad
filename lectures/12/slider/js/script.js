/*
var slideIndex = 1;
showDivs(slideIndex);

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var numbers = document.getElementsByClassName("slideNumber");
    if(n > x.length)
        slideIndex = 1;
    if(n < 1)
        slideIndex = x.length;
    for(i=0; i < x.length; i++){
        x[i].style.display = "none";
    }
    for (i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove("currentSlide");
    }
    /!*slideIndex++;
    if (slideIndex > x.length)
        slideIndex = 1;*!/
    x[slideIndex-1].style.display = "block";
    numbers[slideIndex-1].classList.add("currentSlide");
    //setTimeout(showDivs, 2000);
}

function plusDivs(n) {
    showDivs(slideIndex += n );
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}*/
