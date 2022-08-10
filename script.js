const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slade-icon");

slider.oninput = () => {
    let value = slider.value;
    thumb.style.left = value + "%";
    bar.style.width = value + "%";

    if(value < 20){
        slideIcon.style.marginTop = "0px";
    }
    if(value >= 20){
        slideIcon.style.marginTop = "-250px";
    }
    if(value >= 40){
        slideIcon.style.marginTop = "-500px";
    }
    if(value >= 60){
        slideIcon.style.marginTop = "-750px";
    }
    if(value >= 80){
        slideIcon.style.marginTop = "-1000px";
    }
}