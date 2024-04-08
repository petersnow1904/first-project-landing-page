/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
    Passo 2 - identificar o clique no botão 
    Passo 3 - adicionar a classe "ativo" nos projetos escondidos 
- 
-Objetivo 2 - esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele
    
    */

    //Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    //Passo 1 - pegar o botão "mostrar mais" no JS pra poder verificar quando o usuário clicar em cima dele 

    const botaoMostrarMais = document.querySelector('.btn-mostrar-projetos');  
    //é preciso agora guardar em algum lugar o botão para poder verificar quando o usuário clicar em cima dele, neste caso é guardado na variavel botaoMostrarMais
    const projetosInativos=document.querySelectorAll('.projeto:not(.ativo)')
    //('.projeto:not(.ativo)') -- retorna um array com todos os projetos que não estão ativos (não possuem a class "ativo
    
    //Passo 2 - identificar o clique no botão
    botaoMostrarMais.addEventListener('click', () => {
        // Passo 3 - adicionar a classe "ativo" nos projetos escondidos 
       //para cada projeto que não estiver ativo (não possui a class "ativo")
        mostrarMaisProjetos(); 
        esconderBotao();

    });
    
    function esconderBotao() {
        botaoMostrarMais.classList.add('remover');
    }

    function mostrarMaisProjetos() {
        projetosInativos.forEach(projetosInativo => {
            projetosInativo.classList.add('ativo');
        });
    }

