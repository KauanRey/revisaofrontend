var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Para que serve o comando git pull?");
    if ((nome = "Atualizar o repositório local de acordo com o repositório remoto")) {
        alert("Serve para " + nome + ". Parabéns você acertou!");
        window.location="Final.html";
    }
}