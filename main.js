const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se encontra em uma floresta misteriosa e vê dois caminhos diante de você. Qual você escolhe?",
        alternativas: [
            {
                texto: " Texto/resposta",
                afirmacao: "O caminho iluminado por uma luz suave.",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: "O caminho envolto em névoa e sombras",
            }
        ]
    },
    {
        enunciado: "Ao longo do caminho, você ouve um som estranho vindo dos arbustos. O que você faz?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Investiga o som, preparado para qualquer coisa.",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: "Ignora o som e segue em frente rapidamente.",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

mostraPergunta();
