import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

class AskInputCollector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form>
          <InputGroup>
            <select class='custom-select' id='category' style ={{ maxWidth: '250px'}}>
              <option selected>Choose Category</option>
              <option value=''>Bible Passage</option>
              <option value=''>Church Beliefs and Morals</option>
              <option value=''>Personal</option>
              <option value=''>Ellen White's Writing</option>
              <hr />
              <option value=''>Other</option>
            </select>
            <FormControl aria-describedby='basic-addon1' />
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default AskInputCollector;
