import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Homepage from './homepage';

const App = () => <Router>
    <div>
    <Route exact path='/' component={Login}></Route>
    <Route path='/homepage' component={Homepage}></Route>
    </div>
    </Router>;

export default App;