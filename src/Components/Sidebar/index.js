import React, {useState} from 'react';

import { Link, BrowserRouter, Switch } from 'react-router-dom';

import { Container, Header, ContainerItens, Item } from './styles';

export default function Sidebar() {

  const [menus, setmenus] = useState([
    { page: "Dashboard", url:"Dashboard", name: "DASHBOARD", selected: true},
    { page: "User Profile", url:"UserProfile", name: "USER PROFILE" },
    { page: "Table List", url:"TableList", name: "TABLE LIST" },
    { page: "Icons", url:"Icons", name: "ICONS" },
    { page: "Maps", url:"Maps", name: "MAPS" },
    { page: "Notifications", url:"Notifications", name: "NOTIFICATIONS" }
  ])

  function selected(name, page){

    document.querySelector('#Page').innerHTML = page;
    
    const newMenu = menus.map(menu => {

      // eslint-disable-next-line
      menus.map(menu => {
        menu.selected = false;
      })

      return menu.name === name ? {...menu, selected: true} : menu
    });

    setmenus(newMenu);
  };

  return (
    <Container id="Sidebar">
      <Header>
        <h1>Potternatural</h1>
      </Header>

      <ContainerItens>

        {menus.map(menu => (
        <BrowserRouter>
          <Switch>
            <Link to={`/${menu.url}`}>
              <Item id={menu.name} select={menu.selected} onClick={ () => selected(menu.name, menu.page)}>
              {menu.name}
              </Item>
            </Link>
          </Switch>
        </BrowserRouter>
        ))} 

      </ContainerItens>

    </Container>

  );
}
