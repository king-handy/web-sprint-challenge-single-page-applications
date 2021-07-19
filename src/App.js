import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <nav>
        <li id='order-pizza'>
          <Link to='/'>Home</Link>
        </li>
        <li id='pizza-form'>
          <Link to='/pizza'>Pizza</Link>
        </li>
      </nav>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/pizza' component={Pizza} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
