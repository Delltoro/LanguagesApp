import React , {Component} from 'react';
import { Wrapper , Question , Answer , Answers , listyle} from './style';
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
                    <li key={t.id} style={listyle}>
                        <Question>
                            {t.questionText}
                        </Question>
                        <Answers>
                            {t.answers.map( (a , index) => 
                                    <Answer key={index} value={a} onClick={(e) => {
                                        console.log(typeof(index));
                                        console.log(`Number 1 (value) + Number 1 (index) = ${t.correctAnswer + index}`)
                                        if(Number(index + 1) === t.correctAnswer) {
                                            alert(`Congratulations u gained ${t.pointsForCorrectAnswer} experience !`)
                                        } else { alert(`Not good :()`)}
                                    }}>
                                        {a}
                                    </Answer>)}
                            </Answers>
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

