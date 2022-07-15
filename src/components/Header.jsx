import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import AlertDismissible from './Alert';

const Header = (props) => {
  return (
    <div>
      <Navbar bg={props.mode} variant={props.mode}>
        <Container>
          <Navbar.Brand href="#home">T-Analyzer</Navbar.Brand>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={props.toggleMode}
            />
          </Form>
        </Container>
      </Navbar>
      <AlertDismissible alert={props.alert} />
    </div>
  );
};

export default Header;
