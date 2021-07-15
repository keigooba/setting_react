import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

import { Login } from "./components/pages/Login";
import { Page404 } from "./components/pages/Page404";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
