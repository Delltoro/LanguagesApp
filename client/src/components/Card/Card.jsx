import React  from 'react';
import { Button, Jumbotron, Card as BootstrapCard } from 'react-bootstrap';
import { addButtonStyle , addImageStyle ,addCardStyle , addTextStyle , addHeaderStyle} from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Card = (props) => {
      return (
        <BootstrapCard style={addCardStyle}>
            <BootstrapCard.Img style={addImageStyle}  variant="top" src={`${props.source}`} />
            <BootstrapCard.Body>
            <BootstrapCard.Title style={addHeaderStyle}>{props.textTitle}</BootstrapCard.Title>
            <BootstrapCard.Text style={addTextStyle}> {props.textContent}</BootstrapCard.Text>


            <Link to={{pathname: `/${props.path}`}} >
                  <Button style={addButtonStyle} variant="primary">Przejdz</Button>
            </Link>


            </BootstrapCard.Body>
            </BootstrapCard>
   )
}

function mapStateToProps( state ) {
   return {
       vocabulary: state.vocabulary
   }
}

export default connect(mapStateToProps)(Card);
