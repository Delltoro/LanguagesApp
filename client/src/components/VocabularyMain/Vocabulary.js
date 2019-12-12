import React , {Component} from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import { Jumbotron } from 'react-bootstrap';

class Vocabulary extends Component {


    render() {
        return (
            <Jumbotron style={{display: 'flex' , justifyContent: 'space-around'}}>
                    <Card 
                         textTitle   = "Liczby 0 - 10 !"
                         textContent = "Naucz sie liczyc po niemiecku ! ;)"
                         source = "/static/numbers.jpg"
                         path = "vocabulary/numbers"
                         vocabulary = {this.props.vocabulary}
                    >
                    </Card>
                   
                    <Card 
                        textTitle   = "Rodzina"
                        textContent = "Poznaj nazwy czlonkow rodziny"
                        source = "/static/family.jpg"
                        path = "vocabulary/family"
                        vocabulary = {this.props.vocabulary}
                        >
                    </Card>
            
                    <Card 
                        textTitle   = "Czesci ciala"
                        textContent = "ram pma pam pam pam pam"
                        source = "/static/cialo.jpg"
                        path = "vocabulary/body"
                        vocabulary = {this.props.vocabulary}
                        >
                    </Card>
        </Jumbotron>
        );
    } 
    
};

function mapStateToProps( state ) {
    return {
        vocabulary: state.vocabulary
    }
}

export default connect(mapStateToProps)(Vocabulary);
