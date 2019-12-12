import React from 'react';
import { Button, Jumbotron , Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addButtonStyle , addImageStyle ,addCardStyle , addTextStyle , addHeaderStyle , addLinkStyle} from './style';
const Landing = () => (
          <Jumbotron style={{display: 'flex' , justifyContent: 'space-around'}}>
     <Card style={addCardStyle}>
            <Card.Img 
                       style={addImageStyle}
                       variant="top" 
                       src="/static/quiz.jpg" />
      <Card.Body>
        <Card.Title style={addHeaderStyle}>Rozwiaz quiz</Card.Title>
        <Card.Text style={addTextStyle}>
          Wybierz quiz z roznych dzialow tematycznych aby zdobyc nowa wiedzie 
          oraz zwiekszyc twoj poziom zaawansowania ;)
        </Card.Text>
        <Button 
                variant="primary"
                style={addButtonStyle}>
                <Link style={addLinkStyle} to='/quiz'>Przejdz</Link>
                </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
            <Card.Img 
                  style={addImageStyle} 
                  variant="top" 
                  src="/static/words.jpg" />
      <Card.Body>
        <Card.Title style={addHeaderStyle} >Slownictwo</Card.Title>
        <Card.Text style={addTextStyle}>
          Nauka nowych slówek pomoże ci składać bogatsze składniowo zdania ;)
        </Card.Text>
        <Button variant="primary" style={addButtonStyle} >
           <Link style={addLinkStyle} to='/train'>Przejdz</Link>
        </Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
            <Card.Img 
                  style={addImageStyle} 
                  variant="top" 
                  src="/static/grammar.jpg" />
      <Card.Body>
        <Card.Title style={addHeaderStyle} >Gramatyka</Card.Title>
        <Card.Text style={addTextStyle}>
          Gramatyka jest niezbędnym elementem nauki języka obcego, małymi kroczkami 10 minut dziennie wszystko można osiądgnąć
        </Card.Text>
        <Button variant="primary" style={addButtonStyle}>
              <Link style={addLinkStyle} to='/articles'>Przejdz</Link>
        </Button>
      </Card.Body>
    </Card>

    </Jumbotron>
  
)

export default Landing;