"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Page loaded");

  document.getElementById("loadbtn").addEventListener("click", async () => {

      try {
          const response = await fetch("http://localhost:3001/api/questions");
          const questions = await response.json(); // returns a promise
      if (response.ok) {
        const div = document.getElementById("questionlist");
        div.innerHTML = `<p>We have ${questions.length} questions</p>`;
        for (const q of questions) {
          div.innerHTML += `<p>${q.text}</p>`;
        }
      } else {
        console.log("Error: ", response.status);
      }
    } catch (e) {
      console.log("Network error: ", e);
    }
  });
});
