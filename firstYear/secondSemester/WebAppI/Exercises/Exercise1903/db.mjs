import sqlite from 'sqlite3'
const db = new sqlite.Database('questions.sqlite', (err) => {if(err) throw err});
db.all("SELECT * FROM user", (err, rows) => { //it doesn't return nothing, requires a callback to execute after running the query
    if(err)
        throw err;

    //console.log(rows)
    rows.forEach((r) => {console.log(r.name)}) //can get attrubutes of the rows
}); //this callcback function is executed one time

db.each("SELECT * FROM user", (err, row) => { //select onlu one row
    if(err)
        throw err;

        console.log(row.id, row.name)  //this is a callback executed fdor each element, so they might happen in any order
})

const userId = 3
//avoid using concatenation
db.get("SELECT * FROM USER WHERE id=?", [userId], (err, row) => {
    console.log("USER IS ", row)
})



db.close() // be aware of when close the db connection, it must be after the execution of queries
// we are scheduling two queries, we cannot ensure the order of the result because the order of the scheduler doesn't guarantee the order of the result