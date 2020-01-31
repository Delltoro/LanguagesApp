import { Jumbotron,Alert ,Table} from 'react-bootstrap';
import React from 'react';
import { container } from './style';


const SelectedGrammar = () => {
    // [
    //     'primary',
    //     'secondary',
    //     'success',
    //     'danger',
    //     'warning',
    //     'info',
    //     'light',
    //     'dark',
    //   ]
    return (
      <Jumbotron style={{display: 'flex' , justifyContent: 'space-around'}}>
        
        <div style={{width: '35%'}}>
        <Alert  style={{fontWeight: 'bold'}} variant='danger'>Indikativ Präsens</Alert>
        <Table  striped hover >
                    <thead>
                        <tr>
                            <th>Osoba</th>
                            <th>Czasownik</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ich</td>
                            <td>bin</td>
                        </tr>
                        <tr>
                             <td>du</td>
                             <td>bist</td>
                        </tr>
                        <tr>
                             <td>er/sie/es</td>
                             <td>ist</td>
                        </tr>
                        <tr>
                             <td>wir</td>
                             <td>sind</td>
                        </tr>
                        <tr>
                             <td>ihr</td>
                             <td>seid</td>
                        </tr>
                        <tr>
                            <td>sie/Sie</td>
                            <td>sind</td>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div style={{width: '35%'}}>
            <Alert style={{fontWeight: 'bold'}} variant='danger'>Indikativ Präteritum</Alert>
            <Table striped hover >
                    <thead>
                        <tr>
                            <th>Osoba</th>
                            <th>Czasownik</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ich</td>
                            <td>war</td>
                        </tr>
                        <tr>
                             <td>du</td>
                             <td>warst</td>
                        </tr>
                        <tr>
                             <td>er/sie/es</td>
                             <td>war</td>
                        </tr>
                        <tr>
                             <td>wir</td>
                             <td>waren</td>
                        </tr>
                        <tr>
                             <td>ihr</td>
                             <td>wart</td>
                        </tr>
                        <tr>
                            <td>sie/Sie</td>
                            <td>waren</td>
                        </tr>
                    </tbody>
            </Table>
            </div>

      </Jumbotron>
    )
        
}

export default SelectedGrammar;