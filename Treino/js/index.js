const perguntas = [
    {
        pergunta: "O que significa 'DOM' em JavaScript?",
        respostas: [
            "Documento Object Model",
            "Data Object Mode",
            "Dynamic Operation Method",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            "-=",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a palavra-chave para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para dividir uma string em um array de substrings?",
        respostas: [
            "slice()",
            "split()",
            "splice()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "++",
            "&",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes não é um tipo de dado em JavaScript?",
        respostas: [
            "string",
            "boolean",
            "tuple",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "remove()",
            "delete()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função de 'typeof' em JavaScript?",
        respostas: [
            "Verificar o tipo de uma variável",
            "Alterar o tipo de uma variável",
            "Criar uma nova variável",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
        respostas: [
            "'object'",
            "'null'",
            "'undefined'",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas)   {
    const quizItem = template.content.cloneNode(true)
    quiz.appendChild(quizItem)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas)   {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    
}
quizItem.querySelector('dl dt').remove()
//coloca a pergunta na tela
quiz.appendChild(quizItem)