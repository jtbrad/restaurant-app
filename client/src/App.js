//Project Notes
//Edit Menu button not working.
//Delete Menu not implemented.
//Item Model and views not currently implemented.


import React from 'react';
import MenuList from './components/MenuList';
import { Container, Header, } from 'semantic-ui-react';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h1">Rails-React Restaurant</Header>
        <hr />
        <MenuList />
      </Container>
    );
  };
};

export default App;
