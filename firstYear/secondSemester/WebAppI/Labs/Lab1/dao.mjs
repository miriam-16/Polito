import sqlite from 'sqlite3';
import { Film, FilmLibrary } from './filmLibrary.mjs';

const db = new sqlite.Database('films.db', (err) => {
    if (err) throw err;
});

export const listFilms = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM films';
        db.all(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const films = rows.map(row => new Film(row.title, row.director, row.year));
                resolve(films);
            }
        });
    });
};