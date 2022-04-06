const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const solutionElement = document.getElementById('solution-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    reset()
}

function displayQuestion(question) {
    questionElement.innerText = question.question
    question.solutions.forEach(solution => {
        const button = document.createElement('button')
        button.innerText = solution.text
        button.classList.add('btn')
        if (solution.correct) {
            button.dataset.correct = solution.correct
        }
        button.addEventListener('click', choice)
        solutionElement.appendChild(button)
    })
}

function reset() {
    nextButton.classList.add('hide')
    while (solutionElement.firstChild) {
        solutionElement.removeChild
        (solutionElement.firstChild)
    }
}

function choice(i) {
    const selection = i.target
    const correct = selection.dataset.correct
    setStatus(document.body, correct)
    Array.from(solutionElement.children).forEach(button=>
        setStatus(button, button.dataset.correct)
    })
}

function setStatus(element, correct) {
    clearStatus
}

const questions = [
    {
        question: 'Who was the first in flight?',
        solutions: [
            { text: 'Orville and Wilbur Wright', correct: false },
            { text: 'Amelia Earhart', correct: false },
            { text: 'Alberto Santos-Dumont', correct: true },
            { text: 'Henry Ford', correct: false },
        ]
    }

]