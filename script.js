// ==================== LÓGICA DO SIMULADOR ====================
let nivelEquilibrio = 50; // Começa exatamente no meio (Equilibrado)

function tomarDecisao(impacto) {
    nivelEquilibrio += impacto;
    
    // Impede que passe de 0 ou 100
    if (nivelEquilibrio < 0) nivelEquilibrio = 0;
    if (nivelEquilibrio > 100) nivelEquilibrio = 100;
    
    atualizarSimulador();
}

function redefinirSimulador() {
    nivelEquilibrio = 50;
    atualizarSimulador();
}

function atualizarSimulador() {
    const indicador = document.getElementById('indicador-equilibrio');
    const feedback = document.getElementById('feedback-simulador');
    
    // Atualiza visualmente a largura do indicador da barra
    indicador.style.width = nivelEquilibrio + '%';
    
    // Textos de feedback com base no valor
    if (nivelEquilibrio === 50) {
        feedback.textContent = "Equilíbrio Perfeito! Ótima produtividade sem agredir a natureza.";
        feedback.style.color = "#2e7d32";
    } else if (nivelEquilibrio < 40) {
        feedback.textContent = "Alerta: Você aumentou a produção temporária, mas o solo e as águas estão sofrendo degradação severa!";
        feedback.style.color = "#d32f2f";
    } else if (nivelEquilibrio > 65) {
        feedback.textContent = "Atenção: Ótimo cuidado ambiental, mas verifique se a escala de produção atende a demanda do mercado.";
        feedback.style.color = "#f57c00";
    } else {
        feedback.textContent = "Sua fazenda está em níveis aceitáveis de sustentabilidade. Continue ajustando!";
        feedback.style.color = "#1976d2";
    }
}


// ==================== LÓGICA DO QUIZ INTERATIVO ====================
const perguntasQuiz = [
    {
        pergunta: "Qual das práticas abaixo melhor representa o tema 'Equilíbrio entre produção e meio ambiente'?",
        opcoes: [
            "Aumentar o desmatamento para expandir pastos rapidamente.",
            "Utilizar o Sistema de Integração Lavoura-Pecuária-Floresta (ILPF).",
            "Banir completamente o uso de qualquer tecnologia no campo.",
            "Substituir toda a água de irrigação por água potável tratada."
        ],
        correta: 1
    },
    {
        pergunta: "Para que serve a agricultura de precisão?",
        opcoes: [
            "Para plantar apenas sementes redondas.",
            "Para aplicar insumos e água na quantidade exata e no local correto, reduzindo desperdícios.",
            "Para prever o clima com 100% de certeza para os próximos dez anos.",
            "Para acelerar o crescimento das plantas usando luz artificial em todo o campo."
        ],
        correta: 1
    },
    {
        pergunta: "O que são bioinsumos na agricultura moderna?",
        opcoes: [
            "Produtos químicos altamente tóxicos proibidos pela lei.",
            "Ferramentas digitais de tratoristas.",
            "Defensivos e fertilizantes de origem biológica (organismos vivos ou recursos naturais).",
            "Combustíveis fósseis usados para mover colheitadeiras."
        ],
        correta: 2
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const elementoPergunta = document.getElementById('pergunta');
const elementoAlternativas = document.getElementById('alternativas');
const btnProximo = document.getElementById('btn-proximo');
const containerQuiz = document.getElementById('quiz-container');
const containerResultado = document.getElementById('resultado-quiz');
const elementoPlacar = document.getElementById('placar');

function iniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    containerResultado.style.display = 'none';
    containerQuiz.style.display = 'block';
    carregarPergunta();
}

function carregarPergunta() {
    resetarEstadoBotao();
    let q = perguntasQuiz[perguntaAtual];
    elementoPergunta.textContent = q.pergunta;
    
    q.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.classList.add('btn-opcao');
        botao.addEventListener('click', () => selecionarResposta(indice, botao));
        elementoAlternativas.appendChild(botao);
    });
}

function resetarEstadoBotao() {
    btnProximo.style.display = 'none';
    while (elementoAlternativas.firstChild) {
        elementoAlternativas.removeChild(elementoAlternativas.firstChild);
    }
}

function selecionarResposta(indiceSelecionado, botaoClicado) {
    let correta = perguntasQuiz[perguntaAtual].correta;
    const todosBotoes = elementoAlternativas.querySelectorAll('.btn-opcao');
    
    todosBotoes.forEach(btn => btn.disabled = true); // Desativa outros cliques
    
    if (indiceSelecionado === correta) {
        botaoClicado.style.backgroundColor = "#c8e6c9";
        botaoClicado.style.borderColor = "#4caf50";
        pontuacao++;
    } else {
        botaoClicado.style.backgroundColor = "#ffcdd2";
        botaoClicado.style.borderColor = "#f44336";
        // Mostra a correta
        todosBotoes[correta].style.backgroundColor = "#c8e6c9";
    }
    
    btnProximo.style.display = 'block';
}

btnProximo.addEventListener('click', () => {
    perguntaAtual++;
    if (perguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    containerQuiz.style.display = 'none';
    containerResultado.style.display = 'block';
    elementoPlacar.textContent = `Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas sobre sustentabilidade!`;
}

function reiniciarQuiz() {
    iniciarQuiz();
}

// Inicializa o Quiz assim que a página termina de carregar
window.onload = function() {
    iniciarQuiz();
