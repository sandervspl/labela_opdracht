import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import FourOhFour from '../components/FourOhFour';

const App = () => (
  <div>
    <h1>Hello world</h1>
    <Switch>
      <Route exact path="/" component={FirstPage} />
      <Route path="/second" component={SecondPage} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default App;
