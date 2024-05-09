import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

function FilmForm(props){
    const [title, setTitle] = useState('');
    const [favorite, setFavorite] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); //to remove refreshing of page at submit click
        const film = {title, favorite, date, rating};
        props.addFilm(film);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-2'>
                <Form.Label>
                    Title
                </Form.Label>
                <Form.Control type='text' required={true} minLength={2} value={title} onChange={(event)=>setTitle(event.target.value)}>
                </Form.Control>
            </Form.Group>

             <Form.Group className='mb-2'>
                <Form.Label>
                    Favorite
                </Form.Label>
                <Form.Control type='text' minLength={2} value={favorite} onChange={(event)=>setFavorite(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='mb-2'>
                <Form.Label>
                    Date
                </Form.Label>
                <Form.Control type='date' minLength={2} value={date} onChange={(event)=>setDate(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='mb-2'>
                <Form.Label>
                    Rating
                </Form.Label>
                <Form.Control type='number' required={true} min={0} max={5} value={rating} onChange={(event)=>setRating(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant='primary' type='Submit'>Add</Button>{''}
            <Button variant='danger' onClick={props.cancel} type='Submit'>Cancel</Button>
        </Form>
    )
}

export {FilmForm};