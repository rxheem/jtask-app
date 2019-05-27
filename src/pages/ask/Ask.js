import React from 'react';
import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router-dom';

// Components
import AskInputCollector from '../../components/askInputCollector/AskInputCollector';

const Ask = () => {
  return (
    <Container fluid={true}>
      <AskInputCollector />
    </Container>
  );
};

export default withRouter(Ask);
