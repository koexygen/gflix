import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import LandingPage from "./LandingPage/LandingPage";
import Browse from "./Browse/Browse";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Navbar from "./Header/Navbar";

const ROUTES = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/browse",
    component: Browse,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          {ROUTES.map((route, i) => (
            <Route exact path={route.path} component={route.component} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
