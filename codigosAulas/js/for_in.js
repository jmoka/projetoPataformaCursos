let lista = ["jão", "patricia", "jose"]
for (let list in lista) {
    console.log(list); // os indeces
    console.log(lista[list]); // retorna os itens

}

let objLista = { nome: "joao", idade: 12, endereco: "rua paraiso" }

for (obj in objLista) {
    // console.log(obj); // retorna os indices ou seja , nome, idade, endereço
    console.log(obj + "=" + objLista[obj]); // retorne o nome


}