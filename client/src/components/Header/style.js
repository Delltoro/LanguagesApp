import {colors} from '../../layout/colors'
console.log(colors);
const headerStyle = {
    margin: '2rem 0' ,
    textAlign: 'center',
    fontSize: '5em',
    letterSpacing: '0.2em',
    fontFamily: 'Permanent Markercursive',

    // fontFamily: 'Mali cursive', 

    textTransform: 'uppercase',
    // TUTAJ KUNI
    color: colors.TanBlonde,
    // NAD TYM
  };

const menuStyle = {
    margin: '1em 0',
    backgroundColor: colors.bg,
    display: 'flex' ,
    justifyContent: 'space-around' , 
    opacity: '0.75',
    bordeRadius: '20%'
  }

  const menuItemStyle = {
    color: colors.TheBrownshirts,
    fontFamily: 'Mali cursive', 
    textTransform: 'uppercase' , 
    letterSpacing: '0.25em',
    bordeRadius: '20%'
  }

export { headerStyle , menuStyle , menuItemStyle};