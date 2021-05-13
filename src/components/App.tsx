import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import HomePage from "components/HomePage";
import Login from "./siteHelper/SiteLogin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/admin">
          <Login />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
