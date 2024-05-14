import 'dayjs';
import { Col, Row } from 'react-bootstrap/';

import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons"

function FilmList(props) {
    const { films } = props;

    return (<ListGroup id="films-list" variant="flush">
        {films.map((film) => <FilmInList filmData={film} key={film.id} updateFilm={props.updateFilm} />)}
    </ListGroup>
    );
}

FilmList.propTypes = {
    films: PropTypes.array.isRequired,
};

function FilmInList(props) {

    return (
        <ListGroupItem>
            <Row className="gy-2">

                <Col xs={6} xl={3} className="favorite-title d-flex gap-2 align-items-center">
                    {props.filmData.title}
                    <div className="d-xl-none actions">
                        <i className="bi bi-pencil"></i>
                        <i className="bi bi-trash"></i>
                    </div>
                </Col>
                <Col xs={6} xl={3} className="text-end text-xl-center">
                    <span className="custom-control custom-checkbox">
                        <span className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" defaultChecked={props.filmData.favorite} />
                            <label className="custom-control-label">Favorite</label>
                        </span>
                    </span>
                </Col>

                <Col xs={4} xl={3} className="text-xl-center">
                    {props.filmData.formatWatchDate()}
                </Col>
                <Col xs={8} xl={3} className="actions-container text-end">
                    <div className="rating">
                        <Rating rating={props.filmData.rating} maxStars={5} />
                    </div>
                    <div className="d-none d-xl-flex actions">
                        <Button variant='primary' onClick={() => updateFilm}><Pencil /></Button>
                        <Button variant='danger'><Trash /></Button>
                    </div>
                </Col>
            </Row></ListGroupItem>

    );
}

FilmInList.propTypes = {
    filmData: PropTypes.object.isRequired,
};

function Rating({ maxStars, rating }) {
    return [...Array(maxStars)].map(
        (el, index) => <i key={index} className={(index < rating) ? "bi bi-star-fill" : "bi bi-star"} />);
}

Rating.propTypes = {
    maxStars: PropTypes.number.isRequired,
};


export default FilmList;
