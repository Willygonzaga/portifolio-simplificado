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
    projetosInativos.forEach((projetoInativo, index) => {
        setTimeout(() => {
            projetoInativo.classList.add('ativo');
        }, index * 100); // Aparece com delay de 100ms entre cada projeto
    });
}