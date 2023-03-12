/*Stopwatch*/

const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function(){
    if(running === true){
        return
    }
    running = true
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    },1000)
}

stopButton.onclick = function(){
    clearInterval(timer)
    running = false
}

resetButton.onclick = function(){
    seconds = 0
    minutes = 0
    clearInterval(timer)
    running = false
    secondsTimer.innerText = seconds
    minutesTimer.innerText = minutes
}



/*slider*/

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

let data = {
    "text": "Anime Girl",
    "img": "img/yes.webp",
}

const text = document.getElementById("js--text");
text.innerText = data.text;

const img = document.getElementById("js--img");
img.setAttribute('src',data.img); 


