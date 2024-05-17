import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';

function FilmPage(props) {
    const navigate = useNavigate();

    const handleEditFilm = (film) => {
        navigate(`/edit-film/${film.id}`);
    };

    return (
        <ListGroup id="films-list" variant="flush">
            {props.films.map((film) => (
                <FilmInList
                    key={film.id}
                    filmData={film}
                    onEdit={() => handleEditFilm(film)}
                />
            ))}
        </ListGroup>
    );
}

FilmPage.propTypes = {
    films: PropTypes.array.isRequired,
    addFilm: PropTypes.func.isRequired,
    editFilm: PropTypes.func.isRequired,
};

function FilmInList({ filmData, onEdit }) {
    return (
        <ListGroupItem>
            <Row className="gy-2">
                <Col xs={6} xl={3} className="favorite-title d-flex gap-2 align-items-center">
                    {filmData.title}
                    <div className="d-xl-none actions">
                        <FilmIcons filmData={filmData} onEdit={onEdit} />
                    </div>
                </Col>
                <Col xs={6} xl={3} className="text-end text-xl-center">
                    <span className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" checked={filmData.favorite} disabled={true} />
                        <label className="custom-control-label">Favorite</label>
                    </span>
                </Col>
                <Col xs={4} xl={3} className="text-xl-center">
                    {filmData.watchDate ? dayjs(filmData.watchDate).format('MMMM D, YYYY') : ''}
                </Col>
                <Col xs={8} xl={3} className="actions-container text-end">
                    <div className="rating">
                        <Rating rating={filmData.rating} maxStars={5} />
                    </div>
                    <div className="d-none d-xl-flex actions">
                        <FilmIcons filmData={filmData} onEdit={onEdit} />
                    </div>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

FilmInList.propTypes = {
    filmData: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};

function FilmIcons({ filmData, onEdit }) {
    return (
        <>
            <i className="bi bi-pencil" onClick={onEdit} />
            <i className="bi bi-trash" />
        </>
    );
}

FilmIcons.propTypes = {
    filmData: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};

function Rating({ maxStars, rating }) {
    return [...Array(maxStars)].map(
        (el, index) => <i key={index} className={(index < rating) ? "bi bi-star-fill" : "bi bi-star"} />);
}

Rating.propTypes = {
    maxStars: PropTypes.number.isRequired,
};


export default FilmPage;
