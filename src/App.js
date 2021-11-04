import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Locations from "./Components/Locations/Location";
import Register from "./Components/Authentication/RegisterForm/Register";
import Login from "./Components/HomePage/SignInForm/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/location" component={Locations} />
        <Route path="/User/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
