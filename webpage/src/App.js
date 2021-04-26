import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
// hearing test
import Home from './components/hearingtest/Home';
import About from './components/hearingtest/About';
import Error from './components/hearingtest/Error';
import Navigation from './components/hearingtest/Navigation';
import TestLangingPage from './components/hearingtest/hearingscreening/TestLandingPage'
import AudioScreening from './components/hearingtest/hearingscreening/Screening'
import FAQ from './components/hearingtest/Faq'
import Footer from './components/hearingtest/Footer'
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/screeninghome" component={TestLangingPage} />
            <Route path="/about" component={About} />
            <Route path="/screening" component={AudioScreening} />
            <Route path="/faq" component={FAQ} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;