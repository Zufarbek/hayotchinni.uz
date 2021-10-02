import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
// import itemCategories from './itemCategories';
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
export default function TitlebarImageList() {
  const classes = styles();
  return (
    <Container>
        <Typography variant="h5" gutterBottom align="center">
          Категории магазина
        </Typography>
        <Grid container spacing={2}>
              {itemCategories.map((item) => (
                <Grid key={item.img} item lg={4} md={4} sm={6}>
                    <ImageList style={{cursor: 'pointer'}} onClick={() => {alert("Clicked")}} rowHeight={220} cols={1}>
                      <ImageListItem >
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                          title={item.title}
                          style={{ height: '100%' }}
                        />
                      </ImageListItem>
                    </ImageList>
                </Grid>
              ))}
        </Grid>
    </Container>
  );
}
