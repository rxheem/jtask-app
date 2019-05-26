import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import MainNavigation from './components/mainNavigation/MainNavigation';
import Home from './components/home/Home'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        {/* Main Navigation */}
        <Route path='/' component={MainNavigation} />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
