"use strict"
// O método Object.freeze() é uma função nativa do JavaScript que permite congelar um objeto.

//Para congelar um objeto, você usa o método Object.freeze() e passa o objeto que deseja congelar como argumento. Veja o exemplo a seguir:

// Convertendo Number em String
console.log("=================================================="); 
console.error("Criação do Objeto e Mudança Normal");
console.log("=================================================="); 
var pessoa = { nome: "João" }; // Criação de um Objeto
console.log("nome ara " + pessoa.nome);
pessoa.nome = "maria";  // Mudança 
console.log('e agora é ' + pessoa.nome); // alteração permitida
console.log("alteração permitida");


console.log("=================================================="); 
console.error("Congelando o Objeto");
console.log("=================================================="); 
var carro = Object.freeze({ nome: "hb20" });
console.log("Nome carro Congelado é " + carro.nome);
carro.nome = "corsa"; // não vai acontecer nada pois está congelado , porém se usar o mode strict dará um erro nessa linha pois nãopode realizar mudanças
console.log("agora passou a ser " + carro.nome); // observe que não mudou devido esta congelado
console.log("observe que não mudou devido esta congelado");







