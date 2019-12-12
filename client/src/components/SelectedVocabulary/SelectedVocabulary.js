import React , {Component} from 'react';
import { Jumbotron , Table , Button ,Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';
import { container , addButtonStyle} from './style';
import {fetchSection} from '../../actions/index';


class SelectedVocabulary extends Component{
  
    
    componentWillMount(){
            this.props.fetchSection('5df16446e7835725d82b7be2');
    }
  

    getList() {
        let section;
        if (this.props.section) {
          section =  this.props.section.words.map( (words , index) => {
              return (
                  <tr>
                      <td>{index}</td>
                      <td>{words.plWord}</td>
                      <td>{words.deWord}</td>

                  </tr>
              )
          })
        } else {
            section =
            <Spinner animation="border" role="status">
                 <span className="sr-only">Loading...</span>
            </Spinner>
        }
        return section;
    }

    render(){
        console.log(this.props.section);
         return (
            <Jumbotron style={container}>
                 <Table style={{ width: '80%', border: '2px dashed rgb(214, 48, 49)'}} striped bordered hover >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Wyraz niemiecki</th>
                        <th>Tłumaczenie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getList()}
                    </tbody>
                    </Table>
                    <Button style={addButtonStyle} variant="primary">Przejdz do quizu</Button>
            </Jumbotron>
        );
    }



}

const mapDispatchToProps = dispatch => ({
    fetchSection: id => dispatch(fetchSection(id)),
});

function mapStateToProps({ section }) {
    return { section: section };
}

export default connect(mapStateToProps, mapDispatchToProps )(SelectedVocabulary);