const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question:"Chandrama Sarkeris currently works at:",
        answers:{
            a:"QUT",
            b:"Downer Defence Systems",
            c:"Rio Tinto",
            d:"Envista"
        },
        correctAnswer:"b"
    },
    {
        question:"Chandrama Sarker specialised in:",
        answers:{
            a:"GIS",
            b:"Computer Science",
            c:"History",
            d:"All of the above"
        },
        correctAnswer:"a"
    },
    {
        question:"Chandrama’s interpersonal skills include:",
        answers:{
            a:"Leadership",
            b:"Teamwork",
            c:"Analytical Skills",
            d:"Programming Languages"
        },
        correctAnswer:"b"
    },
    {
        question:"Chandrama is a:",
        answers:{
            a:"Doctor",
            b:"Professor",
            c:"Data Scientist",
            d:"All of the above and more"
        },
        correctAnswer:"c"
    }
];

function buildQuiz(){
    //variable to store the HTML output
    const output = [];
    for(i=0; i<quizQuestions.length; i++){

        //variable to store the list of possible answers
        const answers = [];

        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){

        answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
            + '</label>'
            );
        }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var numCorrect = 0;
    //for each question..
    for(i=0; i<quizQuestions.length; i++){
        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        // if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;

            //color the answer gree
            answerContainers[i].style.color = 'green';
        }

        //if answer is wring or blank
        else{
            //color the answer red
            answerContainers[i].style.color = 'red';
        }
    }
    //show number of correct answer out of total
    if (numCorrect === 0){
        resultContainer.innerHTML = "That wasn.t your best effort - you didn't get a single answer correct.";
    }
    if (numCorrect === 1){
        resultContainer.innerHTML = "There's room for improvement there! you only got one correct answer.";
    }
    if (numCorrect === 2){
        resultContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
    }
    if (numCorrect ===3){
        resultContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
    }
    if (numCorrect ===4){
        resultContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Chandrama so well!";
    }
}

//load quiz
buildQuiz();
submitButton.onclick = function(){
    showResults();
}