"use strict"



// question objects
let q1 = {
    question: "Which organization defines Web Standards ?",
    choices: ["Apple Inc", "IBM Corporation","World Wide Web Consortium", "Microsoft Corporation"],
    answer: "World Wide Web Consortium",
    choice: "c"
};
let q2 = {
    question: "HTML is considered as ?",
    choices: ["Programming language", "OOP", "High level language", "Markup language"],
    answer: "Markup language",
    choice: "d"
};
let q3 = {
    question: "HTML uses",
    choices: ["User-defined tags", "predefined tags ", "Fixed tags defined by the language", "Tags for links only"],
    answer: "Fixed tags defined by the language",
    choice: "c"
};
let q4 = {
    question: "HTML was first proposed in ?",
    choices: [1980, 1990, 1995, 2000],
    answer: 1990,
    choice: "b"

};
let q5 = {
    question: "Who is the main author of HTML ?",
    choices: ["Brendan Eich", "Tim Berners-Lee", "Web developer", "Google Inc"],
    answer: "Tim Berners-Lee",
    choice: "b"
};

// Class Quiz
class Quiz{
    //questions 
    questions = [q1,q2,q3,q4,q5];

    //constructor
    constructor(){}

    getNextQuestion(prevQuestion){
        if(prevQuestion === 5)
        {
            return null;
        }

        return this.questions[prevQuestion+1];
    }
}


// vairables
let quiz = new Quiz(); //creates an instance of quiz
let answered = false;  //used for checking if the user ansered the question
let question = quiz.getNextQuestion(-1);  //holds the questions for the quiz
let questionNumber = 0;
let score = 0;
let scoreOutOf100 = 0;

const qNumElement = document.querySelector(".number");
const qElement = document.querySelector(".question");
// multiple choices
const liElements = document.querySelectorAll(".choice");
const choiceA = document.querySelector(".a");
const choiceB = document.querySelector(".b");
const choiceC = document.querySelector(".c");
const choiceD = document.querySelector(".d");
const nextButton = document.querySelector("button");
//list of circles at the bottom that shows if question is ansered or not
const circleQ1 = document.querySelector(".q1");
const circleQ2 = document.querySelector(".q2");
const circleQ3 = document.querySelector(".q3");
const circleQ4 = document.querySelector(".q4");
const circleQ5 = document.querySelector(".q5");


//test purpose
console.log(liElements);


//fill the question content
if(questionNumber === 0){
    questionNumber++;
    qNumElement.innerHTML = questionNumber;
    qElement.innerHTML = question.question;
    choiceA.innerHTML = question.choices[0];
    choiceB.innerHTML = question.choices[1];
    choiceC.innerHTML = question.choices[2];
    choiceD.innerHTML = question.choices[3];
}

//add event listener for next button
nextButton.addEventListener('click', (ev) =>{
    if(answered === false){
        console.log("question not answered");
        return;
    }
    
    //check if the answere is correct
    
});

//add click listener to all multiple choices
for (const li of liElements){
    li.addEventListener('click', (ev) =>{
        let response = li.innerHTML;
        answered = true;
        //correct response
        if(response == question.answer){
            li.style.background = "green";
            li.style.color = "white";
            score++;
            scoreOutOf100 = score * 20;
        } else{
            li.style.background = "red";
            li.style.color = "white";
            document.querySelector(`.${question.choice}`).style.background = "green";
            document.querySelector(`.${question.choice}`).style.color = "white";
        }
    });
}