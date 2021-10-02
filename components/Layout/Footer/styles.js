
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.footer .MuiContainer-root': {
            // marginTop: 50,
            // marginBottom: 50
        }
    },
});
  
export default useStyles;