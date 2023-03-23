import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

export function App() {
  return (
    <div className="border-solid border-2 border-sky-500">
      <Routes>
        <Route path="/" element={<Welcome name="Roberta" />}></Route>
      </Routes>
    </div>
  );
}
