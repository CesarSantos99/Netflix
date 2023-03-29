let botao = document.getElementById("botao-pergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("fechar-netflix")


function abacate() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
        imagem.id = "fechar-girar"
    } else{
        menu.style.display = "none"
        imagem.id = "fechar-netflix"
    }
}


botao.addEventListener("click", abacate)