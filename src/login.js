// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Axios from 'axios';
// import setAuthToken from './authenticate';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       errMessage: '',
//     };
//   }

//   handleInputChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     this.LoginApi();
//   }

//   LoginApi = async () => {
//     Axios.post('api/login', this.state)
//       .then((res) => {
//         // Set token to localStorage
//         const { token } = res.data;
//         localStorage.setItem('token', token);
//         // Set token to Auth header
//         setAuthToken(token);
//         if (res.status === 200) {
//           this.props.history.push('/');
//         } else {
//           this.setState({ errMessage: 'invalid login details' });
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   render() {
//     const { errMessage } = this.state;

//     return (
//       <div className='login_main_div'>
//         <form onSubmit={this.onSubmit}>
//         <p>Log in To Your Account!</p>
//         <div>
//         <input
//           type="username"
//           name="username"
//           placeholder="Enter your username"
//           value={this.state.email}
//           onChange={this.handleInputChange}
//           required
//         />
//         </div>
//         <div>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           required
//         />
//         </div>
//         <div>
//        <input className="button" type="submit" value="Login" />
//        </div>
//        <p>{errMessage}</p>
//       </form>
//       </div>
//     );
//   }
// }

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/homepage" variant="body2">
                  Homepage
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}