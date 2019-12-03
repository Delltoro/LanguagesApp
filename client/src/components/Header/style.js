import {colors} from '../../layout/colors'
console.log(colors);
const headerStyle = {
    //margin: '2rem 0' ,
    textAlign: 'center',
    fontSize: '5em',
    margin: '0.3em 0',
    // letterSpacing: '0.2em',
    // fontFamily: 'Courgette',
    // padding: '0.7em 0.6em',
    // textTransform: 'uppercase',
    fontFamily: 'Parisienne',
  //   fontFamily: 'Sacramento', cursive;
  //   fontFamily: 'Parisienne', cursive;
  //   fontFamily: 'Italianno', cursive;
  //   fontFamily: 'Petit Formal Script', cursive;
  };


const headerContainer = {
  
}

const menuStyle = {
    margin: '1em 0',
    backgroundColor: '#d63031',
    display: 'flex' ,
    justifyContent: 'space-around' , 
    opacity: '0.75',
    bordeRadius: '20%',
    padding: '0.1em 0.2em'
  }

  const menuItemStyle = {
    color: '#000',
    fontSize: '0.7em',
    fontFamily: 'Mali cursive', 
    textTransform: 'uppercase' , 
    letterSpacing: '0.25em',
    bordeRadius: '20%'
  }

export { headerStyle , menuStyle , menuItemStyle};