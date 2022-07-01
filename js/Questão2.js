var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para navegar nas pastas no git?");
    if ((nome = "cd ou cd .. ")) {
        alert("O " + nome + ", serve para navegar nas pastas no git. Parabéns você acertou!");
        window.location="Questão3.html";
    }
}