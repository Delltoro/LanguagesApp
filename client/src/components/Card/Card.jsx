import React  from 'react';
import { Button, Jumbotron, Card as BootstrapCard } from 'react-bootstrap';
import { addButtonStyle , addImageStyle ,addCardStyle , addTextStyle , addHeaderStyle} from './style';

const Card = (props) => {
    console.log(props);
   return (
        <BootstrapCard style={addCardStyle}>
            <BootstrapCard.Img style={addImageStyle}  variant="top" src={`${props.source}`} />
            <BootstrapCard.Body>
            <BootstrapCard.Title style={addHeaderStyle}>{props.textTitle}</BootstrapCard.Title>
            <BootstrapCard.Text style={addTextStyle}> {props.textContent}</BootstrapCard.Text>
            <Button style={addButtonStyle} variant="primary">Przejdz</Button>
            </BootstrapCard.Body>
            </BootstrapCard>
   )
}

export default Card;