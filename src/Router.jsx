import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "./screens/Login";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  )
}

export default Router;
