import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Header/Navbar";
import * as ROUTES from "../Routes";
import { UserRedirect, ProtectedRoute } from "../Utils/protectedRoutes";
import LandingPage from "./LandingPage/LandingPage";
import Browse from "./Browse/Browse";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Navbar} />

        <Switch>
          <UserRedirect redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Login />
          </UserRedirect>
          <UserRedirect redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <SignUp />
          </UserRedirect>
          <ProtectedRoute path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <UserRedirect redirectPath={ROUTES.BROWSE} path={ROUTES.LANDING}>
            <LandingPage />
          </UserRedirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
