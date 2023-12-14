let usuário = "";

while (usuário === ""){
    usuário = prompt("Qual o seu nome ?");
}

let elementoSaudações = document.querySelector("#nome-usuário");

if (usuário === null){
    elementoSaudações.textContent = "seja muito bem vindo!"
}else{
    elementoSaudações.textContent = usuário;
}
