import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile';
import TableList from './Pages/TableList';
import Icons from './Pages/Icons';
import Maps from './Pages/Maps';
import Notifications from './Pages/Notifications';

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Dashboard/>}/>
      <Route  path="/Dashboard" component={() => <Dashboard/>}/>
      <Route  path="/UserProfile" component={() => <UserProfile/>}/>
      <Route  path="/TableList" component={() => <TableList/>}/>
      <Route  path="/Icons" component={() => <Icons/>}/>
      <Route  path="/Maps" component={() => <Maps/>}/>
      <Route  path="/Notifications" component={() => <Notifications/>}/>
    </Switch>
  </BrowserRouter>
  )

}