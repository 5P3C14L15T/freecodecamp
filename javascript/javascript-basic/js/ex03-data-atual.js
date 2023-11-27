/*Escreva um programa JavaScript para obter a data atual.  
Resultado esperado :
mm-dd-aaaa, mm/dd/aaaa ou dd-mm-aaaa, dd/mm/aaaa
*/

let dataAtual = new Date();

// pegando o dia
let dd = dataAtual.getDate();


// pegando o mes
let mm = dataAtual.getMonth() + 1;

// pegando o ano
let yyyy = dataAtual.getFullYear();

if(dd < 10) {
    dd = '0' + dd;
}

if(mm < 10) {
    mm = '0' + mm;
}

let data1 = mm + '-' + dd + '-' + yyyy;
let data2 = mm + '/' + dd + '/' + yyyy;
let data3 = dd + '-' + mm + '-' + yyyy;
let data4 = dd + '/' + mm + '/' + yyyy;


let el = document.getElementById('info');
el.innerHTML = data4;