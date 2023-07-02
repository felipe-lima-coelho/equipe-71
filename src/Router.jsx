import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import App from "./screens/App";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/app" component={ App } />
    </Switch>
  )
}

export default Router;
