const btnLogin = document.querySelector ("#btnLogin");
const inputUsuario = document.querySelector ("#usario");
const inputSenha = document.querySelector ("#senha");
let usuarioLogado = null;

(() => {
    usuarioLogado = localStorage.getItem("usario");
    if(usuarioLogado){
        window.location.href = "///tmp/guest-lvk0qb/Downloads/g243i2t-main/index.html";
    }
})();

btnLogin.onclick = (e) =>{

    e.preventDefault();

    let usurio = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario === "gabrielle"){
        if(senha === "191207"){
            localStorage.setItem("usuario" ,usiario);
            window.location.href = "/logado.html";
        }
        }else{
            inputUsuario.focus();
        }
    }
}