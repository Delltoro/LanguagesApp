import React , {Component} from 'react';
import { Wrapper , Question , Answer , Answers} from './style';
import { connect } from 'react-redux';

class Quiz extends Component {

    handleCheck(e , correct) {
        alert(`You choose ${e.target.value} , correct answer is ${correct}`);
    }

    render() {
        return(
            <Wrapper>
                <ul>
                    {this.props.questions.map( t => 
                    <li key={t.id}>
                        <Question>
                            {t.questionText}
                            <Answers>
                            {t.answers.map( a => 
                                    <Answer value={a} onClick={(e) => {
                                        alert(`You choose ${e.target.value} , correct answer is ${t.correctAnswer}`);
                                        if(e.target.value === t.correctAnswer) {

                                        }
                                    }}>
                                        {a}
                                    </Answer>)}
                            </Answers>
                        </Question>
                    </li>)}
                </ul>
            </Wrapper>
        );
    }

}


function mapStateToProps( state ) {
    console.log(state);
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Quiz);

