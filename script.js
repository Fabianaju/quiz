const questions = [
    {
        question: 'Qual é a capital da França?',
        answers: ['Paris', 'Londres', 'Berlim', 'Madri'],
        correct: 'Paris'
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        answers: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
        correct: 'Júpiter'
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        answers: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'],
        correct: 'Miguel de Cervantes'
    },
    {
        question: 'Qual é a fórmula química da água?',
        answers: ['H2O', 'CO2', 'NaCl', 'O2'],
        correct: 'H2O'
    },
    {
        question: 'Qual é o maior oceano do mundo?',
        answers: ['Atlântico', 'Índico', 'Ártico', 'Pacífico'],
        correct: 'Pacífico'
    },
    {
        question: 'Quem pintou a Mona Lisa?',
        answers: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
        correct: 'Leonardo da Vinci'
    },
    {
        question: 'Qual é o nome do planeta vermelho?',
        answers: ['Marte', 'Vênus', 'Mercúrio', 'Urano'],
        correct: 'Marte'
    },
    {
        question: 'Qual é o maior animal terrestre?',
        answers: ['Elefante', 'Girafa', 'Hipopótamo', 'Rinoceronte'],
        correct: 'Elefante'
    },
    {
        question: 'Quem foi o primeiro homem a pisar na lua?',
        answers: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'Yuri Gagarin'],
        correct: 'Neil Armstrong'
    },
    {
        question: 'Qual é a moeda oficial dos Estados Unidos?',
        answers: ['Euro', 'Dólar', 'Yen', 'Libra'],
        correct: 'Dólar'
    },
    {
        question: 'Qual é o maior deserto do mundo?',
        answers: ['Saara', 'Gobi', 'Antártica', 'Kalahari'],
        correct: 'Antártica'
    },
    {
        question: 'Qual é a capital da Austrália?',
        answers: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correct: 'Canberra'
    },
    {
        question: 'Qual é o elemento químico com o símbolo Au?',
        answers: ['Ouro', 'Prata', 'Cobre', 'Platina'],
        correct: 'Ouro'
    },
    {
        question: 'Qual é o nome do livro sagrado do Islamismo?',
        answers: ['Alcorão', 'Torá', 'Bíblia', 'Vedas'],
        correct: 'Alcorão'
    },
    {
        question: 'Qual é o nome do maior continente?',
        answers: ['África', 'Ásia', 'América', 'Europa'],
        correct: 'Ásia'
    },
    {
        question: 'Quem é o autor da obra "A Odisséia"?',
        answers: ['Homero', 'Platão', 'Aristóteles', 'Sócrates'],
        correct: 'Homero'
    },
    {
        question: 'Qual é o nome do processo pelo qual as plantas produzem seu alimento?',
        answers: ['Fotossíntese', 'Respiração', 'Digestão', 'Transpiração'],
        correct: 'Fotossíntese'
    },
    {
        question: 'Qual é o maior rio do mundo em volume de água?',
        answers: ['Nilo', 'Amazonas', 'Yangtze', 'Mississippi'],
        correct: 'Amazonas'
    },
    {
        question: 'Quem foi o famoso líder do movimento pelos direitos civis dos negros nos EUA?',
        answers: ['Martin Luther King Jr.', 'Malcolm X', 'Rosa Parks', 'Nelson Mandela'],
        correct: 'Martin Luther King Jr.'
    },
    {
        question: 'Qual é o país com a maior população do mundo?',
        answers: ['Índia', 'Estados Unidos', 'China', 'Brasil'],
        correct: 'China'
    },
    {
        question: 'Qual é o maior órgão do corpo humano?',
        answers: ['Coração', 'Fígado', 'Pulmão', 'Pele'],
        correct: 'Pele'
    },
    {
        question: 'Qual é a capital do Japão?',
        answers: ['Pequim', 'Seul', 'Tóquio', 'Bangkok'],
        correct: 'Tóquio'
    },
    {
        question: 'Quem é conhecido como o "pai da psicanálise"?',
        answers: ['Sigmund Freud', 'Carl Jung', 'Ivan Pavlov', 'John Watson'],
        correct: 'Sigmund Freud'
    }
];



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('answersContainer').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const answersContainer = document.getElementById('answersContainer');

    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;

    answersContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswerClick(answer));
        answersContainer.appendChild(button);
    });
}

function handleAnswerClick(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('answersContainer').style.display = 'none';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Sua pontuação é ${score} de ${questions.length}`;
    document.getElementById('resultContainer').style.display = 'block';
}

// Inicia o quiz quando a página é carregada
startQuiz();
