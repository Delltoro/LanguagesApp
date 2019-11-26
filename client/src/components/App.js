import React , {Component} from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing';
import Quiz from './Quiz/Quiz'
import Header from './Header';
import Vocabulary from './Vocabulary';


class App extends Component {
     
     componentDidMount() {
        this.props.fetchUser();
        this.props.fetchQuestions();
    }

    render() {
        return (
            <div className="container">
            <BrowserRouter>
                <div>
                    <Header style={{marginTop: '2rem'}}></Header>
                    <Route exact path="/" component={Landing}></Route>
                    <Route path="/train" component={Vocabulary}></Route>
                    <Route path="/quiz" component={Quiz} ></Route>
                </div>
            </BrowserRouter>
            </div>
       );
    };

}

// Actions are assigned to App component as a props
export default connect(null , actions)(App);