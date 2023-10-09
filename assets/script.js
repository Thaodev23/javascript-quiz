// Preparations:
// 1. index.html
// 2. style.css
// 3. Make a variable for the button to start.
// 




// Below: how many seconds I inputted in the timer.
var secondsLeft = 60;
// var message = "Game Over";
// Below: is used to make the variable for the start button. querySelector the id in html. querySelector are used to grab tags from the html and connect them to the JS.
var startButton = document.querySelector("#start");
var javaQuest = document.querySelector(".javaquest");
var span = document.querySelector(".countdown");
var question = document.querySelector(".jsquest");
var pickThis = document.querySelector(".pick");
// Below: j is variable for the number of question. j is the array selector. Array starts at 0.
var j = 0;
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var form = document.querySelector(".submission");
var timerCountDown = 60;
// Below: scoreBoard is the global variable for the number of questions I get correct.
var scoreBoard = 0;
var highScore = document.querySelector(".score")
var timerInterval;
var incorrect = document.querySelector("#results");
// var form = document.createElement("form");
// var label = document.createElement("label");
// var input = document.createElement("input");
// var submit = document.createElement("submit");
// Below: pulling the score from the local storage.
var highScoreNumb;
// Below: pulling the initial from the local storage.
var highScoreIp;
var subbtn = document.querySelector(".subbtn");
// Below: the input for your initials.
var subip = document.querySelector("#subip");
var HighScore = document.querySelector(".highscore");
var init = document.querySelector(".init");
var JavaScriptQuiz = document.querySelector("#JavaScript-Quiz");
var yourScore = document.querySelector("#your-score");
var ing = document.querySelector("#ing");
// var restartBtn = document.querySelector("#restart-button");

var quest = [
    "Question #1: What are the initial for JavaScript?",
    "Question #2: Which one of these are a programming language?",  
    "Question #3: What is the primary function of JavaScript?",
    "Question #4: What two other subjects were taught with the programming language JavaScript?"
]

// Below: one of the answer have to be true and others have to be false.
var answer = [
    {option1: false, option2: false, option3: true, option4: false,
     choice1: "CS", choice2: "JT", choice3: "JS", choice4: "YT"},
    {option1: true, option2: false, option3: false, option4: false,
     choice1: "JavaScript", choice2: "HTML", choice3: "CSS", choice4: "Joey Thao"},
    {option1: false, option2: true, option3: false, option4: false,
     choice1: "To make sushi", choice2: "Add functionality and interactivity to webpage", choice3: "To make youtube channels", choice4: "Make computers faster"}, 
    {option1: false, option2: false, option3: false, option4: true,
     choice1: "Biology and history", choice2: "Chemistry and social science", choice3: "Math and English", choice4: "HTML and CSS" }
]

// Below: is to make the event listener (the click to start). startQuiz is the function. The startQuiz is initialize in this section. The evenListener causes the activation after the click.
startButton.addEventListener("click", startQuiz);

// Below: Preferably put before the functions.
option1.addEventListener("click", clickOption1)
option2.addEventListener("click", clickOption2)
option3.addEventListener("click", clickOption3)
option4.addEventListener("click", clickOption4)

// Below: have to put on the bottom so user can update the highscore.
highScoreNumb = localStorage.getItem("Score");
if (highScoreNumb > 0 ) {
    highScoreIp = localStorage.getItem("Initial");
    // Below: showing the user the previous highscore and initials.
    init.textContent = highScoreIp;
    HighScore.textContent=highScoreNumb;
} 

// Below: function is to cause the button to go away once you push start quiz.
function startQuiz(){
    console.log("startQuiz");
    // startButton.setAttribute("style", "display: none;")
    // Below: similar to display:none. Will not add space (not have any void space). Remove the button.
    startButton.remove();
    // startButton.setAttribute("style", "display: none;");
    //  Below: set "quiz card to display". below have to be put inside the function startQuiz. Allowing the questions to appear.
    javaQuest.setAttribute("style","display: block;") 
    // Below: take the question and put it on the browser and also the choices. Preferably place before the setTime. "a" they all have to be strings. j allows us to cycle the questions and answers.
    question.textContent = quest[j];

    option1.textContent = answer[j].choice1;
    option2.textContent = answer[j].choice2;
    option3.textContent = answer[j].choice3;
    option4.textContent = answer[j].choice4;
     // Start the set time function.
    setTime();
}

function setTime() {
    // Below: set the timerInterval into variables. Sets interval in variable.
     timerInterval = setInterval(function() {
        // Below: -- means subtract 1.
        secondsLeft--;
        // Below represent the countdown on the actual physical page.
        span.textContent = secondsLeft;
        // Below: Telling me if the amount of seconds is less than 0 then timer needs to stop. 
        if(secondsLeft < 1) {
        // Below: Stops execution of action at set interval.
        clearInterval(timerInterval);
        // Calls function to create and append image.
        quizOver();}
        // Below: 1000 represent 1 second.
    }, 1000);
}

// Below: function is use to send the message that "Quiz Is Over."
function quizOver () {
//     // Below: target the question variable and send out the score (scoreBoard variable).
    question.textContent = scoreBoard;
    yourScore.setAttribute("style", "display: block;");
//     // Below: setAttribute changes anything in the style sheet (Causes all the option 
//     // buttons to disappear).
    pickThis.setAttribute("style", "display: none;");
    incorrect.setAttribute("style", "display: none;");
    JavaScriptQuiz.textContent = "Quiz Is Over";

    if (highScoreNumb < scoreBoard || highScoreNumb === null) {
        incorrect.textContent="New Highscore";
        // Below: block allows for it to go from invisible (display:none) to visible (display:block). This form is the submission form.
        form.setAttribute("style", "display: block;");
    }

    else {
        incorrect.setAttribute("style", "display: none;");
    }

}

function clickOption1() {
    console.log("clickOption1");
    if (answer[j].option1 === false){
        console.log("wrong");
        timerCountDown = timerCountDown - 5;
        // Below: after taking 5 secs of  the time, the number of secs needs to be shown.
        span.textContent = timerCountDown; 
        incorrect.textContent="incorrect";
        incorrect.setAttribute("style", "color: red")
    }
    else{
        console.log("correct");
        scoreBoard++;
        // Below: allows the point added to be shown on the scoreboard.
        highScore.textContent = scoreBoard;
        incorrect.textContent="correct";
        incorrect.setAttribute("style", "color: blue");
    }
        quiz();
}

function clickOption2() {
    console.log("clickOption2");
    if (answer[j].option2 === false){
        console.log("wrong");
        timerCountDown = timerCountDown - 5;
        span.textContent = timerCountDown;
        incorrect.textContent="incorrect";
        incorrect.setAttribute("style", "color: red")
    }
    else{
        console.log("correct");
        scoreBoard++;
        highScore.textContent = scoreBoard;
        incorrect.textContent="correct";
        incorrect.setAttribute("style", "color: blue");
    }
        quiz();
}

function clickOption3() {
    console.log("clickOption3");
    if (answer[j].option3 === false){
        console.log("wrong");
        timerCountDown = timerCountDown - 5;
        span.textContent = timerCountDown;
        incorrect.textContent="incorrect";
        incorrect.setAttribute("style", "color: red")
    }
    else{
        console.log("correct");
        scoreBoard++;
        highScore.textContent = scoreBoard;
        incorrect.textContent="correct";
        incorrect.setAttribute("style", "color: blue");
    }
        quiz();
}

function clickOption4() {
    console.log("clickOption4");
    if (answer[j].option4 === false){
        console.log("wrong");
        timerCountDown = timerCountDown - 5;
        span.textContent = timerCountDown;
        incorrect.textContent="incorrect";
        incorrect.setAttribute("style", "color: red")
    }
    else{
        console.log("correct");
        scoreBoard++;
        highScore.textContent = scoreBoard;
        incorrect.textContent="correct";
        incorrect.setAttribute("style", "color: blue");
    }
        quiz();
}

function quiz() {
    // Below: j++ adds 1 to the j. j is equal to 0 but when j is j++ it is equal to 1. Array is collection of objects. 
    console.log("quiz");
    j++;
    if (j>3) {
        // Below: when j>3 the questions changes into the score.
        question.textContent = scoreBoard;
        // question.textContent = "Your Score:";
        JavaScriptQuiz.textContent = "Quiz Is Over";
        // QuizIsOver.textContent = "Quiz Is Over";
        // Below: causes the button to disappear.
        pickThis.setAttribute("style","display:none;");
        yourScore.setAttribute("style", "display: block;");
        // restartBtn.setAttribute("style", "display: block;");
        // Below: allows for the timer to stop when all the questions are answer.
        clearInterval(timerInterval);
        
        checkScore();
        // title.textContent ="Your Highscore is"
    }
    else {
        question.textContent = quest[j];
        // answer=variable, j=object (), .choice1=property
        option1.textContent = answer[j].choice1;
        option2.textContent = answer[j].choice2;
        option3.textContent = answer[j].choice3;
        option4.textContent = answer[j].choice4;
    }

    // Below: once j reaches a value of 4 it will stop the time and everything. So it means you finish the quiz and everything is over. 
       
}
// Below: pull the score from local storage and check if it's higher than the scoreboard. 
function checkScore () {
    //Below: highScoreNumb (placeholder), localStorage.getItem (the function to get an item from the local storage), "Score" is the key (key allows me to target one of the collected items in the storage and allows me to access the value).
    highScoreNumb=localStorage.getItem("Score");
    // Below: null means when there is no score then it will use the first score as the highscore. Null means nothing is there. 
    if (highScoreNumb < scoreBoard || highScoreNumb === null) {
        incorrect.textContent="New Highscore";
        // Below: block allows for it to go from invisible (display:none) to visible (display:block). This form is the submission form.
        form.setAttribute("style", "display: block;");
    }

    else {
        incorrect.setAttribute("style", "display: none;");
    }
}
// Below: setting items to local storage after clicking.
subbtn.addEventListener("click", subls);

// Below: (event)
function subls(event) {
    // Below: preventDefault prevents the refreshing of the page when you click on another link or a submit form.
    event.preventDefault();
    localStorage.setItem("Score", scoreBoard);
    // Below: setting the (whatever user types in) into the local storage. Initial is the key. Setting it in the local storage.
    localStorage.setItem("Initial", subip.value);
    init.setAttribute("style", "color: brown;");
    // Below: it reads the key and score from the local storage and display them on the browser.
    highScoreNumb = localStorage.getItem("Score");
if (highScoreNumb > 0 ) {
    highScoreIp = localStorage.getItem("Initial");
    // Below: showing the user the previous highscore and initials.
    init.textContent = highScoreIp;
    HighScore.textContent=highScoreNumb;
    subbtn.setAttribute("style", "display: none;");
    subip.setAttribute("style", "display: none;");
    ing.setAttribute("style", "display: none;");
    JavaScriptQuiz.setAttribute("style", "display: none;");
    j = 0;
    // startButton.setAttribute("style", "display:block");
    // startButton.textContent = "Restart Quiz";
} 

}

// restartBtn.addEventListener("click", restartQuiz);

// function restartQuiz(){
//     // startButton.setAttribute("style", "display: none;")
//     // Below: similar to display:none. Will not add space (not have any void space). Remove the button.
//     // startButton.remove();
//     restartBtn.setAttribute("style", "display: none;");
//     //  Below: set "quiz card to display". below have to be put inside the function startQuiz. Allowing the questions to appear.
//     javaQuest.setAttribute("style","display: block;") 
//     // Below: take the question and put it on the browser and also the choices. Preferably place before the setTime. "a" they all have to be strings. j allows us to cycle the questions and answers.
//     question.textContent = quest[j];

//     option1.textContent = answer[j].choice1;
//     option2.textContent = answer[j].choice2;
//     option3.textContent = answer[j].choice3;
//     option4.textContent = answer[j].choice4;
//      // Start the set time function.
//     setTime();
// }


// function subls() {
//     localStorage.setItem("Initial", subip.value);
//     subip.setAttribute("style", "brown;"); 
// }