import React, {useState} from 'react';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Button, 
  Menu, 
  MenuItem, 
  Typography,
  Link,
  IconButton, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "/public/assets/icons/hayotchinni.png";
import styles from './styles.js';
import { navLinks } from "./navLinks";



export default function Header() {
  const classes = styles()  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event);
    console.log("EVENT:", event)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
  const Navbar = (
    <div className="navbar">
      {navLinks.map((nav, index) => (
        <Typography key={index} variant="h6" 
        className={classes.title}>
            <Link
              // component="button"
              variant="body2"
            >
              <a href={nav.link} className="NavLink">{nav.title['ru']}</a>
            </Link>
        </Typography>
      ))}
    </div>
  );

  console.log(classes)
  console.log(navLinks)
  return (
    <div className="HeaderSection">
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar className="Toolbar">
            <div >
              <img className="logo" src={Logo.src} alt="Hayot chinni" />
            </div>
            <div>
              <div className="navDesktop d-md-block d-none">
                {Navbar}
              </div>
              <div className="navMobile d-block d-md-none">
                {Navbar}
              </div>
              <IconButton edge="start" className={classes.menuButton, 'd-md-none'} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
