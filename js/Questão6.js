var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Para que serve o comando git push?");
    if ((nome = "Enviar arquivos para o repositório remoto")) {
        alert("Serve para " + nome + ". Parabéns você acertou!");
        window.location="Questão7.html";
    }
}