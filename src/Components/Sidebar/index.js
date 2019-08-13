import React, {useState} from 'react';

import { Container, Header, ContainerItens, Link } from './styles';

export default function Sidebar() {

  const [menus, setmenus] = useState([
    { page: "Dashboard", url:"", name: "DASHBOARD", selected: true},
    { page: "User Profile", url:"", name: "USER PROFILE" },
    { page: "Table List", url:"", name: "TABLE LIST" },
    { page: "Icons", url:"", name: "ICONS" },
    { page: "Maps", url:"", name: "MAPS" },
    { page: "Notifications", url:"", name: "NOTIFICATIONS" }
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
        <Link id={menu.name} select={menu.selected} onClick={ () => selected(menu.name, menu.page)}>
        {menu.name}
        </Link>))} 

      </ContainerItens>

    </Container>

  );
}
