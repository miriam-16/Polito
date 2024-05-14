/*
 * 01UDFOV Applicazioni Web I / 01TXYOV Web Applications I
 * Lab 6 - 2024
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { INITIAL_FILMS, Film } from "./films.mjs";

import dayjs from 'dayjs';

import { useState } from 'react';
import { Button, Collapse, Col, Container, Row } from 'react-bootstrap/';
import Filters from './components/Filters';
import Header from "./components/Header.jsx";
import FilmList from "./components/FilmList.jsx";
import { FilmForm } from './components/FilmForm.jsx';
import { propTypes } from 'react-bootstrap/esm/Image.js';

function App() {
    // This state contains the active filter
    const [activeFilter, setActiveFilter] = useState('filter-all');

    // This is not optimal - better ways will be introduced in the upcoming labs

    // This state controls the expansion of the sidebar (on small breakpoints only)
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const [films, setFilms] = useState(
        INITIAL_FILMS
    );

    const [mode, setMode] = useState('default');

    /**
     * Defining a structure for Filters
     * Each filter is identified by a unique name and is composed by the following fields:
     * - A label to be shown in the GUI
     * - An ID (equal to the unique name), used as key during the table generation
     * - A filter function applied before passing the films to the FilmTable component
    */
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

    const visibleFilms = films.filter(filters[activeFilter].filterFunction);


    const addFilm = (film) => {
        setFilms((oldFilms) => {
            const newId = Math.max(...oldFilms.map(ans => ans.id)) + 1;
            const newFilm = new Film(newId, film.title, film.favorite, film.date, film.rating);
            console.log(newFilm);
            return [...oldFilms, newFilm];
        })
    }

    const updateFilm = (film) => {
        setFilms(oldFilm => {
            return oldFilm.map((f) => {
                console.log("Enter updateFilm");
                if (f.id === film.id) {
                    console.log("f.id===film.id")
                    return new Film(film.id, film.title, film.favorite, film.date, film.rating);
                }
                else
                    return f;
            });
        });
    }



    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />

            {/* Main */}
            <Container fluid className="flex-grow-1 d-flex flex-column">
                <Row className="flex-grow-1">
                    <Collapse id="films-filters" in={isSidebarExpanded} className="col-md-3 bg-light d-md-block">
                        <div className="py-4">
                            <h5 className="mb-3">Filters</h5>
                            <Filters items={filters} selected={activeFilter} onSelect={setActiveFilter} />
                        </div>
                    </Collapse>
                    <Col md={9} className="pt-3">
                        <h1><span id="filter-title">{filters[activeFilter].label}</span> films</h1>
                        <FilmList films={visibleFilms} updateFilm={updateFilm} />
                        {mode === 'add' && <FilmForm addFilm={addFilm} cancel={() => setMode('default')}></FilmForm>}
                        {mode === 'edit' && <FilmForm cancel={() => setMode('default')}></FilmForm>}
                    </Col>
                </Row>
                {mode !== 'add' && (
                    <Button
                        variant="primary"
                        className="rounded-circle fixed-right-bottom"
                        onClick={() => { setMode('add'); }}
                    >
                        <i className="bi bi-plus"></i>
                    </Button>
                )}
            </Container>
        </div>);
}

export default App;
