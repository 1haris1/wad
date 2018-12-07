var questions = [
    {
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    if(!quizOver){
        var selectedValue = null;
        if(document.querySelector('input[name="dq"]:checked') !== null)
            selectedValue = document.querySelector('input[name="dq"]:checked').value;
        if (selectedValue == null) {
            document.getElementById("quiz-message").innerText = "Please selected an answer"
            document.getElementById("quiz-message").style.display = 'block';
        } else{
            document.getElementById("quiz-message").style.display = 'none';
            if(selectedValue == questions[currentQuestion].correctAnswer){
                correctAnswers++;
            }
            currentQuestion++;
            if(currentQuestion < questions.length){
                displayCurrentQuestion();
            }
            else {
                displayScore();
                document.getElementById("next-btn").innerText = "Play Again?"
                quizOver = true;
            }
        }
    } else {
        quizOver = false;
        document.getElementById("next-btn").innerText = "Next Question";
        resetQuiz();
        displayCurrentQuestion();
        hideScore();
    }
}

function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionId = document.getElementById("question");
    var choiceList = document.getElementById("choice-list");
    var numChoices = questions[currentQuestion].choices.length;

    questionId.innerText = question;
    choiceList.innerHTML = "";
    var choice;
    for(var i=0; i<numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        choiceList.innerHTML += "<li><input type='radio' value='"+i+"' name='dq'>" + choice + "</li>";
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}