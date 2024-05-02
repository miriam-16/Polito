import dayjs from 'dayjs';

function printAll(array) {
    return array.forEach((x) => console.log(`${x}`))
}

function Film(id, title, pid = 1, rating = -1, favorite = false, date = null) {
    this.id = id;
    this.title = title;
    this.pid = pid;
    this.favorite = favorite;
    this.date = dayjs(date);
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


export {Film, FilmLibrary}