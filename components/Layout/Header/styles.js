
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    // colorInherit: {
    //   backgroundColor: 'green',
    //   display: 'none'
    // },
    '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.HeaderSection .MuiAppBar-colorPrimary': {
            backgroundColor: '#fff',
            display: 'none'
        },
        '.HeaderSection .MuiButton-colorInherit': {
            color: '#2b2a29'
        },
        '.HeaderSection .logo': {
          marginTop: 5,
          marginBottom: 5,
          width: '80px'
        },
        '.HeaderSection .Toolbar': {
          justifyContent: 'space-between'
        },
        '.HeaderSection .navDesktop .NavLink': {
          paddingRight: 20,
          paddingLeft: 20,
          color: '#2b2a29',
          fontSize: 15
        },
        '.HeaderSection .navMobile .NavLink': {
          width: '100%',
          color: '#2b2a29',
          fontSize: 15,
          display: 'block',
          paddingBottom: 15,
          paddingTop: 15,
        },
        '.HeaderSection .navDesktop .navbar': {
          // display: 'none',
          display: 'flex'
        },
        '.HeaderSection .navMobile .navbar': {
          position: 'fixed',
          right: 0,
          left: 0,
          top: 90,
          bottom: 0,
          backgroundColor: '#fff',
          zIndex: 1,
          paddingLeft: 35,
          paddingRight: 5,
        },
    },
});
  
export default useStyles;