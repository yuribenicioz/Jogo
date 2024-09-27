const questions = [
    { question: "Qual é a função oxigenada caracterizada pela presença de uma hidroxila ligada a um carbono saturado?", answers: ["Álcool", "Ácido carboxílico"], correct: 0 },
    { question: "Qual é o grupo funcional presente nos aldeídos?", answers: ["Carbonila", "Hidroxila"], correct: 0 },
    { question: "Os ésteres são obtidos pela reação entre:", answers: ["Álcool e ácido carboxílico", "Álcool e cetona"], correct: 0 },
    { question: "Qual é o composto resultante da oxidação de um álcool primário?", answers: ["Aldeído", "Éter"], correct: 0 },
    { question: "A cetona possui qual grupo funcional?", answers: ["C=O no meio da cadeia", "OH no final da cadeia"], correct: 0 },
    { question: "Qual é a função dos ácidos carboxílicos em presença de uma base forte?", answers: ["Formam sais e água", "Formam cetonas"], correct: 0 },
    { question: "Qual é a principal função do etanol no uso doméstico?", answers: ["Solvente e desinfetante", "Componente de polímeros"], correct: 0 },
    { question: "Qual composto é um éter?", answers: ["Etóxi-etano", "Ácido etanoico"], correct: 0 },
    { question: "Os aldeídos podem ser oxidados a:", answers: ["Ácidos carboxílicos", "Cetonas"], correct: 0 },
    { question: "Qual composto tem o grupo funcional -OH ligado diretamente a um anel aromático?", answers: ["Fenol", "Éter"], correct: 0 },
    { question: "Qual grupo funcional define os ésteres?", answers: ["R-COO-R", "R-O-R"], correct: 0 },
    { question: "Os éteres são formados pela reação entre:", answers: ["Dois álcoois", "Álcool e cetona"], correct: 0 },
    { question: "Qual é o nome da reação que converte ácidos carboxílicos em ésteres?", answers: ["Esterificação", "Hidrólise"], correct: 0 },
    { question: "Qual é o grupo funcional presente nos ácidos carboxílicos?", answers: ["-COOH", "OH-"], correct: 0 },
    { question: "Qual é a principal característica dos aldeídos e cetonas?", answers: ["Grupo carbonila", "Grupo hidroxila"], correct: 0 },
    { question: "A oxidação de um álcool secundário produz:", answers: ["Cetona", "Aldeído"], correct: 0 },
    { question: "Os álcoois são classificados de acordo com:", answers: ["A posição da hidroxila", "O tamanho da cadeia carbônica"], correct: 0 },
    { question: "Os fenóis são:", answers: ["Compostos que têm -OH ligado a um anel aromático", "Compostos que têm -COOH"], correct: 0 },
    { question: "Qual é o nome do composto CH3COOH?", answers: ["Ácido acético", "Ácido fórmico"], correct: 0 },
    { question: "Qual composto é produzido pela desidratação intermolecular de álcoois?", answers: ["Éter", "Ácido"], correct: 0 },
    { question: "A desidratação de um álcool pode resultar na formação de:", answers: ["Alqueno", "Aldeído"], correct: 0 },
    { question: "O que define um álcool primário?", answers: ["O carbono ligado ao grupo -OH está ligado a apenas um outro carbono", "O carbono está ligado a dois outros carbonos"], correct: 0 },
    { question: "Qual é o produto da oxidação de álcoois secundários?", answers: ["Cetonas", "Ácidos carboxílicos"], correct: 0 },
    { question: "Os ácidos carboxílicos reagem com álcoois para formar:", answers: ["Ésteres", "Cetonas"], correct: 0 },
    { question: "O que caracteriza os compostos da função cetona?", answers: ["A presença de um grupo carbonila no meio da cadeia", "A presença de um grupo hidroxila no final da cadeia"], correct: 0 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let playerName = '';

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nameContainer = document.getElementById('name-container');
const resultContainer = document.getElementById('result');

startButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value;
    if (nameInput) {
        playerName = nameInput;
        nameContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        setNextQuestion();
    } else {
        alert('Por favor, insira seu nome.');
    }
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
});

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn', 'answer-button');
        button.addEventListener('click', () => selectAnswer(index === question.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        correctAnswers++;
    }
    nextButton.style.display = 'block';
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `Parabéns, ${playerName}! Você acertou ${correctAnswers} de ${questions.length} questões!`;
}


    