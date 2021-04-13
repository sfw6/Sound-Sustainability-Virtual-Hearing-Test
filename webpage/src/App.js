import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import HearingScreening from './components/Screening'
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/hearingscreening" component={HearingScreening} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;