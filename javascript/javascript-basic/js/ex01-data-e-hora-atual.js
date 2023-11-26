// setando a data

let today = new Date();

console.log(today.getTimezoneOffset());


// pegando so dias da semamna
let dayList = ["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

// pegando o dia
let day = today.getDay();



// pegando horas, minutos e segundos
let hour, minute, seconds;
hour = today.getHours();
minute = today.getMinutes();
seconds = today.getSeconds();

console.log(hour);

// determinando o AM e o PM
let pm_am = (hour >= 12) ? "PM" : "AM";

// convertedo as horas de 24 para 12
hour = (hour >= 12) ? hour - 12: hour;

// verificando  por casos especiais de AM
if(hour === 0 && pm_am === 'AM') {
    if( minute === 0 && seconds === 0) {
        hour = 12;
        pm_am = 'Meia noite';
    } else {
        hour = 12;
        pm_am = 'AM';
    }
}
// verificando  por casos especiais de AM
if(hour === 0 && pm_am === 'PM') {
    if( minute === 0 && seconds === 0) {
        hour = 12;
        pm_am = 'Meio dia';
    } else {
        hour = 12;
        pm_am = 'PM';
    }
}








let el = document.getElementById('info');
el.innerHTML = "Hoje é: " + dayList[day] + "<br>"
+ hour + ":" + minute + ":" + seconds + "s";

console.log(hour);