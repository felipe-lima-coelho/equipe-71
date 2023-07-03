import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import App from "./screens/App";
import Talk from "./screens/Talk";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/app" component={ App } />
      <Route path="/talk" component={ Talk } />
    </Switch>
  )
}

export default Router;
