// o wile irá repedir nquando a codução for verdadeira
let num = 1
let num1 = 2
let condicao = 1

// contre de fluxo no while

while (condicao < 10) {
    console.log(condicao);
    condicao++
    break
    // break serve para para a repetição assim que for feito o loop
}
console.log("fora do wile");


// controle de fluxo no for

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando o número 3");
        continue; // Pula a iteração quando i for 3
    }
    console.log("Número: " + i);
}