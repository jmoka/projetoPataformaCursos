// COERCÃO 
// Conversão Automática de tipos

// Exemplo:

let idade = 15;  // Number
let altura = "2" // string
let doador = false // Boolean
let vazia ="" //string vazia

// Coerção -  Conversão Automatica
console.log( idade - altura); // resultado : 13

// Casting - Conversão Manual
// Number()
// String()
// Boolean()

// Convertendo Number em String
console.log("=================================================="); 
console.error("Converter de Number Para String");
console.log("=================================================="); 
console.log("Tipo da variavel = "+typeof(idade));
let numberConvertido = String(idade) 
console.log("stringConvertida  = "+numberConvertido);
console.log("Tipo da variavel Convertida  = "+typeof(numberConvertido));

 // Converter de String Para Número
console.log("=================================================="); 
console.error("Converter de String Para Número");
console.log("=================================================="); 
console.log("Tipo da variavel = "+typeof(altura));
let stringConvertida = Number(altura) 
console.log("stringConvertida  = "+stringConvertida);
console.log("Tipo da variavel Convertida  = " +typeof(stringConvertida));


// Convertendo para Boolen
// Para conversão em boolean o entendimento é o seguinte:
// string vazia = False
// string não fazia é True
console.log("=================================================="); 
console.error("Converter para Boolen");
console.log("=================================================="); 
let booleanCovertido = Boolean(vazia)
console.log("booleanCovertido - vazio  = " + booleanCovertido);
vazia = "joão" // atibuindo valor na variável
booleanCovertido = Boolean(vazia)
console.log("booleanCovertido - não vazio  = " + booleanCovertido);



