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
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var triviaQuestions = [
    {
        question: "Who is often called the father of the computer?",
        correctAnswer: "A",
        writtenAnswer: "Charles Babbage",
        img: "assets/images/Babbage.jpg",
        answerA: "Charles Babbage",
        answerB: "Robert Frost",
        answerC: "Alexander Flemming",
        answerD: "Leonardo DaVinci"
    },
    {
        question: "Registered on March 15, 1985, which of these was the first domain name on the internet?",
        correctAnswer: "C",
        writtenAnswer: "Symbolics.com",
        img: "assets/images/symbolics.jpg",
        answerA: "ARPA.net",
        answerB: "Northrop.com",
        answerC: "Symbolics.com",
        answerD: "IBM.com"
    },
    {
        question: "Before being known as PayPal, the company went by what name?",
        correctAnswer: "B",
        writtenAnswer: "Confinity",
        img: "assets/images/paypal.png",
        answerA: "Coinbase",
        answerB: "Confinity",
        answerC: "InstaMoney",
        answerD: "PayNow"
    },
    {
        question: "What was Twitter's original name?",
        correctAnswer: "D",
        writtenAnswer: "twttr",
        img: "assets/images/twitter.png",
        answerA: "tweeter",
        answerB: "Turtle",
        answerC: "MessageMe",
        answerD: "twttr"
    },
    {
        question: "When was Internet Explorer first released?",
        correctAnswer: "C",
        writtenAnswer: "August 16, 1995",
        img: "assets/images/internetexplorer.png",
        answerA: "June 7, 1992",
        answerB: "October 28, 1998",
        answerC: "August 16, 1995",
        answerD: "July 24, 2000"
    }
];
var lastQ = triviaQuestions.length - 1;


//timer
function countdown() {
    clearInterval(counter);
    counter = setInterval(decrement, 1000);
};

// function questionAndAnswers() {
//     clearImage()
//     countdown()
//     var qQue = triviaQuestions[currentQuestion]
//     $("#show-question").html("<h2>" + qQue.question + "</h2>");
//     $("#A").html(qQue.answerA)
//     $("#B").html(qQue.answerB)
//     $("#C").html(qQue.answerC)
//     $("#D").html(qQue.answerD)
// };

//for counting down
function decrement() {
    $("#show-number").html(count);
    if (count === 0) {
        stop()
        count = 5
        unanswered++
        $("#show-question").html("<h2> Bummer, You're Out of Time </h2><p> The correct answer was: " + triviaQuestions[currentQuestion].writtenAnswer + "</p>")
        $("#answer-image").html("<img src=" + triviaQuestions[currentQuestion].img + ">")
        clearContents()
        countup()
        console.log("here i am")
        // nextQuestion()
    };
    count--
};

//clear counter
function stop() {
    clearInterval(counter);
};

//display question and buttons
// function questionAndAnswers() {
//     clearImage()
//     countdown()
//     var qQue = triviaQuestions[currentQuestion]
//     $("#show-question").html("<h2>" + qQue.question + "</h2>");
//     $("#A").html(qQue.answerA)
//     $("#B").html(qQue.answerB)
//     $("#C").html(qQue.answerC)
//     $("#D").html(qQue.answerD)
// };

function nextQuestion() {
    currentQuestion++
    count = 5
    if (currentQuestion <= lastQ) {
        // countdown()
        questionAndAnswers()
    }
    else {
        clearContents()
        clearImage()
        finalScore()
        stop()
    }
};

function finalScore() {
    clearContents()
    clearImage()
    $("#show-question").html("<h2> All done, here's how you did!</h2> <p>Correct Answers: " + rightAnswer + "</p><p>Incorrect Answers: " + wrongAnswer + "</p> <p>Unanswered: " + unanswered + "</p>")
}

function checkAnswer(answer) {
    if (answer === triviaQuestions[currentQuestion].correctAnswer) {
        $("#show-question").html("<h2> Correct!! </h2>")
        rightAnswer++
    }
    else {
        $("#show-question").html("<h2> Does Not Compute!! </h2><p> The correct answer was: " + triviaQuestions[currentQuestion].writtenAnswer + "</p>")
        wrongAnswer++
    }
    $("#answer-image").html("<img src=" + triviaQuestions[currentQuestion].img + ">")
    stop()
    clearContents()
    countup()
}

function clearContents() {
    $("#A").html("")
    $("#B").html("")
    $("#C").html("")
    $("#D").html("")
}

function clearImage() {
    $("#answer-image").empty()
}

function countup() {
    clearInterval(counter2);
    counter2 = setInterval(increment, 1000);
};

//for counting up
function increment() {
    if (count2 === 3) {
        stop2()
        count2 = 0
        nextQuestion()
    };
    count2++
};


function stop2() {
    clearInterval(counter2);
};



//display correct answer if wrong or "correct" if right or "out of time" and display gif
//automatically move to next question
//switch question when time runs out or on answer click
//once all questions answered display -correct answers - incorrect answers -and unanswered.  Start over button
//trivia questions
//running total of wins/losses when clicked
$("#startButton").on("click", function () {
    // function questionAndAnswers() {
    $("#startButton").hide();
    clearImage();
    countdown();
    var qQue = triviaQuestions[currentQuestion];
    $("#show-question").html("<h2>" + qQue.question + "</h2>");
    $("#A").html(qQue.answerA);
    $("#B").html(qQue.answerB);
    $("#C").html(qQue.answerC);
    $("#D").html(qQue.answerD);
});

// questionAndAnswers()
