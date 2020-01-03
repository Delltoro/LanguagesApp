import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchQuestions , fetchVocabulary} from '../../actions/index';
import { Jumbotron , Card } from 'react-bootstrap';
import Quizz from 'react-quiz-component';
import bg from './style.css'
class Quiz extends Component {

    componentWillMount(){
        this.props.fetchVocabulary();
        this.props.fetchQuestions();

}

    getList() {
        if(this.props.vocabulary) {
            console.log(this.props.vocabulary);
        }
        if(this.props.questions) {
            console.log(this.props.questions);
        }
        
        return <div>123</div>;
    }

   render() {
       console.log(bg);
        return (
            <Jumbotron style={{display: 'flex' , justifyContent: 'center' , minHeight: '60vh'}}>
            
                <Card style={{ width: '25rem' }}> 
                    <Card.Body style={{display: 'flex' , justifyContent: 'center' }}>
                        <Quizz quiz={quiz1} className={bg}></Quizz>
                    </Card.Body>
                </Card>

            </Jumbotron>
            )
   }
}





const mapDispatchToProps = dispatch => ({
    fetchVocabulary: () => dispatch(fetchVocabulary()),
    fetchQuestions: () => dispatch(fetchQuestions())
});

function mapStateToProps({ questions , vocabulary }) {
    return { 
             vocabulary: vocabulary,
             questions: questions
           };
}

export default connect(mapStateToProps, mapDispatchToProps )(Quiz);

const quiz1 =  {

    "appLocale": {
        "landingHeaderText": "<questionLength> Pytania",
        "question": "Pytanie",
        "startQuizBtn": "Rozpocznij Quiz",
        "resultFilterAll": "All",
        "resultFilterCorrect": "Poprawna",
        "resultFilterIncorrect": "Niepoprawna",
        "nextQuestionBtn": "Następne",
        "resultPageHeaderText": "Ukończyłes quiz. Odpowiedziałeś na  <correctIndexLength> z <questionLength> pytań."
      } ,

    "quizTitle": "Quiz - czasowniki",
    "quizSynopsis": "Przetłumacz czasownik, tylko jedna odpowiedż jest poprawna",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "1"
      },

    ]
  } 

  
const quiz2 =  {
    "quizTitle": "Quiz - części ciała",
    "quizSynopsis": "Przetłumacz czasownik, tylko jedna odpowiedż jest poprawna",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "1"
      },

    ]
  } 