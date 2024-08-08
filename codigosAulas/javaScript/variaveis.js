'use strict'

// VARIÁVEIS E CONSTANTES

// VAR , LET , CONST

// CAIXA DE ARMAZENAMENTO DE VALORES PARA SEREM USADOS POSTERIORMENTE

// VARIÁVEIS GLOBAIS
// É a variável declarada dentro do scopo do sistema e poderá ser acessivel no codigo todo :

// 1) Exemplo:
console.error("=================================================="); 
console.log("(1) Exemplo: variável Global - Var");
console.error("=================================================="); 
 //console.log("Variável Global declarada é = " + nome); // a saida será "Variável declarada é = joão"


// dentro da Função é um novo Escopo, fora da função é outro 


function trocarNome (){              // devia a variável ter sido declarada como var , 
    console.log("===Inicio da função===");    // é passa a ser acessível dentro de outro scopo como a função
     // console.error("variavel global chamada dentro da função é = " + nome );  
    console.log("===Fim da função==="); 
    var novoNome = "maria"; // observe que não da erro undefined  - se usar o let dará um erro
    if(true){
        console.log("novo Nome é = " + novoNome );
        console.log("velho Nome é = " + nome );
    }
    
};
let nome = "joão" // declarada dentro do scopo do programa , desse escopo onde esta sendo digitado
trocarNome();



console.log("Tentando acessar variável Var-novoNome que esta declarada dentro da função = " );

console.log("chamando variavel no final da função variavel global = " + nome); // a saida será "Variável declarada é = joão"




// 2) Exemplo:
//Introduzido no ES6, let permite declarar variáveis com escopo de bloco, ou seja, elas só existem dentro do bloco onde foram declaradas.
console.error("=================================================="); 
console.log("(2) Exemplo: variável Global - LET");
console.error("=================================================="); 


let carro = "corsa";
function cor (){      
    let tipoCar = "clara"
    console.log("Dentro da Função Cor");
    console.log("Tentando acessar a variáveo carro é = " + carro);   
    if(true){
        let tipoCarIF = "escura"
        console.log("Variável Let-Carro dentro do IF = " + carro);
        console.log("tipoCarDentroIF = " + tipoCar);
        console.log("tipoCarIF = " + tipoCarIF);
        
    } 
    console.log("tipoCarIF = " + tipoCarIF); // não acessivel esta fora de seu escopo
    console.log("tipoCar = " + tipoCar);
    
};

cor();

// 3) Exemplo:
console.error("=================================================="); 
console.log("(3) Exemplo: Constntes");
console.error("=================================================="); 
// const também foi introduzido no ES6 e é usado para declarar constantes, ou seja, valores que não podem ser reatribuídos.

const PI = 3.14159;
const APELIDO = "Ana";

//PI = 3; // ocaziona um erra caso tente mudar o seu valor, devide ser uma constante


/*Diferenças entre var, let, e const:
var tem escopo global ou de função, enquanto let e const têm escopo de bloco. 
const não permite reatribuição do valor após a declaração, ao contrário de var e let. */


// Tipos de variáveis
/*
  Tipos Primitivos:

string: Texto, como "Olá, mundo!".
number: Números, como 42 ou 3.14.
boolean: Verdadeiro ou falso, como true ou false.
 */

let aluno = "Maria";   // string
let idade = 20;       // number
let aprovado = true;  // boolean


/*
Tipos Complexos:
object: Estruturas de dados que podem conter várias propriedades.
array: Lista ordenada de valores.
*/

let pessoa = {nome: "João", idade: 25}; // object
let numeros = [1, 2, 3, 4, 5];          // array



/*

6. Boas Práticas para Nomeação de Variáveis
Convenções de Nomenclatura:

Use camelCase para nomes de variáveis, por exemplo, minhaVariavel.
Nomes de variáveis devem ser descritivos e indicar claramente o que o valor representa.

PARA OS NOSMES DAS CONSTANTES DEVEM SER EM CAIXA ALTA OU MAIÚSCULAS

Dicas para Nomes Descritivos:
Evite usar nomes genéricos como x, y, ou data a menos que sejam realmente apropriados.
Prefira nomes mais longos e descritivos a nomes curtos e obscuros.

*/