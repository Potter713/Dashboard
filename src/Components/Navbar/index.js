import React from 'react';

import { Container, Itens, Page } from './styles';

export default function Sidebar() {

  function fullPage(){

    if(document.querySelector('#Sidebar').style.display === 'block'){
      document.querySelector('#Sidebar').style.display = 'none';
      document.querySelector('#Navbar').style.width = '100%';
      document.querySelector('#Navbar').style.left = '0';
    } else{
      document.querySelector('#Sidebar').style.display = 'block';
      document.querySelector('#Navbar').style.width = '70%';
      document.querySelector('#Navbar').style.left = '30%';
    }
  }

  return (
    <Container id="Navbar">

      <Page id="Page" onClick={ async () => await fullPage()}>Dashboard</Page>

      <Itens>Sair</Itens>
      <Itens>Dropdown</Itens>
      <Itens>Conta</Itens>

    </Container>
  );
}