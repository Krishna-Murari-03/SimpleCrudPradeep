import React from "react";
import Button from "@mui/material/Button";
import Login from "./Login";
import Manager from "./Manager";
import User from "./User";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/manager">
            <Manager />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
