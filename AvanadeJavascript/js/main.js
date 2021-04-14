alert("Conceito básicos de Js")

var nome="Paula"
var anos="26"
// console.log("sou "+ nome + " tenho " + idade + " anos")

var frase = "Japão é o melhor time do mundo"
// console.log(frase.replace("Japão", "Brasil"))
// console.log(frase.toUpperCase("Japão", "Brasil"))

var n1 = 5
var n2 = 17
// console.log((n1*n2)+ n1)

var listaFruta = ["morango", "uva", "goiaba"]
// console.log(listaFruta)
// console.log(listaFruta[1])

// Adicionar algo à lista
// listaFruta.push("melao")
// console.log(listaFruta)

//Tirar o último elemento da lista
// listaFruta.pop()
// console.log(listaFruta)

// Quantidade de elementos na lista
// console.log(listaFruta.length)

//Reverse trás os elementos de trás pra frente
listaFruta.push("abacaxi")
// console.log(listaFruta.reverse())

// Trás como string, e a posicao é a letra
// console.log(listaFruta.toString()[0])
// console.log(listaFruta.join("-"))

var dicionarioFruta = {nome:"morango", cor:"vermelho"}
// console.log(dicionarioFruta)
// console.log(dicionarioFruta.cor)

var dicioListaFruta = [{nome:"morango", cor:"vermelho"}, {nome:"abacaxi", cor:"amarelo"}]
// console.log(dicioListaFruta)
// console.log(dicioListaFruta[1].nome)

var idade = prompt("Qual a sua idade?")
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}

var count = 0
while (count <=5) {
    console.log(count)
    count = count + 1  
}

var contador;
for(contador=0; contador<5; contador++){
    alert(contador)
}

var d = new Date()
alert(d)
alert(d.getMonth()+1)
alert(d.getMinutes())

function soma(num1, num2){
    return num1+num2
}
alert(soma(10,25))

function clicarBotao(){
    alert("obrigado por clicar")
}

//opcao1
function trocarmsg(){
    document.getElementById("mousemove").innerHTML = "Obrigado"
    // alert("Muito bem! A mensagem apareceu!")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

//opcao2
function trocarmsg2(element){
    element.innerHTML = "Obrigado"
    // alert("Muito bem! A mensagem apareceu!")
}

function voltar2(element){
    element.innerHTML = "Passe o mouse aqui"
}

function funcaoChange(element){
    console.log(element.value)
}