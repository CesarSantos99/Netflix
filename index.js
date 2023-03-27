let botao = document.getElementById("botao-pergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("fechar")


function abacate() {
    if (menu.style.display == "block") {
        menu.style.display = "none"
        fechar.id = "fechar"
    }else{
        menu.style.display = "block"
        fechar.id = "fechar-girar"
    }
}


botao.addEventListener("click", abacate)