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
}

const f1 = new Film(1,'Pulp Fiction',1, true,'2024-03-10',5);
const f2 = new Film(2,'21 Grams',1,true,'2024-03-17',4);
const f3 = new Film(3,'Star Wars',1,null,null,0);
const f4 = new Film(4,'Matrix',1,null,null,0);
const f5 = new Film(5, 'Shrek',1, null, '2024-03-21', 3);

const listFilms = new FilmLibrary();
listFilms.addNewFilm(f1);
listFilms.addNewFilm(f2);
listFilms.addNewFilm(f3);
listFilms.addNewFilm(f4);
listFilms.addNewFilm(f5);

for(const f of listFilms.list){
    console.log(f);
}