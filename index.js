/*Projeto 01 – Projeto Detetive

Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são:
1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora perto da vítima?
4. Devia para a vítima?
5. Já trabalhou com a vítima?

O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada
como Suspeita, entre 3 e 4 como Cúmplice e 5 como Assassino. Caso
contrário, ele será classificado como Inocente.
*/

console.log('PROJETO DETETIVE\n')
console.log('Digite S(Sim) ou N(Não) para as perguntas abaixo:\n');

let resposta1 = prompt('1. Telefonou para a vítima ?');
let resposta2 = prompt('2. Esteve no local do crime ?');
let resposta3 = prompt('3. Mora perto da vítima ?');
let resposta4 = prompt('4. Devia para a vítima ?');
let resposta5 = prompt('5. Já trabalhou com a vítima ?');


let respostas = 0;

// Acumulando as respostas
if (resposta1 == 'S' || resposta1 == 's'){
  respostas++;
}
if (resposta2 == 'S' || resposta2 == 's'){
  respostas++;
}
if (resposta3 == 'S' || resposta3 == 's'){
  respostas++;
}
if (resposta4 == 'S' || resposta4 == 's'){
  respostas++;
}
if (resposta5 == 'S' || resposta5 == 's'){
  respostas++;
}

console.log(`Resposta ==> ${respostas}`);

// Verificando a classificação sobre a participação no crime
if (respostas <=1) {
  console.log('\nClassificação ==> INOCENTE');
}
else if (respostas == 2){
  console.log('\nClassificação ==> SUSPEITA');
}
else if (respostas >= 3 && respostas <=4) {
  console.log('\nClassificação ==> CÚMPLICE');
} 
else if (respostas == 5){
  console.log('\nClassificação ==> ASSASSINO');
}
