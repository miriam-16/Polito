import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import QuestionComponent from './components/Question';
import {Question, Answer} from './QAModels.mjs';
import { Answers } from './components/AnswerComponents';
import {Like} from './components/Like';
import { useState } from 'react';

const fakeQuestion = new Question(1, 'What is your name?', 'juan@polito.it', '2024-02-07')
fakeQuestion.init();

function App() {
  const [question, setQuestion] = useState({
    id: fakeQuestion.id, 
    text: fakeQuestion.text, 
    email: fakeQuestion.email, 
    date:fakeQuestion.date, 
  });


  const [answers, setAnswers] = useState(
    fakeQuestion.getAnswers()

  );

  const [likes, setLikes] = useState(0);
  
  const increaseLikes = () => {setLikes(likes+1)};

  const deleteAnwers = (id) => {setAnswers(oldAnswers => oldAnswers.filter((a) => (a.id != id)))}
  
/*   const voteUp = (id) => {
    setAnswers(oldAnswers => oldAnswers.map(a => {
      if(a.id==id){
        return {...a, score:a.score+1}
      }else{ 
        return a
      }
    }))
  } */

  const voteUp = id => {setAnswers(oldAnswers => oldAnswers.map(a => a.id==id ? {...a, score:a.score+1} : a))}

  return (
    <Container>
      <NavigationBar qtnnumber={1} />
      <QuestionComponent likes={likes} increaseLikes = {increaseLikes} qtnnumber={fakeQuestion.id} question={fakeQuestion.text} email={fakeQuestion.email}></QuestionComponent>
      <Answers answers={answers} deleteAnswer={props.deleteAnswer} voteUp={props.voteUp}></Answers>
      <Like likes={likes}></Like>
    </Container>
  )
}

export default App