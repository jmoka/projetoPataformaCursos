const num1 = 1;
const num2 = 2;
const num3 = 3;

//===================
// Somente o if
//===================
if (num1 < num3) { // condição verdadeira
    console.log("Condição Verdadeira");
    // return console.log("Parou no retorno do IF"); // descomente e comente oconsole.log abaixo
    console.log("Sem Return o Programa Segue"); // comente e descomente o return
}; // após a verificação o programa segue ate que ele enconte um return e pare
console.log("Seguiu !!");


//===================
// if e else
//===================

if (num2 < num1) { // condição falsa


} else { // se o if for false vem para o else
    console.log("Condição falsa , veio para o else");

}

// if , else-if e else

if (num3 < num1) {  //dondição falsa
    //pula
} else if (num1 > num2) {     //dondição falsa
    //pula
} else if (num3 > num2) { // condição verdadeira
    return console.log("Condição verdadeira do segundo alse if"); // encontra e para devido o return

} else {
    // não prossegue
}