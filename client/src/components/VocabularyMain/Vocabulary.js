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
                    >
                    </Card>
                    <Card 
                        textTitle   = "Rodzina"
                        textContent = "Poznaj nazwy czlonkow rodziny"
                        source = "/static/family.jpg"
                        path = "vocabulary/family"
                        >
                    </Card>
                    <Card 
                        textTitle   = "Czesci ciala"
                        textContent = "Poznaj nazwy części ciała"
                        source = "/static/cialo.jpg"
                        path = "vocabulary/body"
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
