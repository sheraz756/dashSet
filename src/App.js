


import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RestaurantList from "./pages/restaurantList/RestaurantList";
import SupplierList from "./pages/supplierList/SupplierList";
import PfaPicture from "./pages/pfapicture/PfaPicture";

import PfaData from "./pages/pfaData/PfaData";
import AdminLogin from './pages/Login/AdminLogin';







import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Fdaapproved from './pages/pfaapproved/Fdaapproved';
import Contract from "./pages/contract/Contract";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path="/">
            <AdminLogin />
          </Route>
          <Route exact path="/admin">
            <Home />
          </Route>
          <Route path="/restaurant">
            <RestaurantList />
          </Route>

          <Route path="/restaurantuser/:userId">
            <User />
          </Route>
          
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/supplier">
            <SupplierList />
          </Route>
          <Route path="/pfa">
            <PfaPicture />
          </Route>
          <Route path="/pfadata">
          <PfaData />
          </Route>
          <Route path="/fdaapprove">
          <Fdaapproved />
          </Route>
          <Route path="/contract">
          <Contract />
          
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;




















