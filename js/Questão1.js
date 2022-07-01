var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando listar recurso da pasta no git?");
    if ((nome = "ls" )) {
        alert("O " + nome + ", serve para listar recursos da pasta no git. Parabéns você acertou!");
        window.location="Questão2.html";
    }
}
