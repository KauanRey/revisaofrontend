var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para vizualizar informações no git?");
    if ((nome = "git status")) {
        alert("O " + nome + ", serve para vizualizar informações no git. Parabéns você acertou!");
        window.location="Questão5.html";
    }
}