import React from 'react';

import Card from '../Card/Card.jsx';
import { Jumbotron } from 'react-bootstrap';

const Vocabulary = () => {

    return (
    <Jumbotron style={{display: 'flex' , justifyContent: 'space-around'}}>
        <Card 
        textTitle   = "Numbers !"
        textContent = "Naucz sie liczyc po niemiecku ! ;)"
        source = "/static/numbers.jpg"
        >
        </Card>

        <Card 
            textTitle   = "Rodzina"
            textContent = "Poznaj nazwy czlonkow rodziny"
            source = "/static/family.jpg"
            >
        </Card>

        <Card 
            textTitle   = "Czesci ciala"
            textContent = "ram pma pam pam pam pam"
            source = "/static/cialo.jpg"
            >
        </Card>
        
    </Jumbotron>
    );
};

export default Vocabulary;