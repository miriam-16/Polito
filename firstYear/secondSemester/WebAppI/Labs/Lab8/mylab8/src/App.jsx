import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { INITIAL_FILMS } from "./films.mjs";

import dayjs from 'dayjs';
import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from "./components/Header.jsx";
import FilmLibraryLayout from './components/FilmLibraryLayout.jsx';
import FilmForm from './components/FilmForm.jsx';

function App() {
    const filters = {
        'filter-all': { label: 'All', id: 'filter-all', filterFunction: () => true },
        'filter-favorite': { label: 'Favorites', id: 'filter-favorite', filterFunction: film => film.favorite },
        'filter-best': { label: 'Best Rated', id: 'filter-best', filterFunction: film => film.rating >= 5 },
        'filter-lastmonth': {
            label: 'Seen Last Month',
            id: 'filter-lastmonth',
            filterFunction: film => {
                if (!film?.watchDate) return false;
                const diff = film.watchDate.diff(dayjs(), 'month');
                return diff <= 0 && diff > -1;
            }
        },
        'filter-unseen': { label: 'Unseen', id: 'filter-unseen', filterFunction: film => !film?.watchDate }
    };

    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [films, setFilms] = useState(INITIAL_FILMS);
    const navigate = useNavigate();

    const saveNewFilm = (newFilm) => {
        const newFilmId = Math.max(...films.map(film => film.id)) + 1;
        newFilm.id = newFilmId;
        setFilms((films) => [...films, newFilm]);
        navigate('/');
    };

    const updateFilm = (film) => {
        setFilms(oldFilms => oldFilms.map(f => (film.id === f.id ? film : f)));
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />
            <Routes>
                <Route path="/" element={<Navigate to="/filter-all" />} />
                <Route path="/:filter/*" element={<FilmLibraryLayout filters={filters} films={films} isSidebarExpanded={isSidebarExpanded} />} />
                <Route path="/add-film/*" element={<FilmForm addFilm={saveNewFilm} />} />
                <Route path="/edit-film/:id/*" element={<FilmLibraryLayout filters={filters} films={films} isSidebarExpanded={isSidebarExpanded} editFilm={updateFilm} />} />
            </Routes>
        </div>
    );
}

export default App;
