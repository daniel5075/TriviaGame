//create vars
var counter;
var counter2;
var count2 = 0;
var count = 5;
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var currentQuestion = 0;
var triviaQuestions = [
    {
        question: "Who is often called the father of the computer?",
        correctAnswer: "A",
        img: "assets/images/Babbage.jpg",
        answerA: "Charles Babbage",
        answerB: "Robert Frost",
        answerC: "Alexander Flemming",
        answerD: "Leonardo DaVinci"

    },
    {
        question: "Registered on March 15, 1985, which of these was the first domain name on the internet?",
        correctAnswer: "C",
        img: "../images/symbolics.jpg",
        answerA: "ARPA.net",
        answerB: "Northrop.com",
        answerC: "Symbolics.com",
        answerD: "IBM.com"
    },
    {
        question: "Registered on March 15, 1985, which of these was the first domain name on the internet?",
        correctAnswer: "C",
        img: "../images/symbolics.jpg",
        answerA: "ARPA.net",
        answerB: "Northrop.com",
        answerC: "Symbolics.com",
        answerD: "IBM.com"
    }
];
var lastQ = triviaQuestions.length - 1;
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
console.log("length" + triviaQuestions.length)
//timer
function countdown() {
    clearInterval(counter);
    counter = setInterval(decrement, 1000);
};
//for counting down
function decrement() {

    $("#show-number").html(count);
    if (count === 0) {

        stop()
        count = 5
        nextQuestion()
    };
    count--
};
//clear counter
function stop() {

    clearInterval(counter);

};

//display question and buttons
function questionAndAnswers() {

    countdown()
    var qQue = triviaQuestions[currentQuestion]
    $("#show-question").html("<h2>" + qQue.question + "</h2>");

    $("#A").html(qQue.answerA)
    $("#B").html(qQue.answerB)
    $("#C").html(qQue.answerC)
    $("#D").html(qQue.answerD)
};

function nextQuestion() {
    currentQuestion++
    count = 5
    console.log("Last Q: " + lastQ)
    console.log("current Q: " + currentQuestion)
    if (currentQuestion <= lastQ) {

        countdown()
        questionAndAnswers()
        console.log("current Quest: " + currentQuestion)
    }
    else {
        finalScore()
        stop()
    }
};
function finalScore() {
    console.log("Right: " + rightAnswer);
    console.log("Wrong " + wrongAnswer);
}
function checkAnswer(answer) {
    if (answer === triviaQuestions[currentQuestion].correctAnswer) {
        $("#show-question").html("<h2> Correct!! </h2>")
        rightAnswer++
    }
    else {
        $("#show-question").html("<h2> Does Not Compute!! </h2>")
        wrongAnswer++
    }
    $("#answer-image").html("<img src=" + triviaQuestions[currentQuestion].img + ">")
    console.log("image " + triviaQuestions[currentQuestion].img)
    stop()
    countup()
}
function countup() {
    clearInterval(counter2);
    counter2 = setInterval(increment, 1000);
};
//for counting up
function increment() {


    if (count2 === 5) {

        stop2()
        count2 = 0
        nextQuestion()
    };
    count2++
    console.log('count 2: ' + count2)
};
//clear counter
function stop2() {

    clearInterval(counter2);

};
// function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode(triviaQuestions[0].answerA);
//     x.appendChild(t);
//     document.body.appendChild(x);

// }
//display correct answer if wrong or "correct" if right or "out of time" and display gif
//automatically move to next question
//switch question when time runs out or on answer click
//once all questions answered display -correct answers - incorrect answers -and unanswered.  Start over button
//trivia questions
//running total of wins/losses when clicked
questionAndAnswers()
