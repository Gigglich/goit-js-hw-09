const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let idInt = null;
console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);


function onStart() {
    startBtn.disabled = true;
    idInt = setInterval (() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
}

function onStop() {
    clearInterval(idInt);
    startBtn.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
 