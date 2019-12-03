import React , {Component} from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing/Landing';
import Quiz from './Quiz/Quiz'
import Header from './Header/Header';
import Vocabulary from './Vocabulary/Vocabulary';
import { Container } from 'semantic-ui-react'


class App extends Component {
     
     componentDidMount() {
        this.props.fetchUser();
        this.props.fetchQuestions();
    }

    render() {
        return (
            <Container>
            <BrowserRouter>
                    <Header></Header>
                    <Route 
                        exact path="/"
                        render={(props) => <Landing /> }
                        >
                    </Route>

                    <Route 
                        exact path="/train"
                        render={(props) => <Vocabulary /> }
                        >
                    </Route>

                    <Route 
                        exact path="/quiz"
                        render={(props) => <Quiz /> }
                        >
                    </Route>
            </BrowserRouter>
            </Container>
       );
    };

}

// Actions are assigned to App component as a props
export default connect(null , actions)(App);