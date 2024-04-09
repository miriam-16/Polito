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
  this.find = (user) => this.answers.filter(a => a.user === user);
  this.afterDate = (date) => this.answers.filter(a => (a.date.isAfter(date)  || a.date.isSame(date)));
  this.listByDate = () => { //wants a copy, we can't modify the original version
    const ans = [...this.answers];
    ans.sort((a1, a2) => (a1.date.valueOf() - a2.date.valueOf()));
    /* ans.sort((a1, a2) => {
      if(a1.date.isBefore(d2))
        return -1;
      else if (a1.date.isAfter(d2))
        return +1;
      else return 0;
    }) */ 
    return ans;
  }
  this.listByScore = () => { //[...this.answers].sort()
    const ans = [...this.answers];
    ans.sort((a1, a2) => a1.score - a2.score); 
    return ans;
  }
}

const a1 = new Answer('yes', 'm1', 5, dayjs('2024-03-12'));


const q1 = new Question('Are you happy?', 'm2', dayjs('2024-03-12'));
console.log(typeof q1);
console.log(q1.constructor);
console.log(q1 instanceof Question);

q1.add(a1);
q1.add(new Answer('No', 'm3', 6, dayjs('2024-03-12')));
q1.add(new Answer('Maybe', 'm3', 7, dayjs('2024-03-18')));
q1.add(new Answer('Undecided', 'm4', 0, dayjs()));



