import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function FilmForm({ film, addFilm, editFilm, cancel }) {
  const [title, setTitle] = useState(film ? film.title : '');
  const [favorite, setFavorite] = useState(film ? film.favorite : false);
  const [watchDate, setWatchDate] = useState(film ? film.watchDate : '');
  const [rating, setRating] = useState(film ? film.rating : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFilm = { ...film, title, favorite, watchDate, rating };
    if (film) {
      editFilm(updatedFilm);
    } else {
      addFilm(updatedFilm);
    }
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formFavorite">
        <Form.Check
          type="checkbox"
          label="Favorite"
          checked={favorite}
          onChange={(e) => setFavorite(e.target.checked)}
        />
      </Form.Group>
      <Form.Group controlId="formWatchDate">
        <Form.Label>Watch Date</Form.Label>
        <Form.Control
          type="date"
          value={watchDate}
          onChange={(e) => setWatchDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min={0}
          max={5}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {film ? 'Edit Film' : 'Add Film'}
      </Button>
      <Button variant="secondary" onClick={cancel}>
        Cancel
      </Button>
    </Form>
  );
}

FilmForm.propTypes = {
  film: PropTypes.object,
  addFilm: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default FilmForm;
