import LandingPage from "./Components/LandingPage/LandingPage";
import Browse from "./Components/Browse/Browse";
import Login from "./Components/Login/SignIn";
import SignUp from "./Components/SignUp/SignUp";

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
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export default ROUTES;
