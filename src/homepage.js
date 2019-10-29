import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TransitionsModal from './modal';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Your Website
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    // padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
  airport: {
    height: 160,
  },
  paperText: {
    padding: theme.spacing(2),
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            OpenSky Flight Tracker
          </Typography>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Welcome To Your Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,frankfurt'}/>
              <div className={classes.paperText}>
                <h2>Frankfurt Airport,	Frankfurt</h2>
                <TransitionsModal 
                  ARRIVAL_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517227400'
                  DEPARTURE_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=EDDF&begin=1517227200&end=1517227400'/>
                  </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,amsterdam'}/>
              <div className={classes.paperText}>
              <h2>Schiphol Airport, Amsterdam</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://opensky-network.org/api/flights/arrival?airport=KATL&begin=1517227200&end=1517228300'
                  DEPARTURE_API='https://opensky-network.org/api/flights/departure?airport=KATL&begin=1517227200&end=1517228300'
                   />
                   </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,chicago'}/>
              <div className={classes.paperText}>
              <h2>O'Hare International Airport, Chicago</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://opensky-network.org/api/flights/arrival?airport=KORD&begin=1517227200&end=1517227350'
                  DEPARTURE_API='https://opensky-network.org/api/flights/departure?airport=KORD&begin=1517227200&end=1517227350'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,Hong Kong'}/>
              <div className={classes.paperText}>
              <h2> Hong Kong International Airport, Chek Lap Kok</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://opensky-network.org/api/flights/arrival?airport=VHHH&begin=1517227200&end=1517227500'
                  DEPARTURE_API='https://opensky-network.org/api/flights/departure?airport=VHHH&begin=1517227200&end=1517227500'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,new york'}/>
              <div className={classes.paperText}>
                <h2> JFK International Airport, New York</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://opensky-network.org/api/flights/arrival?airport=RKSI&begin=1517227200&end=1517227600'
                  DEPARTURE_API='https://opensky-network.org/api/flights/departure?airport=RKSI&begin=1517227200&end=1517227600'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,london'}/>
              <div className={classes.paperText}>
              <h2>London's Heathrow Airport Airport, London</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://opensky-network.org/api/flights/arrival?airport=KLAX&begin=1517227200&end=1517229000'
                  DEPARTURE_API='https://opensky-network.org/api/flights/departure?airport=KLAX&begin=1517227200&end=1517229000'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,barcelona'}/>
              <div className={classes.paperText}>
                <h2>Barcelona–El Prat Airport,	Barcelona</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=LEBL&begin=1517227200&end=1517227800'
                  DEPARTURE_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=LEBL&begin=1517227200&end=1517227800'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,toronto'}/>
              <div className={classes.paperText}>
                <h2>Toronto Pearson Airport,	Mississauga</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=CYYZ&begin=1517227200&end=1517229000'
                  DEPARTURE_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=CYYZ&begin=1517227200&end=1517227800'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,france'}/>
              <div className={classes.paperText}>
                <h2>Charles de Gaulle International Airport,	France</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=LFPG&begin=1517227200&end=1517229000'
                  DEPARTURE_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=LFPG&begin=1517227200&end=1517227800'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.airport} alt='airport' src={'https://source.unsplash.com/random?airport,los angeles'}/>
              <div className={classes.paperText}>
               <h2>Los Angeles International Airport, Los Angeles</h2>
              <TransitionsModal 
                  ARRIVAL_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=EGLL&begin=1517227200&end=1517229000'
                  DEPARTURE_API='https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=EGLL&begin=1517227200&end=1517227800'/>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Log in
                </Link>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}