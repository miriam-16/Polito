'use strict';

document.addEventListener('DOMContentLoaded', event => {
    console.log("Page loaded");
    const table  = document.getElementById("answers-table")
})

function Answer(id, text, email, date, score = 0) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.score = score;
    this.date = dayjs(date);
}
  
function Question(id, text, email, date) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.date = dayjs(date);
    this.answers = [];

    this.addAnswer = (answer) => {
        this.answers.push(answer);
    }

    this.getAnswers = () => {
        return [...this.answers];
    }
}