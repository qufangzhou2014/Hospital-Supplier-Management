import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Mainpage from "./pages/mainpage";
import Vendor from "./pages/vendor";
import User from "./pages/user";
import Inventory from "./pages/inventory";
import { EditVendor } from "./pages/editVendor";
import { Provider } from "react-redux";
import store from "./store";
import { EditUser } from "./pages/editUser";
import { AddVendor } from "./pages/addVendor";
import { NewInventory } from "./pages/addInventory";
import { EditInventory } from "./pages/editInventory";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/mainpage">
          <Mainpage />
        </Route>
        <Route path="/vendor">
          <Vendor />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/editvendor">
          <EditVendor />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
        <Route path="/addvendor">
          <AddVendor />
        </Route>
        <Route path="/addinventory">
          <NewInventory />
        </Route>
        <Route>
          <EditInventory />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
