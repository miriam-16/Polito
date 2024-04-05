import sqlite from 'sqlite3';
import { Film, FilmLibrary } from './filmLibrary.mjs';

const db = new sqlite.Database('films.db', (err) => {
    if (err) throw err;
});

export const getlistFilms = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM films';
        db.all(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const films = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
                resolve(films);
            }
        });
    });
};

/* Retrieve a list of all the films that fulfill each of the following filters:
    o All the favorite films.
    o All the best films (i.e., those rated 5 out of 5).
    o All the films seen in the last month.
    o All the unseen films (i.e., the films without a specified “watchDate”). */
export const favoriteFilms = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM films where isFavorite = 1";
        db.all(query, (err, rows) => {
            if (err) 
                reject(err);
            else {
                const films = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
                resolve(films);
            }
        });
    });
};

export const bestFilms = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM films where rating = 5";
        db.all(query, (err, rows) => {
            if (err)
                reject(err);
            else {
                const films = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
                resolve(films);
            }
        })
    })
}

export const seenLastMonthFilms = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM films where MONTH(watchDate) = 3";
        db.all(query, (err, rows) => {
            if (err)
                reject(err);
            else {
                const films = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
                resolve(films);
            }
        })
    })
};

export const unseenFilms = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM films where watchDate IS NULL";
        db.all(query, (err, rows) => {
            if (err)
                reject(err);
            else {
                const films = rows.map(row => new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
                resolve(films);
            }
        })
    })
};


/* Retrieve a specific film, i.e., given its “id” */
export const selectFilm = (filmId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM films WHERE id = ?';
        db.get(query, [filmId], (err, row) => {
            if(err)
                reject(err);
            else if (row === undefined)
                resolve({error: "Question not available, check the inserted id."});
            else
                resolve(new Film(row.id, row.title, row.userId, row.rating, row.isFavorite, row.watchedDate));
        })
    }) 
}


/* Create a new film, by providing all its information (as per the previous labs) – except the “id” that will
be automatically assigned by the back-end. */
export const insertFilm = (film) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO films(title, isFavorite, rating, watchDate, userId) VALUES (?,?, ?, DATE(), ?)';
        db.run(query, [film.title, film.isFavorite, film.rating, film.watchedDate.toISOString(), film.userId], function (err) {
            if(err)
                reject(err);
            else 
                resolve(this.lastID);
        })
    }) 
}
