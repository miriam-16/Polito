import "bootstrap/dist/css/bootstrap.min.css";
import { Film, FilmLibrary } from "./FilmModel.mjs";
import NavBar from "./components/NavBar";
import dayjs from "dayjs";
import { useState } from "react";
import { Container } from "react-bootstrap";


function App() {
  const [count, setCount] = useState(0);

  const f1 = new Film(1, "Pulp Fiction", 1, 5, true, dayjs("2024-03-10"));
  const f2 = new Film(2, "21 Grams", 1, 4, true, dayjs("2024-03-17"));
  const f3 = new Film(3, "Star Wars", 1, 0);
  const f4 = new Film(4, "Matrix", 1, 0);
  const f5 = new Film(5, "Shrek", 1, 3, undefined, dayjs("2024-03-21"));

  const listFilms = new FilmLibrary();
  listFilms.addNewFilm(f1);
  listFilms.addNewFilm(f2);
  listFilms.addNewFilm(f3);
  listFilms.addNewFilm(f4);
  listFilms.addNewFilm(f5);

  return (
    <Container>
      <NavBar />
    </Container>

  )
}

export default App;
