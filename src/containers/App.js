import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './Categories';
// import SecondPage from './SecondPage';
import FourOhFour from '../components/FourOhFour';

const App = () => (
  <div>
    <h1>Hello world</h1>
    <Switch>
      <Route exact path="/" component={Categories} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default App;
