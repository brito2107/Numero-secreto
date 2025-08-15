alert ("Boas vindas");
let nome = prompt ("Digite seu nome");{
    alert ("Seja bem vindo" + " " + nome);
}
let idade = 25;
let numerodevendas = 50;
let saldodisponivel = 1000;
let diadasemana = prompt ("que dia da semana é hoje?");
if (diadasemana == "sabado") {
    alert ("Bom final de semana" + " " + nome);
    }
    else if ( diadasemana == "domingo"){
    alert ("Bom final de semana" + " " + nome);
    }
else {
    alert ("Boa semana" + " " + nome);
}
numero = prompt ("Digite um número negativo ou positivo");
if (numero > 0) {
    alert ("O Numero " + numero + " é positivo"); }
        else (
            alert (" o número " + numero + " é negativo")
        )
        if (numero >100) {
            alert ("Parabéns, você venceu!")
        }
        else (
            alert ("Tente novamente, você perdeu!")
        )
alert(`Seu saldo é de R$${saldodisponivel}.`);
