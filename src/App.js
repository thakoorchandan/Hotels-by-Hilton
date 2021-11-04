import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Locations from "./Components/Locations/Location";
import Register from "./Components/Authentication/RegisterForm/Register";
// import Login from "./Components/HomePage/SignInForm/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Route path="/location" component={Locations} />
        <Route exact path="/HiltonHotels/signup" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
