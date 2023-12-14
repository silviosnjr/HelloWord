let usuário = "";

while (usuário === ""){
    usuário = prompt("Qual o seu nome ?");
}

let elementoSaudações = document.querySelector("#nome-usuário");

if(nome === ""){
    alert("Seja bem vindo a minha primeira página web"); 
}else{
    elementoSaudações.textContent = nome;
    alert(nome + ", seja bem vindo a minha primeira página web");
}