import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import QuestionComponent from './components/Question';
import {Question, Answer} from './QAModels.mjs';
import { Answers } from './components/AnswerComponents';
import {Like} from './components/Like';

const fakeQuestion = new Question(1, 'What is your name?', 'juan@polito.it', '2024-02-07')
fakeQuestion.init();

function App() {

  const [likes, setLikes] = useState(0);
  const increaseLikes = () => {setLikes(likes+1)};
  return (
    <Container>
      <NavigationBar qtnnumber={1} />
      <QuestionComponent likes={likes} increaseLikes = {increaseLikes} qtnnumber={fakeQuestion.id} question={fakeQuestion.text} email={fakeQuestion.email}></QuestionComponent>
      <Answers answers={fakeQuestion.getAnswers()}></Answers>
      <Like likes={likes}></Like>
    </Container>
  )
}

export default App