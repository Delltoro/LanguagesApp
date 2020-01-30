import React from 'react'
import { Button, Jumbotron, Card as BootstrapCard } from 'react-bootstrap';
import Card from '../Card/Card.jsx';


class Texts extends React.Component {


    render() {
        return (
            <Jumbotron>
                     <Card 
                         textTitle   = "Meine Familie!"
                         textContent = "Poznaj moją rodzinę"
                         source = "/static/family.jpg"
                         path = "texts/1"
                    >
                    </Card>           
            </Jumbotron>
        );
    }
}

export default Texts;