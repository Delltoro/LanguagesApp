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
                         path = "grammar/sein"
                    >
                    </Card>
        </Jumbotron>
        );
    } 

}

export default Grammar;