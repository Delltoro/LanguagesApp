import React from 'react'
import Card from '../Card/Card.jsx';
import { Jumbotron } from 'react-bootstrap';

class Grammar extends React.Component {


    render() {
        return (
            <Jumbotron style={{display: 'flex' , justifyContent: 'space-around'}}>
                    <Card 
                         textTitle   = "Odmiana Ich"
                         textContent = "Naucz sie odmieniać być po niemiecku ! ;)"
                         source = "/static/ich.jpg"
                         path = "grammar/bin"
                    >
                    </Card>
                    <Card 
                        textTitle   = "Odmiana haben"
                        textContent = "Poznaj nazwy czlonkow rodziny"
                        source = "/static/haben.jpg"
                        path = "grammar/habe"
                        >
                    </Card>
                    <Card 
                        textTitle   = "Odmiana schreiben"
                        textContent = "Poznaj nazwy części ciała"
                        source = "/static/schreiben.jpg"
                        path = "grammar/schreiben"
                        >
                    </Card>
        </Jumbotron>
        );
    } 

}

export default Grammar;