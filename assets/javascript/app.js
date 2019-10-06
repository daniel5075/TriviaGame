//create vars
var counter;
var count = 5;
var trivaQuestions = [
    {
        question: "Who is often called the father of the computer?",
        correctAnswer: "Charles Babbage",
        answer1: "Charles Babbage",
        answer2: "Robert Frost",
        answer3: "Alexander Flemming",
        answer4: "Leonardo DaVinci"
    },
    {
        question: "Registered on March 15, 1985, which of these was the first domain name on the internet?",
        correctAnswer: "Symbolics.com",
        answer1: "Cookies.com",
        answer2: "Northrop.com",
        answer3: "Symbolics.com",
        answer4: "IBM.com"
    }
];
//timer
function countdown() {
    clearInterval(counter);
    counter = setInterval(decrement, 1000);
};
//for counting down
function decrement() {

    $("#show-number").html("<h2>Time Left: " + count + "</h2>");


    if (count === 0) {
        stop()
    };
    count--
};
//clear counter
function stop() {
    clearInterval(counter);
};

//display question and buttons
function questionAndAnswers() {
    $("#show-question").html("<h2>" + trivaQuestions[0].question + "</h2>");
    console.log(trivaQuestions[0].question)
    for (i = 1; i < 4; i++) {
        myFunction()
    }
}
function run() {
    countdown()
    questionAndAnswers()
    myFunction()
}
function myFunction() {
    var i = 0;
    var x = document.createElement("BUTTON");
    var t = document.createTextNode(trivaQuestions[0].answer + i);
    x.appendChild(t);
    document.body.appendChild(x);
}
//display correct answer if wrong or "correct" if right or "out of time" and display gif
//automatically move to next question
//switch question when time runs out or on answer click
//once all questions answered display -correct answers - incorrect answers -and unanswered.  Start over button
//trivia questions
//running total of wins/losses when clicked
run()
