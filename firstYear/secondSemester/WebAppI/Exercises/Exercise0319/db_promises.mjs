import sqlite from 'sqlite3'
const db = new sqlite.Database('questions.sqlite', (err) => {if(err) throw err});

//focusing on computing the query and check if it succeedes or not
const users = new Promise((resolve, reject) => {
    db.all("select * from user", (err, rows) => {
        if(err)
            reject(err)
        else 
            resolve(rows)  //pratically, we are calling the function 'then'
    })
});

console.log(users) //pending

//when the execution of query starts, this print will be executed. This means I can use
//users and its parameters
users.then((rows) => {
    console.log(rows)
}).catch((err) => {console.log("Error", err)});

//---version 2
//this function has only an instruction inside
function get_users(){
    return new Promise((resolve, reject) => {
        db.all("select * from user", (err, rows) => {
            if(err)
                reject(err)
            else 
                resolve(rows)  //pratically, we are calling the function 'then'
        })
    });
}

get_users().then((rows) => {console.log(rows.length)})