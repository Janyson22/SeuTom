// const modal = document.querySelector('#modalCantor')
// const tabela = document.getElementsByTagName('table')

// function adicionarCantor() {
//     let nomeCantor = document.getElementById('adicionarCantor').value
//     let lista = document.getElementById("lista").innerHtml
//     let listaAtual = `<tr><td>${nomeCantor}</td></tr>`
//     document.getElementById('lista').innerHTML = lista + listaAtual

// }

// function linhas(){
//     for (let i = 0; i < linhas.length; i++){
//         let linha = linhas[i];
//         linha.addEventListerner("click",function(){
//             visualizarCantor();
//         })
//     }
// }



// function visualizarCantor(){
//     modal.style.opacity = "1"
// }

function toggle() {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active')

    let popup = document.getElementById('popup');
    popup.classList.toggle('active')
}



