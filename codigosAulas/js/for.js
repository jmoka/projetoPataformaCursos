// laço for , usado para contar ou repetir uma tarefa varias vezes

// contagem , criando uma lista de numeros de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);

}
// obs au usar o return dentro do for , ele ira parar na primeira interação
// ou seja retornatá somente o numero 1 - não coloque somente se irsso fizer sentido
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     return
// }
console.log("================================");

// Usando uma Array no For
//RETORNE OS INDECES
let list = [1, 2, 10]
for (let ii = 0; ii < list.length; ii++) { // calcula a quantidade de itens da lista e retorne os INDECES
    // vai calcular a quantidade de itens na lista
    console.log(ii);

}
console.log("================================");
//RETORNE OS TENS
for (let ia = 0; ia < list.length; ia++) {
    console.log(list[ia]);

}

console.log("================================");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando o número 3");
        continue; // Pula a iteração quando i for 3
    }
    console.log("Número: " + i);
}