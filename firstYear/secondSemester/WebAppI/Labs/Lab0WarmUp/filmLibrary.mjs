function Film(id, title, pid=1, rating = -1, favorite = false , date = null){
    this.id = id;
    this.title = title;
    this.pid = pid;
    this.favorite = favorite;
    this. date = date;
    this.rating = rating;
}

function FilmLibrary(){
    this.list  = [];
    this.addNewFilm = (film) => {this.list.push(film)};
    this.printFilms = () => {
        for(const f of this.list){
            console.log('---------------')
            console.log('id: %s', f.id)
            console.log('Title: %s', f.title)
            console.log('pId: %i', f.pid)
            console.log('Favorite: ', f.favorite)
            console.log('Date: %s', f.date)
            console.log('Rating: %i', f.rating)
        }
    };
}

const f1 = new Film(1,'Pulp Fiction',1,5, true,'2024-03-10');
const f2 = new Film(2,'21 Grams',1,4, true,'2024-03-17');
const f3 = new Film(3,'Star Wars',1,0);
const f4 = new Film(4,'Matrix',1,0);
const f5 = new Film(5, 'Shrek',1, 3, undefined, '2024-03-21');

const listFilms = new FilmLibrary();
listFilms.addNewFilm(f1);
listFilms.addNewFilm(f2);
listFilms.addNewFilm(f3);
listFilms.addNewFilm(f4);
listFilms.addNewFilm(f5);

listFilms.printFilms();