function perguntaNome(){
    let resposta = prompt("Qual o seu nome ?");    
    return resposta;
}

let nome = perguntaNome();

while (nome === ""){
    nome = perguntaNome();
}

const elementoSaudacoes = document.querySelector("#nome-usuário");
elementoSaudacoes.textContent = nome;
alert(nome + ", seja bem vindo a minha primeira página web");