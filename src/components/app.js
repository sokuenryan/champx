import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/home.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import Cart from './pages/cart.js';

import Trading from './pages/trading.js';
import Selling from './pages/selling.js';
import Thrift from './pages/thrift.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/cart" component={Cart} />

            <Route exact path="/trading" component={Trading} />
            <Route exact path="/selling" component={Selling} />
            <Route exact path="/thrift" component={Thrift} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;

