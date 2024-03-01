import "./App.css";
import { Outlet, Link } from "react-router-dom";
import WeightConverterView from "./features/weightConverterView";
import SizeConverterView from "./features/sizeConverterView";

function App() {
  return (
    <>
      <header>
        <h1>Jewellery Tools</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"weightConverter"}>Weigth Converter</Link>
          <Link to={"sizeConverter"}>Size Converter</Link>
        </nav>
      </header>
      <Outlet />
      <footer>By the Platinum Forge</footer>
    </>
  );
}

export default App;
