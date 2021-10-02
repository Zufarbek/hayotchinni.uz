
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

    root: {
        display: 'none',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    imageList: {
    // width: 500,
    // height: 450,
    },
    '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiImageListItemBar-title': {
            fontSize: '30px',
            overflow: 'visible',
            whiteSpace: 'pre-wrap',
            lineHeight: '33px'
        },
        '.MuiTypography-h5': {
            marginTop: '30px',
            marginBottom: '30px'
        }
    },
    MuiImageListItemBarTitle: {
        // line-height: 24px;
        // lineHeight: 24,
        // fontSize: 90,
        // textOverflow: 'elipse'
    }
});
  
export default useStyles;