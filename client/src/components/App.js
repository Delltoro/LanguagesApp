import React , {Component} from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route , Link } from 'react-router-dom';

import { getQuestion , getQuestions } from '../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }
    componentDidMount = async () => {
        //await this.props.getQuizes();
    }

    render() {
        return (
            <div>123</div>
        );
    };

}

const mapStateToProps = state => {
    return { questions: state.questions }
}

export default connect(mapStateToProps , { getQuestion , getQuestions })(App);