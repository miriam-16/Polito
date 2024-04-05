import dayjs from 'dayjs';
import express from 'express';
import { Film } from './structure.mjs';
import { favoriteFilms, getlistFilms, insertFilm, selectFilm, updateRatingFilm, updateIsFavoriteFilm, deleteFilm, unseenFilms, bestFilms, seenLastMonthFilms, updateFilm } from './dao.mjs' //to add the method from dao

import morgan from 'morgan';
import { check, validationResult } from 'express-validator'

const app = express();
app.use(express.json());

/* middleware */
app.use(express.json());
app.use(morgan('dev'));

app.get('/films', (req, res) => {
    getlistFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
});

app.get('/favoriteFilms', (req, res) => {
    favoriteFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
});

app.get('/bestFilms', (req, res) => {
    bestFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
});

app.get('/seenLastMonthFilms', (req, res) => {
    seenLastMonthFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
});

app.get('/unwatchedFilms', (req, res) => {
    unseenFilms().then((films) => {
        res.json(films)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
});

app.get('/films/:id', (req, res) => {
    const filmId = req.params.id;
    selectFilm(filmId).then((f) => {
        res.json(f)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
})

app.post('/addFilm', [
    check('title').isString(),
    check('pid').isNumeric(),
    check('rating').isNumeric(),
    check('favorite').isBoolean(),
    check('date').isISO8601()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(422).json({ error: errors.array() });

    const { title, pid, rating, favorite, date } = req.body;
    const toInsert = new Film(7, title, pid, rating, favorite, dayjs(date));
    insertFilm(toInsert).then((f) => {
        res.json(f)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
})

app.put('/updateFilm/:id', [
    check('title').isString(),
    check('pid').isNumeric(),
    check('rating').isNumeric(),
    check('favorite').isBoolean(),
    check('date').isISO8601()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(422).json({ error: errors.array() });

    const { title, pid, rating, favorite, date } = req.body;
    const toUpdate = new Film(req.params.id, title, pid, rating, favorite, dayjs(date));
    updateFilm(toUpdate).then((msg) => {
        res.json(msg)
    }).catch((err) => {
        res.status(500).send("Database error: " + err)
    })
})


app.put('/updateRating/:id', [
    check('rating').isNumeric()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(422).json({ error: errors.array() });

    const filmId = req.params.id;
    const newRating = req.body.rating;
    updateRatingFilm(filmId, newRating).then((msg) => {
        res.json(msg);
    }).catch((err) => {
        res.status(500).send("Database error: " + err);
    });
});

app.put('/updateFavorite/:id',[
    check('favorite').isBoolean()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(422).json({ error: errors.array() });

    const filmId = req.params.id;
    const newFavorite = req.body.favorite;
    updateIsFavoriteFilm(filmId, newFavorite).then((msg) => {
        res.json(msg);
    }).catch((err) => {
        res.status(500).send("Database error: " + err);
    });
});


app.delete('/deleteFilm/:id', (req, res) => {
    const filmId = req.params.id;
    deleteFilm(filmId).then((msg) => {
        res.json(msg);
    }).catch((err) => {
        res.status(500).send("Database error: " + err);
    });
});

app.listen(3000, () => { console.log("Running!") })
