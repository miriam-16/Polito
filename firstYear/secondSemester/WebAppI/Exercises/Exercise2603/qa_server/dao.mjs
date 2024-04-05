/* Data Access Object (DAO) module for accessing Q&A */
/* Initial version taken from exercise 4 (week 03) */

import sqlite from 'sqlite3';
import { Question, Answer } from './QAModels.mjs';

// open the database
const db = new sqlite.Database('questions.sqlite', (err) => {
  if (err) throw err;
});

/** QUESTIONS **/
// get all the questions
export const listQuestions = () => {
  // write something clever
}

// get a question given its id
export const getQuestion = (id) => {
  /*  -- SOLUTION OF COPILOT 
  
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE answer SET score = score + ? WHERE id = ?';
    db.run(sql, [vote, answerId], function (err) {
      if (err)
        reject(err);
      else if (this.changes === 0)
        resolve({error: "Answer not available, check the inserted id."});
      else
        resolve({success: "Vote recorded successfully."});
    });
  }); */


}

// vote for an answer
export const voteAnswer = (answerId, vote) => {
  // write something clever
}