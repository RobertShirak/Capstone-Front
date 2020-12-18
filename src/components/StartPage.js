import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import headerimg from '../images/motz.jpg'
import headerimg2 from '../images/con.jpg'
import { BrowserRouter as Router } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${headerimg})`,
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolbar: {
      backgroundColor: 'white',
      color: 'black'
  },
  spadding:{
      paddingTop: '210px',
    //   paddingBottom: '10px'
  },
  secondImage:{
    backgroundImage: `url(${headerimg2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop:"337px"
  },
  thadding:{
      paddingBottom: "20px"
  }
}));


export default function Album() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className= {classes.toolbar}>
        <Link href="/"  style={{ textDecoration: 'none' , color: 'black'}}   >
          <Typography variant="h6" noWrap>
            MANGIA
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm" className={classes.spadding}>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link href= "/dinner/history" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="white">
                    Dinner
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.secondImage}>
        <Container maxWidth="sm">
            <div className={classes.heroButtons , classes.thadding}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link href= "/desserts/history" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="white">
                  Dessert/Specialties
                  </Button>
                </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      </Router>
    
  );
}