import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './Categories';
import People from './People';
import FourOhFour from '../components/FourOhFour';

// style
import './App.styl';

const App = () => (
  <div className="app-layout">
    <h1>Label A SWAPI Assignment</h1>
    <Switch>
      <Route exact path="/" component={Categories} />
      <Route exact path="/people" component={People} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default App;
