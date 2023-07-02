import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/cadastro" component={ Cadastro } />
    </Switch>
  )
}

export default Router;
