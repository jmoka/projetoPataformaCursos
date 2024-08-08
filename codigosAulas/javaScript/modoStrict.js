"use strict"

var nome = "joão"

console.log("nome");

// Exemplo 1: Evitando variáveis globais não intencionais

function teste() {
    msg = "Olá, mundo!"; // Erro: Variável não declarada
}
teste();


//Exemplo 2: Erro ao usar uma palavra reservada

var implements = 10; // Erro: "implements" é uma palavra reservada

// Exemplo 3: Tratando com mais rigor a definição de propriedades

var pessoa = Object.freeze({ nome: "João" });
pessoa.nome = "Maria"; // Erro: Não pode modificar um objeto congelado