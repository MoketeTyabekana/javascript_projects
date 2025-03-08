const quizQuestions = [
  {
    question: "What is the capital city of South Africa?",
    answers: [
      { text: "Johannesburg", correct: false },
      { text: "Cape Town", correct: false },
      { text: "Pretoria", correct: true },
      { text: "Durban", correct: false },
    ],
  },
  {
    question: "Which year did South Africa gain democracy?",
    answers: [
      { text: "1990", correct: false },
      { text: "1994", correct: true },
      { text: "1985", correct: false },
      { text: "2000", correct: false },
    ],
  },
  {
    question:
      "Who was the first democratically elected president of South Africa?",
    answers: [
      { text: "Nelson Mandela", correct: true },
      { text: "Thabo Mbeki", correct: false },
      { text: "Jacob Zuma", correct: false },
      { text: "Cyril Ramaphosa", correct: false },
    ],
  },
  {
    question: "Which South African city is known as the 'Mother City'?",
    answers: [
      { text: "Johannesburg", correct: false },
      { text: "Cape Town", correct: true },
      { text: "Durban", correct: false },
      { text: "Port Elizabeth", correct: false },
    ],
  },
  {
    question: "What is the South African currency called?",
    answers: [
      { text: "Rand", correct: true },
      { text: "Dollar", correct: false },
      { text: "Pound", correct: false },
      { text: "Euro", correct: false },
    ],
  },
  {
    question: "Which South African leader won the Nobel Peace Prize in 1984?",
    answers: [
      { text: "Nelson Mandela", correct: false },
      { text: "FW de Klerk", correct: false },
      { text: "Desmond Tutu", correct: true },
      { text: "Steve Biko", correct: false },
    ],
  },
  {
    question:
      "Which sport is South Africa most famous for winning three world cups in?",
    answers: [
      { text: "Soccer", correct: false },
      { text: "Cricket", correct: false },
      { text: "Rugby", correct: true },
      { text: "Hockey", correct: false },
    ],
  },
  {
    question: "What is South Africa's national animal?",
    answers: [
      { text: "Springbok", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Rhino", correct: false },
    ],
  },
  {
    question: "Which mountain is a famous landmark in Cape Town?",
    answers: [
      { text: "Drakensberg", correct: false },
      { text: "Table Mountain", correct: true },
      { text: "Lion’s Head", correct: false },
      { text: "Magaliesberg", correct: false },
    ],
  },
  {
    question: "Which is the largest province in South Africa by land size?",
    answers: [
      { text: "Gauteng", correct: false },
      { text: "KwaZulu-Natal", correct: false },
      { text: "Northern Cape", correct: true },
      { text: "Eastern Cape", correct: false },
    ],
  },
];

const questionButton = document.getElementById("question");
const answerbutton = document.getElementById("answers");
const nextbutton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";

  showQuestion();
}

function showQuestion() {
  let currentQuestionIndex = quizQuestions[currentQuestionIndex];
  let questionNum = (innerHTML = currentQuestionIndex + 1);

  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
  answerbutton.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
  });
}
