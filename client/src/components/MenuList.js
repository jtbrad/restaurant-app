import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import MenuForm from './MenuForm';
import { Header, } from 'semantic-ui-react';

class MenuList extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addMenu = (name) => {
    axios.post("/api/menus", { name })
      .then( res => {
        const {menus, } = this.state;
        this.setState({ menus: [...menus, res.data], });
      })
  };

  updateMenu = (newMenu) => {
    debugger;
    axios.put(`/api/menus/${newMenu.id}`, { newMenu })
      .then( res => {
        const menus = this.state.menus.map( menu => {
          if (newMenu.id === menu.id)
            return res.data
          return menu
        });
        this.setState({ menus, })
      })
  };


  render() {
    const menus = this.state.menus;
    return (
      <>
        <Header as="h2">Menus</Header>
        <hr />
        <MenuForm addMenu={this.addMenu} />
        <hr />
        { 
          menus.map( menu => <Menu key={menu.id} menu={menu} updateMenu={this.updateMenu}/> )
        }
      </>
    );
  };
};

export default MenuList;