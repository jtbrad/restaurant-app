import React from 'react';
import Menu from './Menu';
import { Header, } from 'semantic-ui-react';

class MenuList extends React.Component {
  render() {
    return (
      <>
        <Header as="h2">Menus</Header>
        <hr />
        <Menu />
      </>
    );
  };
};

export default MenuList;