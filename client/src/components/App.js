import React , {Component} from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing/Landing';
import Quiz from './Quiz/Quiz'
import Header from './Header/Header';
import Vocabulary from './VocabularyMain/Vocabulary';
import Grammar from './GrammarMain/Grammar';
import Texts from './TextsMain/Texts';
import Text from './TextsMain/Text';
import { Container } from 'semantic-ui-react'
import SelectedVocabulary from './SelectedVocabulary/SelectedVocabulary'
import SelectedGrammar from './SelectedGrammar/SelectedGrammar';
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
                        render={() => <Landing /> }
                    ></Route>

                    <Route 
                        exact path="/train"
                        render={() => <Vocabulary /> }
                    ></Route>

                    <Route 
                        exact path="/quiz"
                        render={() => <Quiz /> }
                    ></Route>

                    <Route 
                        exact path="/grammar"
                        render={() => <Grammar /> }
                    ></Route>

                    <Route 
                        exact path="/texts"
                        render={() => <Texts /> }
                    ></Route>

                    <Route 
                        exact path="/vocabulary/numbers"
                        render={(props) => <SelectedVocabulary {...props} id={"5df16446e7835725d82b7be2"} />}
                    ></Route>

                    <Route 
                        exact path="/vocabulary/body"
                        render={(props) => <SelectedVocabulary {...props} id={"5df18a72830313462cd8145a"} />}
                    ></Route>

                    <Route 
                        exact path="/vocabulary/family"
                        render={(props) => <SelectedVocabulary {...props} id={"5e31d3242fb92a0d04065c78"} />}
                    ></Route>
                    
                    <Route 
                        exact path="/grammar/sein"
                        render={(props) => <SelectedGrammar {...props} id={""} />}
                    ></Route>


                    <Route
                        exact path="/texts/1"
                        component={Text}
                    ></Route>
            </BrowserRouter>
            </Container>
       );
    }

}

// Actions are assigned to App component as a props
export default connect(null , actions)(App);