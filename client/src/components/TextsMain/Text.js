import { Alert ,ListGroup} from 'react-bootstrap';
import React from 'react'
const Text = () => {
    return (
      <Alert variant="success">
            <Alert.Heading style={{fontSize: '3em', textAlign: 'center', paddingBottom: '0.5em'}}>Meine Familie (A1)</Alert.Heading>
            <p  style={{letterSpacing: '0.1em' , lineHeight: '1.5em', fontSize: '1.5em', textAlign: 'justify'}}>
            Zu meiner Familie gehören vier Personen. Die Mutter bin ich und dann gehört natürlich mein Mann dazu. 
            Wir haben zwei Kinder, einen Sohn, der sechs Jahre alt ist und eine dreijährige Tochter.
            Wir wohnen in einem kleinen Haus mit einem Garten. Dort können die Kinder ein bisschen spielen.
             Unser Sohn kommt bald in die Schule, unsere Tochter geht noch eine Zeit lang in den Kindergarten.
              Meine Kinder sind am Nachmittag zu Hause. So arbeite ich nur halbtags.
              Eigentlich gehören zu unserer Familie auch noch die Großeltern.
             Sie wohnen nicht bei uns. Sie haben ein Haus in der Nähe. Die Kinder gehen sie oft besuchen.
            </p>
            <hr />
            <p className="mb-0">
            <ListGroup>
            <ListGroup.Item>1) Wie viele Personen hat die Familie?</ListGroup.Item>
            <ListGroup.Item>2) Wo wohnt die Familie?</ListGroup.Item>
            <ListGroup.Item>3) Haben sie Kinder?</ListGroup.Item>
            <ListGroup.Item>4) Arbeitet die Mutter?</ListGroup.Item>
            <ListGroup.Item>5) Wer gehört noch zur Familie?</ListGroup.Item>
            </ListGroup>
            </p>
     
    </Alert>
    );
}

export default Text;