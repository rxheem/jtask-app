import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// Components
import MainNavigation from './components/mainNavigation/MainNavigation';

// Pages
import Home from './pages/home/Home';
import Ask from './pages/ask/Ask';
import Privacy from './pages/privacy/Privacy';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Route path='/' component={MainNavigation} />

        {/* Switch */}
        <Switch>
          {/* All routes */}
          <Route exact path='/' component={Home} />
          <Route exact path='/ask/' component={Ask} />
          <Route exact path='/privacy/' component={Privacy} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
