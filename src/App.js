import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/pizza' component={Pizza} />
        </Switch> */}
      </div>
    </Router>
  );
};
export default App;
