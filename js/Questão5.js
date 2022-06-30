var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando ver a versão do git?");
    if ((nome = "git --version")) {
        alert("O " + nome + ", serve ver a versão do git. Parabéns você acertou!");
        window.location="Questão6.html";
    }
}