'use strict'

const scores = [6, 8, -2, -9, 4, 5, -2, 10]
//scores[0] = 6 is valid even though scores is const. The content of an array can be changed, but no the array itself. I can't do scores = []
//If i want to do this, i can declare score with let. It's here the difference between let and const with arrays
console.log(scores)

//without let the strict mode gives error. In particular, we use const as the value is reassigned inside the for and it's not a problem.
for (const score of scores) {
  console.log('Your score is ' + score)
}

// const copyScores = scores; copies the reference of the array. This is not good because we modify the original array
const copyScores = [...scores] //this is the right way to duplicate an array. It is declared as const even though we have to change its content,
// but as it's made inside a scope, that's not a problem

// first version with splice
/* for (let i = 0; i < scores.length; i++){
  if(copyScores[i] < 0){
    copyScores.splice(i, 1);
    i--; //as splice change the indexes of the copy, we have to maintain the indexes coherent while searching
  }
} */

//cleaner version
const positiveScores = []
for (const score of copyScores) {
  if (score >= 0) positiveScores.push(score)
}
const NN = copyScores.length - positiveScores.length
console.log(positiveScores)

//it converts content into stringg, so the result is not correct
/* positiveScores.sort(); 
console.log(positiveScores); */

for (let repeat = 0; repeat < 2; repeat++) {
  let posMin = 0
  for (let i = 0; i < positiveScores.length; i++) {
    if (positiveScores[i] < positiveScores[posMin]) posMin = i
  }
  positiveScores.splice(posMin, 1)
}
console.log(positiveScores)

let avg = 0
for (const score of positiveScores) avg += score
avg = Math.round(avg / positiveScores.length);

for (let count=0; count<NN+2; count++)
  positiveScores.push(avg);

console.log(positiveScores);