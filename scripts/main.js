//Atualizar Itens 

const botaoAdicionar = document.querySelector(".cadastrar")
const arrayListaItens = JSON.parse(localStorage.getItem("lista-itens")) !== null ? JSON.parse(localStorage.getItem("lista-itens")) : []
if(arrayListaItens !== []){
    arrayListaItens.forEach(item => {
        adicionaNovoItem(item)
    });
}
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nomeItemAdicionado = document.querySelector("#nome").value
    const quantidadeItemAdicionado = document.querySelector("#quantidade").value
    const itemDaLista = {
        "nome": nomeItemAdicionado,
        "quantidade": quantidadeItemAdicionado,
        "id": arrayListaItens[arrayListaItens.length -1] ? arrayListaItens[arrayListaItens.length -1].id + 1 : 1
    }
        arrayListaItens.push(itemDaLista)
        adicionaNovoItem(itemDaLista)
    
})

function adicionaNovoItem(itemDaLista){
    const listaItens = document.querySelector(".lista")
    const linhaNova = document.createElement('li')
    linhaNova.classList.add("item")
    const novoStrong = document.createElement('strong')
    novoStrong.innerHTML = itemDaLista.quantidade
    linhaNova.appendChild(novoStrong)
    linhaNova.innerHTML += itemDaLista.nome + `<i class="fa-solid fa-trash-can icone-remover"></i>`
    listaItens.appendChild(linhaNova)
    // listaItens.innerHTML += (`<li class="item"><strong>${itemDaLista.quantidade}</strong>${itemDaLista.nome}<i class="fa-solid fa-trash-can icone-remover"></i></li>`)
    linhaNova.setAttribute('data-id', itemDaLista.id)
    localStorage.setItem("lista-itens", JSON.stringify(arrayListaItens))
}

const listaItens = document.querySelector(".lista")
listaItens.addEventListener('click', (evento) => {
    const [...listaClasses] = evento.target.classList
    if(listaClasses.includes("icone-remover")){
        removeBd(evento.target.parentNode.getAttribute('data-id'))
        evento.target.parentNode.remove()
    }
})

function removeBd (id){
    const elementoExcluido = arrayListaItens.findIndex(item => item.id == id)
    arrayListaItens.splice(elementoExcluido,1)
    localStorage.setItem('lista-itens', JSON.stringify(arrayListaItens))
   
}
