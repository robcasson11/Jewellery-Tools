import "./App.css";
import { sum } from "./convert";

function App() {
  const result = sum(5, 5);
  return <h1>Hey the answer is {result}</h1>;
}

export default App;
