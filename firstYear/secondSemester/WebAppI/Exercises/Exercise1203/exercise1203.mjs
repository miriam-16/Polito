import dayjs from 'dayjs';
//mjs because it will be exported as a module. It enforces strict mode

//build a constructor function 
function Answer(response, user, score, date){
  //we can add some local variables to be used in the methods, but they will not appear in the object as attributes. It's a way to hide some proprerties of the function
  const category = 'computer science';
  this.response = response;
  this.user = user;
  this.score = score;
  this.date = date;
  this.voteUp = () => {this.score++}; 
  this.getCategory = () => {return category;}
}

function Question(text, user, date){
  this.text = text;
  this.user = user;
  this.date = date;
  this.answers = [];

  this.add = (answer) => {this.answers.push(answer)}
}

const a1 = new Answer('yes', 'm1', 5, '2024-03-12');
console.log(a1);
a1.voteUp();
console.log(a1);

const q1 = new Question('Are you happy?', 'm2', '2024-03-12');
console.log(typeof q1);
console.log(q1);
q1.add(a1);
console.log(q1);
