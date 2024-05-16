import { Collapse, Col, Container, Row } from 'react-bootstrap/';
import Filters from './Filters';
import FilmPage from './FilmPage';
import { Route, Routes } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

function FilmLibraryLayout(props) {

    const { filter } = useParams();
    const navigate = useNavigate();
    const activeFilter = props.filters[filter] ? filter : 'filter-all';

    const setActiveFilter = (filterName) => {
        navigate(`/${filterName}`);
    };


    return (
        <Container fluid className="flex-grow-1 d-flex flex-column">
            <Row className="flex-grow-1">
                <Collapse id="films-filters" in={props.isSidebarExpanded} className="col-md-3 bg-light d-md-block">
                    <div className="py-4">
                        <h5 className="mb-3">Filters</h5>
                        <Filters items={props.filters} selected={activeFilter} onSelect={setActiveFilter} />
                    </div>
                </Collapse>
                <Col md={9} className="pt-3">
                    <h1><span id="filter-title">{props.filters[activeFilter].label}</span> films</h1>
                    <FilmPage
                        films={props.films.filter(props.filters[activeFilter].filterFunction)}
                        addFilm={() => saveNewFilm}
                        editFilm={() => updateFilm}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default FilmLibraryLayout;