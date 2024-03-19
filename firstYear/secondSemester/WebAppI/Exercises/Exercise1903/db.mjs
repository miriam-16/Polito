import sqlite from 'sqlite3'
const db = new sqlite.Database('questions.sqlite', (err) => {if(err) throw err});
db.all("SELECT * FROM user", (err, rows) => { //it doesn't return nothing, requires a callback to execute after running the query
    if(err)
        throw err;

    //console.log(rows)
    rows.forEach((r) => {console.log(r.name)}) //can get attrubutes of the rows
});

db.each("SELECT * FROM user", (err, row) => {
    if(err)
        throw err;
})