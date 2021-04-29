import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
 
// hearing test
// import Home from './components/hearingtest/Home';
import About from './components/hearingtest/About';
import Error from './components/hearingtest/Error';
import Navigation from './components/hearingtest/Navigation';
import TestLangingPage from './components/hearingtest/hearingscreening/TestLandingPage';
import AudioScreening from './components/hearingtest/hearingscreening/Screening';
import FAQ from './components/hearingtest/Faq';
import Footer from './components/hearingtest/Footer';
import Device from './components/hearingtest/Device';
import Privacy from './components/hearingtest/PrivacyPolicy';

// hearing education
import SignIn from './components/hearingeducation/auth/Auth';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <div id="main-screen">
          <Navigation />
          <ScrollToTop />
          <Switch>
            <Route path="/home" component={TestLangingPage} exact />
            <Route path="/screeninghome" component={TestLangingPage} />
            <Route path="/about" component={About} />
            <Route path="/screening" component={AudioScreening} />
            <Route path="/faq" component={FAQ} />
            <Route path="/signin" component={SignIn} />
            <Route path="/devices" component={Device} />
            <Route path="/privacypolicy" component={Privacy} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;