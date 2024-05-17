import { Collapse, Col, Container, Row, Button } from 'react-bootstrap/';
import Filters from './Filters';
import FilmPage from './FilmPage';
import FilmForm from './FilmForm';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function FilmLibraryLayout(props) {
    const { filter } = useParams();
    const navigate = useNavigate();
    const [editableFilm, setEditableFilm] = useState(null);

    const activeFilter = props.filters[filter] ? filter : 'filter-all';

    const setActiveFilter = (filterName) => {
        navigate(`/${filterName}`);
    };

    const handleAddFilmClick = () => {
        setEditableFilm(null);
        navigate("/add-film");
    };

    return (
        <>
            <Container fluid className="flex-grow-1 d-flex flex-column">
                <Row className="flex-grow-1">
                    <Collapse id="films-filters" in={props.isSidebarExpanded} className="col-md-3 bg-light d-md-block">
                        <div className="py-4">
                            <h5 className="mb-3">Filters</h5>
                            <Filters items={props.filters} selected={activeFilter} onSelect={setActiveFilter} />
                        </div>
                    </Collapse>
                    <Col md={9} className="pt-3">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <h1><span id="filter-title">{props.filters[activeFilter].label}</span> films</h1>
                                    <FilmPage
                                        films={props.films.filter(props.filters[activeFilter].filterFunction)}
                                        addFilm={(film) => props.addFilm(film)}
                                        editFilm={(film) => props.editFilm(film)}
                                    />
                                </>
                            } />
                            {/*                             <Route path="/add-film" element={
                                <FilmForm
                                    film={editableFilm}
                                    addFilm={(film) => { props.addFilm(film); navigate('/'); }}
                                    editFilm={(film) => { props.editFilm(film); navigate('/'); }}
                                    cancel={() => navigate('/')}
                                />
                            } /> */}
                            <Route path="/edit-film/:id" element={
                                <FilmForm
                                    film={editableFilm}
                                    addFilm={(film) => { props.addFilm(film); navigate('/'); }}
                                    editFilm={(film) => { props.editFilm(film); navigate('/'); }}
                                    cancel={() => navigate('/')}
                                />
                            } />
                        </Routes>
                    </Col>
                </Row>
            </Container>
            <Button variant="primary" className="rounded-circle fixed-right-bottom" onClick={handleAddFilmClick}>
                <i className="bi bi-plus" />
            </Button>
        </>
    );
}

export default FilmLibraryLayout;
