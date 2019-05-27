import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Container fluid={true}>
        <div />
      </Container>
    );
  }
}

export default withRouter(Home);
