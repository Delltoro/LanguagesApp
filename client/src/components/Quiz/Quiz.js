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
            <div style={{marginBottom: '4em', width: '50%'}}>
                <h6 style={{color: 'black',fontWeight: 'bold', textAlign: 'center'}}>{que.questionText}</h6>
                <ul style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <li>{que.answers[0]}</li>
                    <li>{que.answers[1]}</li>
                    <li>{que.answers[2]}</li>
                    <li>{que.answers[3]}</li>
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
            <Jumbotron style={{display: 'flex' , justifyContent: 'center' , minHeight: '60vh'}}>
                <ul>
                    {questions}
                </ul>
                <Card style={{ width: '35rem', maxHeight: '40rem' }}> 
                    <Card.Body style={{display: 'flex' , justifyContent: 'center' }}>
                        <Quizz quiz={quiz1} className={bg}></Quizz>
                    </Card.Body>
                </Card>

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