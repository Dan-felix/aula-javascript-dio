/*
var nome = ("Daniel Felix");
alert("Bem vindo " + nome); */

/*
var n1 = prompt('Digite um número');
n1 = parseInt(n1);

var n2 = prompt('Digite outro número');
n2 = parseInt(n2);

function soma(n1, n2){
    return n1 + n2;
}

alert(soma(n1,n2)); */

/*
function bclick() {
    alert('Obrigado por clicar');
} */

function bclick() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; /*insere html diretamente na página usando a função - manipulação do DOM */
}

function redirectb() {
    window.open("https://www.nintendo.com/pt_BR/"); /* abre em outra janela */
}   /* ou window.location.href = ""https://www.nintendo.com/pt_BR/"" - abre na mesma janela */

function trocar(elemento) { /*  Ao inserir 'elemento' dentro da função, em conjunto com 'This' no corpo do elemento no html, esta função só funcionará para este elemento */
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    /* Também pode ser feito desta forma, após usar ELEMENTO na função: elemento.innerHTML = "Obrigado por passar o mouse"; */
} /* função para evento de passar o cursor do mouse em cima de um objeto na página / 
        usando, neste caso, innerHTML para inserir um texto diretamente pelo DOM */

function voltar (elemento) {
    /* document.getElementById("mousemove").innerHTML = "Passe o mouse denovo"; */
    elemento.innerHTML = "Passe o mouse de novo";
} /* chamando esta função dentro de um elemento html, na página, é possível que outra mensagem seja inserida caso o mouse saia de cima do elemento */   

function load() {
    alert("Esta é uma página teste"); /* Carrega algo quando a página for acessada */
}

function funcaoChange(elemento) {
    alert(elemento.value);
}