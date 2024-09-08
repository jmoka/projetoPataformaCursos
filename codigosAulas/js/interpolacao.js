const nome = "joão";
const idade = 25
const peso = 80


//expressões JavaScript dentro das crases
console.log(`${nome} sua idade é ${idade}`);
console.log(`${idade - peso} ou posso também fazer( ${idade}+${peso} )`);
// ${idade - peso} - realiza o calculo
//  ${idade}+${peso}  - concatena


//==============================================================

//Funções podem ser chamadas diretamente dentro de Template Literais para gerar strings dinâmicas:

function Nome() {
    return "ojse";
};

console.log(Nome());
