import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

export function App() {
  return (
    <div className="border-solid border-2 border-sky-500">
      <div>
        <Link to="/welcome">Welcome</Link> | <Link to="/counter">Counter</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Roberta" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}
