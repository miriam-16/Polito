import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

function AnswerForm(props){
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');


    return(
        <Form>
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
                <Form.Control type='text' required={true} minLength={2} value={date} onChange={(event)=>setDate(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant='primary' type='Submit'>Add</Button>{''}
            <Button variant='danger' type='Submit'>Cancel</Button>
        </Form>
    )
}

export { AnswerForm }