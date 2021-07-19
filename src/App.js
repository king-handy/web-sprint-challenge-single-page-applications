import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Pizza from './components/Pizza'
import './App.css'

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li id='pizza-form'>
          <Link to='/pizza'>Pizza Form</Link>
        </li>
        <li id='order-complete'>
          <Link to='/'></Link>
        </li>
      </nav>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/pizza' component={Form} />
          <Route path ='/order' component={Pizza} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
