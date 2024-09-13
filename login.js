let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click",generateColor());

function generateColor(){
    let red = Math.ceil(Math.random*255);
    let green = Math.ceil(Math.random*255);
    let blue = Math.ceil(Math.random*255);

    return color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}