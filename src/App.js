import React from 'react';

import Routes from './routes';

import GlobalStyle from './Styles/global';

import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';


function App() {
  return ( 
    <>
      <GlobalStyle/>
      <Sidebar/>
      <Navbar/>
      <Routes/>
    </>
  );
}

export default App;
