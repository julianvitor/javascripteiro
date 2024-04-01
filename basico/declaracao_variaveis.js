// isso é um comentario de linha unica

/* isso é um comentario em 
multiplas linhas */

//variaveis em linha unica
var a = 1, b = 2, c = 3; //var. não permite redeclaração em um escopo

let x = 1, y = 2, z = 3; //let. permite redeclaração dentro de blocos

const PI = 3.14, nome = "julian"; // const. sem reatribuição , escopo de bloco

//variaveis em multiplas linhas
var a2 = 1;
var b2 = 2;
var c3 = 3;

//desempacotar em javascript
let numeros = [1,2,3];
let x2;
let y2;
let z2;
[x2,y2,z2] = numeros

console.log(x2, y2, z2);

//variavel global dentro de função "sem let e var"
function myfunc(){
    global = "global"
}

myfunc();
console.log(global);

/* Não é possivel remover uma variavel,
mas é possivel atribuir valores vazios 
usando null ou undefined */
