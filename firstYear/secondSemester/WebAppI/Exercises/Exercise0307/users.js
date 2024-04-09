"use strict";

const users =
  "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Luca Pezzolla";
const usersArray = users.split(",");
console.log(usersArray);

for (let i = 0; i < usersArray.length; i++) {
  usersArray[i] = usersArray[i].trim();
}
console.log(usersArray);

const acronyms = [];
for(const name of usersArray){
  let acronym = name[0];

  for (let i = 1; i < name.length; i++){
    if(name[i] == ' ' && name[i+1] != ' '){
      acronym = acronym + name[i+1];
    }
  }
  acronyms.push(acronym.toUpperCase());
}

console.log(acronyms);
