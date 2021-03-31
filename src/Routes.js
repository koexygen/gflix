import LandingPage from "./Components/LandingPage/LandingPage";
import Browse from "./Components/Browse/Browse";
import SignIn from "./Components/SignIn/SignIn";
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
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export default ROUTES;
