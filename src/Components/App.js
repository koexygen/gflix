import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Header/Navbar";
import ROUTES from "../Routes";
import UserRedirect from "../Utils/protectedRoutes";

function App() {
  return (
    <Router basename="/gflix">
      <div className="App">
        <Route component={Navbar} />

        {ROUTES.map((route, i) => (
          <UserRedirect redirectPath="/browse" path={route.path} key={i} exact>
            {route.component}
          </UserRedirect>
        ))}
      </div>
    </Router>
  );
}

export default App;
