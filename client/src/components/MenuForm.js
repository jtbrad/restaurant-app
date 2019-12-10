import React from 'react';
import { Header, Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { name: "" }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.menu.id) {
      this.props.updateMenu({ id: this.props.menu.id, ...this.state})
      this.props.toggleEdit();
    } else {
      this.props.addMenu(this.state.name);
    }
    this.setState({ name: "" })
  };

  render() {
    return (
      <>
        <Header as="h3">Add New Menu</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Menu"
            placeholder="Add Menu"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form>
      </>
    );
  };
};

export default MenuForm