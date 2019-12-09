import React from 'react';
import axios from 'axios';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container, Header, } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">Rails-React Restaurant</Header>
        <hr />
        <MenuForm />
        <MenuList />
      </Container>
    );
  };
};

export default App;
