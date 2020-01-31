import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Jumbotron , Card , Spinner } from 'react-bootstrap';
import Quizz from 'react-quiz-component';
import bg from './style.css'
import { fetchQuizes, fetchQuestions } from '../../actions/index'
class Quiz extends Component {

    componentDidMount(){
      this.props.fetchQuizes();
      this.props.fetchQuestions();
  }
  
  getList() {
    let questions;
    if (this.props.questions) {
     questions = this.props.questions.map( (que) => {
        return (
            <div style={{marginBottom: '2em',paddingBottom: '2em', width: '60%', borderBottom: '6px groove rgba(214, 48, 49,0.41)'}}>
                <h6 style={{color: 'black',fontWeight: 'bold', textAlign: 'left'}}>{que.questionText}</h6>
                <ul>
                    <li>1 {'\u15CE'}  {que.answers[0]}</li>
                    <li>2 {'\u15CE'}  {que.answers[1]}</li>
                    <li>3 {'\u15CE'}  {que.answers[2]}</li>
                    {console.log(typeof(que.answers[3]))}
                    {que.answers[3] !== undefined &&
                    <li>4 {'\u15CE'}  {que.answers[3]}</li>
                    }
                    <li>Poprawna odpowiedź: {que.correctAnswer}</li>
                    <li>Punkty za poprawną odpowiedź: {que.pointsForCorrectAnswer}</li>
                </ul>
            </div>
        );
      })
    } else {
      questions =
        <Spinner animation="border" role="status">
             <span className="sr-only">Loading...</span>
        </Spinner>
    }
    return questions;
}

   render() {
     let questions;
     if(this.props.questions) {
        questions = this.getList();
     }
      return (
            <Jumbotron style={{display: 'flex'}}>
                <div>
                   <h3>BAZA PYTAŃ APLIKACJI</h3>                
                   {questions}
                </div>
                <div>
                <Card style={{ width: '35rem', maxHeight: '40rem' }}> 
                    <Card.Body style={{display: 'flex' , justifyContent: 'center' }}>
                        <Quizz quiz={quiz1} className={bg}></Quizz>
                    </Card.Body>
                </Card>
                </div>
            </Jumbotron>
            )
   }

}

const mapDispatchToProps = dispatch => ({
  fetchQuizes: ()  => dispatch(fetchQuizes()),
  fetchQuestions: () => dispatch(fetchQuestions())
});

function mapStateToProps({ quizes  , questions }) {
  return {
           quizes: quizes,
           questions: questions
        };
}

export default connect(mapStateToProps, mapDispatchToProps )(Quiz);

function QuestionObject(question, answers, correctAnswer , point) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}



let quiz1 =  {

  "appLocale": {
      "landingHeaderText": "<questionLength> Pytania",
      "question": "Pytanie",
      "startQuizBtn": "Rozpocznij Quiz",
      "resultFilterAll": "All",
      "resultFilterCorrect": "Poprawna",
      "resultFilterIncorrect": "Niepoprawna",
      "nextQuestionBtn": "Następne",
      "resultPageHeaderText": "Uzyskałeś <correctIndexLength> z <questionLength> punktów."
    } ,

  "quizTitle": `Verb Quiz  `,
  "questions": [
    {
      "question": "Pracować",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "kriegen",
        "decken",
        "geben",
        "arbeiten"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "point": "1"
    },
   
    {
      "question": "Dostawać, otrzymywać",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
          "kriegen",
          "decken",
          "geben",
          "enden"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "point": "1"
    },

    {
      "question": "Brać przysnic",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
          "chatten",
          "dauern",
          "enden",
          "duschen"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "point": "1"
    },

  ]
} 