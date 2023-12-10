function perguntaNome(){
    let resposta = prompt("Qual o seu nome ?");    
    return resposta;
}

let usuário = perguntaNome();

while (usuário === ""){
    usuário = perguntaNome();
}

if(usuário === ""){
    alert("Seja bem vindo a minha primeira página web"); 
}else{
    const elementoSaudações = document.querySelector("#nome-usuário");
    elementoSaudações.textContent = usuário;
    alert(nome + ", seja bem vindo a minha primeira página web");
}