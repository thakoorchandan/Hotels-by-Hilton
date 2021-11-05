import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Locations from "./Components/Locations/Location";
import Register from "./Components/Authentication/RegisterForm/Register";
import Sign from "./Components/HomePage/SignInForm/SignIn/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/HiltonHotels/signin" exact component={Sign} />
        <Route exact path="/HiltonHotels/signup" exact component={Register} />

        {localStorage.getItem("token") ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Redirect to={"/HiltonHotels/signin"} />
        )}

        <Route path="/HiltonHotels/location" component={Locations} />
        <Route exact path="/HiltonHotels/signin" exact component={Sign} />
      </Switch>
    </Router>
  );
}

export default App;
