
window.onload = function () {
    show(0);
}

// 1ST QUESTION ANSWER QUIZZ//

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

// // INPUT BUTTON SUBMIT//

let quizCon_two = document.getElementById("quiz__ques");
let quizCon_one = document.getElementById("quiz__ques-one");
let quizCon_three = document.getElementById("quiz__ques-three");

let develop__quiz = document.querySelector(".develop__quiz");




let inpt = document.getElementById("text");

var inputField = true;



// console.log(names)
function submitForm(e) {
    e.preventDefault();
    var names = document.querySelector('.mail__input').value;
    document.querySelector("#name").textContent = document.querySelector('.mail__input').value;
    document.querySelector(".opop").textContent = document.querySelector(".mail__input").value;
    // sessionStorage.setItem("name", names);

    quizCon_two.style.display = "block";

    quizCon_one.style.display = "none";

    setInterval(mytime, 1000);
}

// let user_namee = sessionStorage.getItem("name");
console.log(document.querySelector('.mail__input').value)

// let user_nameee = sessionStorage.getItem("name");

// document.querySelector("#name_nd").innerHTML = user_nameee;


inpt.addEventListener("keyup", function () {
    if (inputField) {
        btnss.style.display = "block";
    }

    if (inpt.value.length == 0) {
        btnss.style.display = "none";
    }
})


// NEXT BUTTON /////

let btns = document.querySelector(".next__btn");
let btnss = document.getElementById("str__btn");


let wrong_Ans = 0;
let right_Ans = 0;

let wrongAns = document.getElementById("wrong-answers");
let rightAns = document.getElementById("right-answers");
let gradePerc = document.getElementById("grade-percentage");

let r_Score = 0;
let w_Score = 0;
let t_Score = 0;


function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;


    let wrongAns = document.getElementById("wrong-answers");
    let rightAns = document.getElementById("right-answers");
    let attemptScore = document.getElementById("attemptt");

    if (user_answer == questions[question_count].answer) {
        t_Score++
        r_Score++;

        rightAns.innerHTML = r_Score;
        attemptScore.innerHTML = t_Score;
    }

    if (user_answer !== questions[question_count].answer) {
        t_Score++;
        w_Score++;

        wrongAns.innerHTML = w_Score;
        attemptScore.innerHTML = t_Score;
    }


    if (question_count == questions.length - 1) {

        percTAGE();

        quizCon_three.style.display = "block"

        quizCon_two.style.display = "none";

        quizCon_one.style.display = "none";

        return;

    }

    question_count++;
    show(question_count);
}

let percenTage = document.getElementById("grade-percentage");

let remarks = document.getElementById("remarks");

let emoji = document.getElementById("emoji");

emoji.src = "images/happy.jpg";


function percTAGE() {
    let perc = r_Score * 100 / questions.length;
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

}

// TIMEEEEE ////

let min = 1;
let sec = 60;


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
}

var quizTime = setInterval(mytime, 1000);

clearInterval(quizTime);


let question_count = 0;

function show(count) {
    let question = document.getElementById("questions");


    // question.innerHTML = "<h2>" + questions[count].question + "</h2>"; 
    question.innerHTML = `<h2> Q${count + 1}. ${questions[count].question} </h2>
    <ul class="option__group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>`;

    toggleActive();
}

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



let quizThre = document.querySelector(".quiz__cont-two");