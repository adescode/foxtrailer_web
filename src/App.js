import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './page/main';
import PrivacyPolicy from './page/privacy_policy';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/privacy'>
          <PrivacyPolicy />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
