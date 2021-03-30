import "./App.scss";
import "./Browse/Browse";
import Header from "./Header/Header";
import LandingBody from "./LandingBody/LandingBody";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingBody />
      <Footer />
    </div>
  );
}

export default App;
