import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Product from "./components/Product";
import WhyJoin from "./components/WhyJoin";
import Because from "./components/Because";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Product />
      <WhyJoin />
      <Because />
    </div>
  );
}

export default App;
