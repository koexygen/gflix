import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Header/Navbar";
import ROUTES from "../Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        {ROUTES.map((route, i) => (
          <Route exact path={route.path} component={route.component} key={i} />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
