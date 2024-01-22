

///////////////////////////////
//// QUESTION ANSWER QUIZZ ////

let questions = [
    {
        id: 1,
        question: "What is the full form of RAM?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail?",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "HperLinks Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "Which is the capital city of Pakistan?",
        answer: "Islamabad",
        options: [
            "Lahore",
            "Faisalabad",
            "Islamabad",
            "None of these"
        ]
    }
];


///////////////////////
///// VARIABLES ///////

let quizCon_two = document.getElementById("quiz__ques");
let quizThre = document.querySelector(".quiz__cont-two");
let quizCon_one = document.getElementById("quiz__ques-one");
let quizCon_three = document.getElementById("quiz__ques-three");
let develop__quiz = document.querySelector(".develop__quiz");
let inpt = document.getElementById("text");
let start_btn = document.querySelector(".start__btn");
let valid = document.getElementById("valid");
let btns = document.querySelector(".next__btn");
let btnss = document.getElementById("str__btn");
let question_count = 0;
let wrong_Ans = 0;
let right_Ans = 0;
let wrongAns = document.getElementById("wrong-answers");
let rightAns = document.getElementById("right-answers");
let gradePerc = document.getElementById("grade-percentage");
let r_Score = 0;
let w_Score = 0;
let t_Score = 0;
let percenTage = document.getElementById("grade-percentage");
let remarks = document.getElementById("remarks");
let emoji = document.getElementById("emoji");
emoji.src = "images/happy.jpg";
var inputField = true;
let go__home = document.querySelector(".go__home");
let min = 1;
let sec = 60;
let attemptScore = document.getElementById("attemptt");


///////////////////////////////////////
///// SHOW QUESTIONS AND OPTIONS //////

function show(count) {

    let question = document.getElementById("questions");

    question.innerHTML = `<h2> Q${count + 1}. ${questions[count].question} </h2>
        <ul class="option__group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
        </ul>`;

    localStorage.setItem("YouAtQuestion", question.innerText);

    toggleActive();
}

/////////////////////////
////// SUBMIT FORM //////

function submitForm(e) {
    e.preventDefault();

    var names = document.querySelector('.mail__input').value;

    localStorage.setItem("PlayerName", names);

    localStorage.setItem("quizStarted", true);

    const nameValue = localStorage.getItem("PlayerName");


    document.querySelector("#name").textContent = nameValue;
    document.querySelector(".opop").textContent = nameValue;

    show(0);
}

/////////////////////////////////////////
//// BUTTON SHOW AND HIDE FUNCTION //////

inpt.addEventListener("keyup", function () {

    if (inputField) {
        btnss.style.display = "block";
    }

    if (inpt.value.length == 0) {
        btnss.style.display = "none";
        valid.innerHTML = "";
    }

    if (inpt.value.length == 2) {
        inpt.style.borderBottom = "4px solid red";
        valid.innerHTML = "Name Atleast Contain 3 or More Words!";
    }

    if (inpt.value.length == 3) {
        inpt.style.borderBottom = "5px solid green";
        valid.innerHTML = "";
    }
})

////////////////////////////////
//// INPUT FIELD VALIDATION /////

start_btn.addEventListener('click', function () {
    let no_space = inpt.value.trim();
    let validd = no_space.split("").join("");
    let b_s = validd.length;
    if (b_s == "") {
        valid.innerHTML = "Name is Required";
        inpt.style.borderBottom = "4px solid red";
    } else if (b_s <= 2) {
        valid.innerHTML = "Name Atleast Contain 3 or More Words!";
        inpt.style.borderBottom = "4px solid red";
    } else {
        quizCon_two.style.display = "block";
        quizCon_one.style.display = "none";
        setInterval(mytime, 1000);
    }
});


/////////////////////
//// QUIZ TIMER /////

function mytime() {

    sec--;
    if (sec < 10) {
        document.getElementById('sec').innerHTML = "0" + sec + " Sec";
    } else {
        document.getElementById('sec').innerHTML = sec + " Sec";
    }

    if (sec <= 0) {
        sec = 60;
        min--;
    }
    if (sec === 0 || min === 0) {
        document.getElementById('sec').style.color = 'red';
    }

    if (min === -1) {
        clearInterval(quizTime);
        percTAGE();
        quizCon_three.style.display = "block"
        quizCon_two.style.display = "none";
    }

    if (min < 10) {
        document.getElementById('min').innerHTML = "0" + min + " Mins";
    } else {
        document.getElementById('min').innerHTML = min + " Mins";
    }
    localStorage.setItem("TakeMinutes", min);
    localStorage.setItem("TakeSeconds", sec);
}

var quizTime = setInterval(mytime, 1000);
clearInterval(quizTime);



///////////////////////
//// NEXT BUTTON //////

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {
        t_Score++;
        r_Score++;
        rightAns.innerHTML = r_Score;
        attemptScore.innerHTML = t_Score;
        localStorage.setItem("CorrectAnswers", r_Score);
        localStorage.setItem("AttemptQuestions", t_Score);
    }

      if (user_answer !== questions[question_count].answer) {
        t_Score++;
        w_Score++;
        rightAns.innerHTML = w_Score;
        attemptScore.innerHTML = t_Score;
        localStorage.setItem("WrongAnswers", w_Score);
        localStorage.setItem("AttemptQuestions", t_Score);
    }


    if (question_count == questions.length - 1) {

        localStorage.setItem("quizComplete", "true")

        // percTAGE();

        quizCon_three.style.display = "block"

        quizCon_two.style.display = "none";

        quizCon_one.style.display = "none";
        progressPage();
        return;
    }

    question_count++;
    show(question_count);

    localStorage.setItem("quizCurrent", question_count);
}

////////////////////////////////////////////////
////// QUIZ RESULT PERCENTAGE AND GRADE ////////

function percTAGE() {
    let perc = localStorage.getItem("CorrectAnswers") * 100 / questions.length;
    let s = Math.floor(perc);
    percenTage.innerHTML = s + "%";

    if (perc >= 80) {
        remarks.innerHTML = "Congratulations!";
        remarks.style.color = 'green';
        emoji.src = "images/happy.jpg";
    } else if (perc >= 70) {
        remarks.innerHTML = "Well Done!";
        remarks.style.color = 'green';
        emoji.src = "images/happy.jpg";
    } else if (perc >= 50) {
        remarks.innerHTML = "Good. Keep it Up!";
        remarks.style.color = 'orange';
        emoji.src = "images/happy.jpg";
    } else {
        remarks.innerHTML = "Bad Luck! Try Again";
        remarks.style.color = 'red';
        emoji.src = "images/sadd.jpg";
    }
    localStorage.setItem("Grade", perc);
}

///////////////////////////////////
///// OPTIONS ACTIVE FUNCTION /////

function toggleActive() {
    let option = document.querySelectorAll("li.option");


    for (let i = 0; i < option.length; i++) {

        option[i].onclick = function () {

            btns.style.display = "block";

            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }

            option[i].classList.add("active");

        }
    }
}

//////////////////////////
///// PROGRESS PAGE //////

function progressPage(){
    const nameVal = localStorage.getItem("PlayerName");
    document.querySelector("#name").textContent = nameVal;
    document.querySelector(".opop").textContent = nameVal;

    quizCon_three.style.display = "block";
    quizCon_two.style.display = "none";
    quizCon_one.style.display = "none";

    percTAGE();
    rightAns.innerHTML =localStorage.getItem("CorrectAnswers"); 
    attemptScore.innerHTML = questions.length;
    wrongAns.innerHTML = localStorage.getItem("WrongAnswers");
    attemptScore.innerHTML = questions.length;
}

///////////////////////////
////// HOME FUNCTION //////

function initalPage(e) {
    e.preventDefault();
    localStorage.clear();
    location.href = "index.html";
}

go__home.addEventListener("click", initalPage);

///////////////////////////////////
///// WINDOW ONLOAD FUNCTION //////

window.onload = function () {

    const quizStarted = localStorage.getItem("quizStarted");

    const nameVale = localStorage.getItem("PlayerName");
    document.querySelector("#name").textContent = nameVale;
    document.querySelector(".opop").textContent = nameVale;

    if (quizStarted === "true") {
        // User has started the quiz
        quizCon_one.style.display = "none";

        // localStorage.setItem("TakeMinutes", min);
        // localStorage.setItem("TakeSeconds", sec);

        const quizComplete = localStorage.getItem("quizComplete");

        if (quizComplete === "true") {
            // User has completed the quiz, show the progress page
          progressPage();

        } else {

            // Check if the user has a saved question index
            const savedIndex = localStorage.getItem("quizCurrent");

            setInterval(mytime, 1000);

            if (savedIndex !== null) {
                // User is in the middle of the quiz, show the question based on the saved index
                question_count = parseInt(savedIndex);

                // Check if the user has already completed all questions
                const allquizComplete = localStorage.getItem("quizComplete");

                if (allquizComplete === "true") {
                    // If all questions are completed, show the progress page
                    progressPage();

                } else {
                    // If not all questions are completed, show the question
                    show(question_count);
                    quizCon_two.style.display = "block";
                }
            } else {
                // User hasn't started the quiz or there is no saved index
                // Show the first question
                show(0);
                quizCon_two.style.display = "block";
            }

            // Retrieve and set the progress data
            r_Score = parseInt(localStorage.getItem("CorrectAnswers") || 0);
            w_Score = parseInt(localStorage.getItem("WrongAnswers") || 0);
        }
    } else {
        // User hasn't started the quiz, show the initial container
        quizCon_two.style.display = "none";
    }

}