"use strict"

// Class Quiz
class Quiz{
    //questions 
    questions = new Map(
        [1, new Map(['Which organization defines Web Standards ?', 
        new Array["Apple Inc", "IBM Corporation","World Wide Web Consortium", "Microsoft Corporation"]])],
        [2, new Map(["HTML is considered as ?", 
        new Array("Programming language", "OOP", "High level language", "Markup language")])],
        [3, new Map(["HTML uses ?", 
        new Array("User-defined tags", "predefined tags ", "Fixed tags defined by the language", "Tags for links only")])],
        [4, new Map(["HTML was first proposed in ?", 
        new Array("1980", "1990", "1995", "2000")])],
        [5, new Map(["Who is the main author of HTML ?", 
        new Array("Brendan Eich", "Tim Berners-Lee", "Web developer", "Google Inc")])]
    );
    answers = new Map(
        [1, "World Wide Web Consortium"],
        [2, "Markup language"],
        [3, "Fixed tags defined by the language"],
        [4, "1990"],
        [5, "Tim Berners-Lee"]
    );

    //constructor
    constructor(){}

    getNextQuestion(prevQuestion){
        return this.questions.get(prevQuestion); //returns next question
    }

    isResponseCorrect(question,response){
        if(this.answers.get(question) === response)
        {
            return true;
        } else
        {
            return false;
        }
    }

}