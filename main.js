function perguntaNome(){
    let resposta = prompt("Qual o seu nome ?");    
    return resposta;
}

let nome = perguntaNome();

while (nome === ""){
    nome = perguntaNome();
}

if (nome !== ""){
    const elementoSaudacoes = document.querySelector("#saudações");
    elementoSaudacoes.textContent = "Bem-vindo, " + nome;
    alert(nome + ", seja bem vindo a minha primeira página web");        
}else{
    alert("Seja bem vindo a minha primeira página web");
}
