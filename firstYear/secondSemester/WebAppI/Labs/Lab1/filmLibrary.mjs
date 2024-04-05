import dayjs from 'dayjs';
import sqlite3 from 'sqlite3';
import express from 'express';
import { favoriteFilms, getlistFilms, selectFilm } from './dao.mjs' //to add the method from da

function printAll(array) {
    return array.forEach((x) => console.log(`${x}`))
}

function Film(id, title, pid=1, rating = -1, favorite = false , date = null){
    this.id = id;
    this.title = title;
    this.pid = pid;
    this.favorite = favorite;
    this. date = dayjs(date);
    this.rating = rating;

    this.toString = () => {
        return `Id: ${this.id}, ` +
        `Title: ${this.title}, Favorite: ${this.favorite}, ` +
        `Watch date: ${this.date.format('YYYY-MM-DD')}, Score: ${this.rating}, ` +
        `User: ${this.pid}` ;
      }
}

function FilmLibrary(){
    this.list  = [];
    this.addNewFilm = (film) => {this.list.push(film)};

//////////////////////////////
//          Lab 2          //
/////////////////////////////

    this.getAllFilms = function(){
        return new Promise((resolve, reject) => {
            const sql = `select * from films`

            db.all(sql, (err, rows) => {
                if(err) reject(err)
                else resolve(rows)
            })
        });
    }

    this.getFavorites = function(){
        return new Promise((resolve, reject) => {
            const sql = `select * from films where isFavorite = 1`
            db.all(sql, (err, rows) => {
                if(err) reject (err)
                else resolve(rows)
            })
        });
    }

    this.getWatchedToday = function(){
        return new Promise((resolve, reject) => {
            const sql = `select * from films where watchDate = ?`
            db.all(sql, [dayjs().format('YYYY-MM-DD')], (err, rows) => {
                if(err) reject (err)
                else resolve(rows)
            })
        });
    }

    this.getWatchedBeforeDate = function(date){
        return new Promise((resolve, reject) => {
            const sql = `select * from films where watchDate < ?`
            db.all(sql, [date], (err, rows) => {
                if(err) reject (err)
                else resolve(rows)
            })
        });
    }

    this.getRatingGEThan = function(rating){
        return new Promise((resolve, reject) => {
            const sql = `select * from films where rating >= ?`
            db.all(sql, [rating], (err, rows) => {
                if(err) reject (err)
                else resolve(rows)
            })
        });
    }

    this.getSearchFilm = function(title){
        return new Promise((resolve, reject) => {
            const sql = `select * 
                from films 
                where title LIKE ?`
            db.all(sql, [`%${title}%`], (err, rows) => {
                if(err) reject (err)
                else resolve(rows)
            })
        });
    }


this.insertMovie = function(f){
    return new Promise((resolve, reject) => {
        const sql = `insert into films(id, title, isFavorite, rating, watchDate, userId)
            values (?,?,?,?,?,?)`;
        
        db.run(sql, [f.id, f.title, f.favorite ? 1: 0, f.rating, f.date.format('YYYY-MM-DD'), f.pid], (err) => {
            if(err) reject(err)
            else resolve()
        })
    });
}

this.deleteMovie = function(filmId){
    return new Promise((resolve, reject) => {
        const sql = `delete from films where id=?`;

        db.run(sql, [filmId], (err) => {
            if(err) reject(err)
            else resolve()
        })
    });
}

this.setNullWatchDate = function(){
    return new Promise((resolve, reject) => {
        const sql = `update films set watchDate = null`;

        db.run(sql, (err) => {
            if(err) reject(err)
            else resolve()
        })
    });
}


}

//////////////////////////////
//          Lab 1          //
/////////////////////////////

const f1 = new Film(1,'Pulp Fiction',1,5, true,dayjs('2024-03-10'));
const f2 = new Film(2,'21 Grams',1,4, true,dayjs('2024-03-17'));
const f3 = new Film(3,'Star Wars',1,0);
const f4 = new Film(4,'Matrix',1,0);
const f5 = new Film(5, 'Shrek',1, 3, undefined, dayjs('2024-03-21'));

const listFilms = new FilmLibrary();
listFilms.addNewFilm(f1);
listFilms.addNewFilm(f2);
listFilms.addNewFilm(f3);
listFilms.addNewFilm(f4);
listFilms.addNewFilm(f5);

//listFilms.printFilms();

//////////////////////////////
//          Lab 2          //
/////////////////////////////

const db = new sqlite3.Database('films_dump.db', (err) => {if(err) throw err});
listFilms.getAllFilms().then((rows) => {
    const filmsAsArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate))
    //printAll(filmsAsArray)
})

listFilms.getFavorites().then((rows) => {
    const favoritesArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchDate))
    //printAll(favoritesArray)
})

listFilms.getWatchedToday().then((rows) => {
    const watchedTodayArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchDate))
    //printAll(watchedTodayArray)
})

listFilms.getWatchedBeforeDate(dayjs().format('YYYY-MM-DD')).then((rows) => {
    const beforeDateArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchDate))
    //printAll(beforeDateArray)
})

listFilms.getRatingGEThan(3).then((rows) => {
    const ratingsGEArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchDate))
    //printAll(ratingsGEArray)
})

listFilms.getSearchFilm("e").then((rows) => {
    const searchedArray = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchDate))
    //printAll(searchedArray)
})

/*  const f6 = new Film(6,'Dune',1,5,true,dayjs('2024-03-21'));
listFilms.insertMovie(f6).then(() => {console.log("Movie added")})   */

//listFilms.deleteMovie(6).then(() => {console.log("Movie removed")})

//listFilms.setNullWatchDate().then(()=> {console.log("Set null all dates")})


//////////////////////////////
//          Lab 3          //
/////////////////////////////

export {Film, FilmLibrary};

const app = express();
app.use(express.json());

/* app.get('/films', (req, res) => {
    getlistFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.statusCode(500).send("Database error: " + err)
    })
}); */

/* app.get('/unwatchedFilms', (req, res) => {
    favoriteFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.statusCode(500).send("Database error: " + err)
    })
}); */

/* app.get('/films/:id', (req, res) => {
    const filmId = req.params.id;
    selectFilm(filmId).then((f) => {
        res.json(f)
    }).catch((err) => {
        res.statusCode(500).send("Database error: " + err)
    })
}) */

 app.post('/films', (req, res) => {
    const filmId = req.params.id;
    selectFilm(filmId).then((f) => {
        res.json(f)
    }).catch((err) => {
        res.statusCode(500).send("Database error: " + err)
    })
})


app.listen(3000, () => {console.log("Running!")})