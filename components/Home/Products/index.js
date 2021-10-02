import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import styles from './styles.js'

const itemCategories = [
  {
      img: '/assets/products/asd.jpg',
      title: 'Пахта красная с золотом',
  },
  {
      img: '/assets/products/DSC01413.JPG',
      title: 'Атлас красная с золотом',
  },
  {
      img: '/assets/products/DSC01419.JPG',
      title: 'Пахта синяя с золотом',
  },
  {
      img: '/assets/products/DSC01422.JPG',
      title: 'Атлас синяя с золотом',
  },
  {
      img: '/assets/products/DSC01427.JPG',
      title: 'Пахта бирюзовая с золотом',
  },
  {
      img: '/assets/products/DSC01432.JPG',
      title: 'Пахта красная',
  }
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = styles()

  return (
    <div className="ProductsSection">
        <div>
          <Container >
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              OOO "HAYOT CHINNI"
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Один из крупнейших предприятий по изготовлению фарфоровых изделий в Республике Узбекистан. Предприятие оснащено самыми передовыми технологиями и имеет специализированную базу технического и кадрового персонала, что дает большое преимущество для выпуска общедоступной и качественной продукции по мировым стандартам.
            </Typography>
          </Container>
        </div>
        <Container>
          <Grid container spacing={4}>
            {itemCategories.map((itemCategorie) => (
              <Grid item key={itemCategorie.img} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image={itemCategorie.img}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {itemCategorie.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      5 869 сўм
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained" fullWidth color="primary">
                      В корзину
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}
