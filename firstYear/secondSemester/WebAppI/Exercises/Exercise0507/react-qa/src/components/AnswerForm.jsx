import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import dayjs from 'dayjs';

function AnswerForm(props){
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault(); //to remove refreshing of page at submit click
        const answer = {text, email, date};
        props.addAnswer(answer);
    }

// we put in tag form the function related to submit
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>
                    Text
                </Form.Label>
                <Form.Control type='text' required={true} minLength={2} value={text} onChange={(event)=>setText(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type='email' required={true} minLength={2} value={email} onChange={(event)=>setEmail(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Date
                </Form.Label>
                <Form.Control type='date' required={true} minLength={2} value={date} onChange={(event)=>setDate(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant='primary' type='Submit'>Add</Button>{''}
            <Button variant='danger' onClick={props.cancel} type='Submit'>Cancel</Button>
        </Form>
    )
}

export { AnswerForm }