import React from 'react';
import MenuForm from './MenuForm';
import { Button, Header, } from 'semantic-ui-react';

class Menu extends React.Component {
  state = {editing: false};

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    return (
      <>
        {
          this.state.editing ?
          <MenuForm menu={this.props.menu} toggleEdit={this.toggleEdit} updateMenu={this.props.updateMenu}/> 
        :  
          <Header as="h3">{this.props.menu.name}</Header>
        }
        <Button onClick={this.toggleEdit}>Edit Menu Name</Button>
      </>
    );
  };
};

export default Menu;