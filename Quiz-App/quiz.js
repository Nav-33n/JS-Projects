const quizData = [
    {
        question: "What's the top number of a fraction called?",
        a: "Denominator",
        b: "Numerator",
        c: "Decimal",
        d: "Fractional",
        correct: "b",
    }, {
        question: "A dog has a body mass of 23kg. What is its mass in grams?",
        a: "2.3",
        b: "0.023",
        c: "23,000",
        d: "23",
        correct: "c",
    },{
        question: "What is the largest two digits prime number?",
        a: "96",
        b: "97",
        c: "98",
        d: "99",
        correct: "d",
    },{
        question: "How many factors are there in 71?",
        a: "1",
        b: "2",
        c: "3",
        d: "None of these.",
        correct: "b",
    },{
        question: "The number 2 is a __ number",
        a: "Odd",
        b: "Prime (a whole number greater than 1 whose only factors are 1 and itself)",
        c: "composite (Numbers that have more than two factors)",
        d: "None of these",
        correct: "b",
    },{
        question: "How many hours in 90 minutes?",
        a: "1.5 hours",
        b: "1.30 hours",
        c: "1 hour",
        d: "None of these",
        correct: "a",
    },{
        question: "How many years are there in a decade?",
        a: "100",
        b: "10",
        c: "1",
        d: "1000",
        correct: "b",
    },{
        question: "What is 20 years called?",
        a: "Vicennial",
        b: "Millennium",
        c: "Decade",
        d: "Centennial",
        correct: "a",
    },{
        question: "What is the value of b^0?",
        a: "b",
        b: "-1",
        c: "0",
        d: "1",
        correct: "d",
    },{
        question: "What is the value of x in the equation 3(x + 5) = 21?",
        a: "4",
        b: "6",
        c: "1",
        d: "2",
        correct: "d",
    }
];

const answerEls = document.querySelectorAll('.answer');    
const quiz = document.getElementById('quiz');

const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAns();
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;

};

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
    }
});

    return answer;
}

function deselectAns() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
});
}
submit.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Scored  ${score}/${quizData.length}.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});


/* TO-DO list
add question no. that shows which question currently you are?
modify next button to submit button at the end question?
add passing grades!!
*/