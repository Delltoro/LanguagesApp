import React , {Component} from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing/Landing';
import Quiz from './Quiz/Quiz'
import Header from './Header/Header';
import Vocabulary from './VocabularyMain/Vocabulary';
import { Container } from 'semantic-ui-react'
import SelectedVocabulary from './SelectedVocabulary/SelectedVocabulary'

class App extends Component {
     
     componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Container>
            <BrowserRouter>
                    <Header></Header>
                    <Route 
                        exact path="/"
                        render={(props) => <Landing /> }
                    ></Route>

                    <Route 
                        exact path="/train"
                        render={(props) => <Vocabulary /> }
                    ></Route>

                    <Route 
                        exact path="/quiz"
                        render={(props) => <Quiz /> }
                    ></Route>

                    <Route 
                        exact path="/vocabulary/numbers"
                        component={SelectedVocabulary}
                    ></Route>
                

            </BrowserRouter>
            </Container>
       );
    };

}

// Actions are assigned to App component as a props
export default connect(null , actions)(App);