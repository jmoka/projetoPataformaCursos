var nome = "joão";

function Fnome (){
    console.log("Variável Nome chamada dentro d função = " + nome)
}
Fnome();
console.log("Variavel Nome fora da função é =" + nome)
// observe que  a variavel que esta fora da função ela esta acessível mesmo sendo chamada dentro da função
console.log("===============================================================================================")
/* =============================================================================================================== */

function Fnome2 (){
    var nome2 = "pedro"
}

console.log("variavel declarada dentro da função, chamada fora da função =" + nome2)