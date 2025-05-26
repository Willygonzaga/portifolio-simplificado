<<<<<<< HEAD
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao(){
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos(){
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
=======
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao(){
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos(){
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
>>>>>>> 70446e5dfec70ca909545c9723776b5cbb9d0066
};