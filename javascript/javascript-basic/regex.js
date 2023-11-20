/*
1º Passo criação da expressão regular
Notação Literal
var regex = /pattern/;

Construtor RegExp
var regex = new RegExp('pattern');

2º Passo definição do padrão pattern
caractere simples
var regex = /a/;

conjunto de caractere
var regex = /[abc]/;

Símbolos Básicos:
/ - Delimitadores:

Usado para envolver a expressão regular.
Caracteres Literais:

Qualquer caractere que não seja um metacaractere possui correspondência consigo mesmo na string.
Metacaracteres:
. - Ponto:

Corresponde a qualquer caractere, exceto quebras de linha.
^ - Âncora de início de linha:

Indica o início de uma linha.
$ - Âncora de final de linha:

Indica o final de uma linha.
Classes de Caracteres:
[] - Classes de caracteres:

Define um conjunto de caracteres para procurar.
Exemplo: [abc] corresponde a 'a', 'b' ou 'c'.
[^] - Classe de caracteres negada:

Corresponde a qualquer caractere que não esteja na lista.
Exemplo: [^0-9] corresponde a qualquer caractere que não seja um dígito.
Quantificadores:
* - Zero ou mais vezes:

Corresponde ao elemento anterior zero ou mais vezes.
+ - Uma ou mais vezes:

Corresponde ao elemento anterior uma ou mais vezes.
? - Zero ou uma vez:

Corresponde ao elemento anterior zero ou uma vez.
{} - Quantificador específico:

{n} - Exatamente n vezes.
{n,} - Pelo menos n vezes.
{n,m} - Pelo menos n vezes, mas não mais que m vezes.
Outros Metacaracteres:
\ - Escape:

Usado para escapar de um metacaractere e tratá-lo literalmente.
Exemplo: \., \^, \$ são usados para corresponder explicitamente a '.', '^' e '$', respectivamente.
| - Alternância:

Funciona como um operador lógico "OU".
Exemplo: cat|dog corresponde a "cat" ou "dog".
Agrupamento e Referência:
() - Grupo de Captura:

Agrupa uma expressão e captura o valor correspondente.
\n - Referência de Grupo:

Usa a correspondência de um grupo capturado anteriormente.

Metacaracteres para classes de caracteres:
\d - Dígito:

Corresponde a qualquer caractere numérico. Equivalente a [0-9].
\D - Não dígito:

Corresponde a qualquer caractere que não seja um dígito. Equivalente a [^0-9].
\s - Espaço em branco:

Corresponde a qualquer caractere de espaço em branco, como espaços, tabulações, quebras de linha, etc.
\S - Não espaço em branco:

Corresponde a qualquer caractere que não seja um espaço em branco.
\w - Caractere alfanumérico:

Corresponde a qualquer caractere alfanumérico (letras, dígitos e sublinhados). Equivalente a [a-zA-Z0-9_].
\W - Não caractere alfanumérico:

Corresponde a qualquer caractere que não seja alfanumérico.
Quantificadores:
* - Zero ou mais vezes:

Corresponde ao elemento anterior zero ou mais vezes.
+ - Uma ou mais vezes:

Corresponde ao elemento anterior uma ou mais vezes.
? - Zero ou uma vez:

Corresponde ao elemento anterior zero ou uma vez.
{} - Quantificador específico:

{n} - Exatamente n vezes.
{n,} - Pelo menos n vezes.
{n,m} - Pelo menos n vezes, mas não mais que m vezes.
Âncoras:
^ - Âncora de início de linha:

Indica o início de uma linha.
$ - Âncora de final de linha:

Indica o final de uma linha.
Outros metacaracteres:
. - Ponto:

Corresponde a qualquer caractere, exceto quebras de linha.
| - Alternância:

Funciona como um operador lógico "OU".
() - Grupo de Captura:

Agrupa uma expressão e captura o valor correspondente.
\ - Escape:

Usado para escapar de um metacaractere e tratá-lo literalmente.


*/

let reg = "João Victor Vieira";
let exp = /[a-z]/gi;

let result = exp.test(reg);

console.log(result);

var texto = "Esta é uma string de exemplo.";
var regex = /exemplo/;

var resultado = regex.test(texto);
console.log(resultado); // Saída: true

var texto = "A praia é bonita, mas a água está fria.";
var regex = /a/gi;

var correspondencias = texto.match(regex);
console.log(correspondencias); // Saída: ['A', 'a', 'a', 'a']


var texto = "Aqui tem ovelhas e gatos.";
var regex = /ovelhas|gatos/g;

var novoTexto = texto.replace(regex, 'animais');
console.log(novoTexto); // Saída: "Aqui tem animais e animais."


let email = "joaovictorviira@outlook.com.br";
let regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let valido = regex1.test(email);

console.log(valido);
