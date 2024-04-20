'use strict';

document.addEventListener('DOMContentLoaded', event => {
    console.log("Page loaded")
    const filmTable = document.getElementById("film-table")
    const films = loadFilms()
    
    for(const film of films.list){
        console.log(film);
        const tr = document.createElement("tr");
        filmTable.appendChild(tr);
        let fullStars = `<button class="btn" type="button"><i class="bi bi-star-fill"></i></button>`;
        let emplyStars = `<button class="btn" type="button"><i class="bi bi-star"></i></button>`;

        let template =  `<td>${film.title}</td>
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" ${film.favorite ? 'checked' : ''}>
                <label class="form-check-label" for="flexCheckChecked">
                    Favorite
                </label>
            </div>
        </td>
        <td>${film.date != null ? film.date.format("YYYY-MM-DD") : ''}</td>`;

        template += `
        <td>
            <div class="d-grid d-md-block">
                ${fullStars.repeat(film.rating)}
                ${emplyStars.repeat(5-film.rating)}
            </div>
        </td>
        <td>
            <button type="button" class="btn"><i class="bi bi-pencil"></i></button> 
            <button type="button" class="btn"><i class="bi bi-trash3"></i></button> 
        </td>`
        tr.innerHTML = template;
    }
    
})

function Film(id, title, pid = 1, rating = -1, favorite = false, date = null) {
    this.id = id;
    this.title = title;
    this.pid = pid;
    this.favorite = favorite;
    this.date = date;
    this.rating = rating;

    this.toString = () => {
        return `Id: ${this.id}, ` +
            `Title: ${this.title}, Favorite: ${this.favorite}, ` +
            `Watch date: ${this.date.format('YYYY-MM-DD')}, Score: ${this.rating}, ` +
            `User: ${this.pid}`;
    }
}

function FilmLibrary() {
    this.list = [];
    this.addNewFilm = (film) => { this.list.push(film) };
}

function loadFilms(){
    const f1 = new Film(1, 'Pulp Fiction', 1, 5, true, dayjs('2024-03-10'));
    const f2 = new Film(2, '21 Grams', 1, 4, true, dayjs('2024-03-17'));
    const f3 = new Film(3, 'Star Wars', 1, 0);
    const f4 = new Film(4, 'Matrix', 1, 0);
    const f5 = new Film(5, 'Shrek', 1, 3, undefined, dayjs('2024-03-21'));

    const listFilms = new FilmLibrary();
    listFilms.addNewFilm(f1);
    listFilms.addNewFilm(f2);
    listFilms.addNewFilm(f3);
    listFilms.addNewFilm(f4);
    listFilms.addNewFilm(f5);
    return listFilms;
}