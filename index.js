const perguntas = [
    {
        pergunta: 'Em que ano The Legend of Zelda: Breath of the Wild foi lançado?',
        respostas: [
            "2015",
            "2016",
            "2017",
        ],
        correta: 2
    },
    {
        pergunta: 'Onde Link desperta no começo de BOTW?',
        respostas: [
            "Shrine of Ressurection",
            "Shrine of Recollection",
            "Shrine of Recreation",
        ],
        correta: 0
    },
    {
        pergunta: 'Quantos anos Link dormiu?',
        respostas: [
            "10 anos",
            "50 anos",
            "100 anos",
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o nome da princesa que Link deve salvar?',
        respostas: [
            "Zelda",
            "Mipha",
            "Urbosa",
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o nome do vilão principal?',
        respostas: [
            "Ganondorf",
            "Ganon",
            "Ganondorf Dragmire",
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome do reino?',
        respostas: [
            "Hyrule",
            "Gerudo",
            "Lanaryu",
        ],
        correta: 0
    },
    {
        pergunta: 'Quantas versões de Ganon são encontradas em BOTW?',
        respostas: [
            "1",
            "3",
            "5",
        ],
        correta: 2
    },
    {
        pergunta: 'Quantas Divine Beasts que Link encontra?',
        respostas: [
            "3",
            "4",
            "5",
        ],
        correta: 1
    },
    {
        pergunta: 'Onde o jogo termina?',
        respostas: [
            "The Great Plateau",
            "Hyrule Castle",
            "The Temple of Time",
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o nome do item que Link usa para viajar pelo mundo?',
        respostas: [
            "Paraglider",
            "Sailcloth",
            "Glider",
        ],
        correta: 0
    },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}

//alert(perguntas[0].respostas[perguntas[0].correta])

/* Um exemplo de um objeto em JS 
const celular = {
    cor: 'Preto',
    modelo: 'Galaxy S10',
    peso: '157g'
} */