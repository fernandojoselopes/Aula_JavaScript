
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
   // console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}
 function redirecionar(){
    // window.open("https://globallab.org/en/");
     window.location.href = "https://globallab.org/en//";
 }
/*
 function trocar(){
     document.getElementById("mouseove").innerHTML="Obrogado por passar o mouse aqui"
    // alert("trocar texto");
 }
 /*
/*
 function voltar(){
    document.getElementById("mouseove").innerHTML="passar o mouse aqui";
   // alert("trocar texto");
}
*/

function trocar(elemento){
    //document.getElementById("mouseove").innerHTML="Obrogado por passar o mouse aqui"
    elemento.innerHTML = "obrigado por passar o mouse aqui.";
}
function voltar(elemento){
   // document.getElementById("mouseove").innerHTML="passar o mouse aqui";
   elemento.innerHTML = "passe o mouse aqui.";
}


function loads(){
    alert("página carregada");
}
function functionChange(elemento){
    console.log(elemento.value);

}



/*
var validar;
function validaIdade(idade){
    
    if (idade >=18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/



/*
function soma(n1, n2){
    return n1+n2;
}

alert(soma(5, 10));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}


alert(setReplace("vai Japão", "Japão", "Brasil"));
*/

//var d = new Date();
//console.log("Hoje é " +d.getDate()+"/"+(d.getMonth()+1)); //data
//alert(d.getHours()); //horas
//alert(d.getMonth()+1); //mostra o mês
//alert(d.getDate());//mostra o dia numergeico natual

/*
var contar;
for (contar = 0; contar <=5; contar++) {
    console.log(contar);
    alert(contar);
};
*/


/*
var contar = 0;
while (contar <= 5){
    console.log(contar);
    alert(contar);
    //contar = contar + 1;
    contar++;
}
*/

/*
var idade = prompt("Qual sua idade")
if (idade >=18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maçã" , cor:"vermelha"}, {nome:"uva" , cor:"roxa"}] 
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã" , cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva","manga"); //inclui mais intens
lista.pop()//remove o ultimo elemento da lista*/
//console.log(lista);
//console.log(lista.length);//ver aquantidades de intens da lista
//console.log(lista.reverse()); //inprime a quantidade e os intens
//console.log(lista.toString());//torna os elemento do arry em string
//console.log(lista.join(" / "));//troca a virguls por outro caracter como separador
//console.log(lista[0]);//imprime só maçã
//alert(lista[0]);//imprime só maçã
//console.log(lista[1]);//imprime só pera
//alert(lista[1]);//imprime só pera
//console.log(lista[2]);//imprime só laranja
//alert(lista[2]);//imprime só laranja


/*var nome = "josé Fernando Lopes";
var idade = 48;
var idade2 = 10;
var frase ="Japão é o melhor time do mundo!"
//alert(nome + " tem " + idade + " anos ");
//duas barras comentario uma lina
/* barra asterisco 
esterisco barra comenta mais de uma linha*/ 
//alert(idade + idade2);
/*console.log(nome);
console.log(idade + idade2);*/
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));
/*console.log(frase.toLocaleUpperCase());//todas as letras MAIUSCULAS
console.log(frase.toLocaleLowerCase());//todas as letras menusculas*/
