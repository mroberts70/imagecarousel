let intIndex = 0;

function showImage(i) {
    intIndex += i;

    var images = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    for(n = 0; n < images.length; n++) {
        images[n].style.display = "none";
    }

    for(n = 0; n < dots.length; n++) {
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if(intIndex > images.length - 1) {
        intIndex = 0;
    }
    if(intIndex < 0) {
        intIndex = images.length - 1;
    }
        
        
    // images[intIndex].setAttribute("style", "display: block;");
    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";

    
}

showImage(intIndex);