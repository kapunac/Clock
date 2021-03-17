
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');
const number4 = document.querySelector('.number4');
const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');
const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');
const number9 = document.querySelector('.number9');
const number10 = document.querySelector('.number10');
const number11 = document.querySelector('.number11');
const number12 = document.querySelector('.number12');

const HOUR_ARROW = document.getElementById('hour_arrow');
const MINUTE_ARROW = document.getElementById('minute_arrow');
const SECOND_ARROW = document.getElementById('second_arrow');

const DIGITAL_HOURS = document.getElementById('digital_hours');
const DIGITAL_MINUTES = document.getElementById('digital_minutes');
const DIGITAL_SECONDS = document.getElementById('digital_seconds');

function clock(){
    const currentDate = new Date();
    const GET_SECONDS = currentDate.getSeconds() / 60;
    const GET_MINUTES = (GET_SECONDS + currentDate.getMinutes()) / 60;
    const GET_HOURS = (GET_MINUTES + currentDate.getHours()) / 12;

    const DIGITAL_GET_SECOND = currentDate.getSeconds();
    const DIGITAL_GET_MINUTES = currentDate.getMinutes();
    const DIGITAL_GET_HOURS = currentDate.getHours();
    DIGITAL_SECONDS.innerHTML = DIGITAL_GET_SECOND;
    DIGITAL_MINUTES.innerHTML = DIGITAL_GET_MINUTES;
    DIGITAL_HOURS.innerHTML = DIGITAL_GET_HOURS;
    
    switch(DIGITAL_GET_SECOND){
        case 0:
            number11.classList.remove("red");
            number12.classList.add("red");
            DIGITAL_SECONDS.style.color = "orange";
            break;
        case 5: 
            number12.classList.remove("red");
            number1.classList.add("red");
            DIGITAL_SECONDS.style.color = "teal";
            break;
        case 10:
            number1.classList.remove("red");
            number2.classList.add("red");
            DIGITAL_SECONDS.style.color = "blue";
            break;
        case 15:
            number2.classList.remove("red");
            number3.classList.add("red");
            DIGITAL_SECONDS.style.color = "purple";
            break;
        case 20:
            number3.classList.remove("red");
            number4.classList.add("red");
            DIGITAL_SECONDS.style.color = "yellow";
            break;
        case 25:
            number4.classList.remove("red");
            number5.classList.add("red");
            DIGITAL_SECONDS.style.color = "lightblue";
            break;
        case 30:
            number5.classList.remove("red");
            number6.classList.add("red");
            DIGITAL_SECONDS.style.color = "green";
            break;
        case 35:
            number6.classList.remove("red");
            number7.classList.add("red");
            DIGITAL_SECONDS.style.color = "burlywood";
            break;
        case 40:
            number7.classList.remove("red");
            number8.classList.add("red");
            DIGITAL_SECONDS.style.color = "aliceblue";
            break;
        case 45:
            number8.classList.remove("red");   
            number9.classList.add("red");
            DIGITAL_SECONDS.style.color = "darkcyan";
            break;
        case 50:
            number9.classList.remove("red");
            number10.classList.add("red");
            DIGITAL_SECONDS.style.color = "darkmagenta";
            break;
        case 55:
            number10.classList.remove("red");
            number11.classList.add("red");
            DIGITAL_SECONDS.style.color = "deeppink";
            break;
    }
    
    getRotation(SECOND_ARROW, GET_SECONDS);
    getRotation(MINUTE_ARROW, GET_MINUTES);
    getRotation(HOUR_ARROW, GET_HOURS);
}

function getRotation(element, rotation){
    element.style.setProperty('--arrow', rotation * 360);
}

setInterval(clock, 1000);
clock();
