import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithunUser from "./ShowGithubUser";
export function App() {
  return (
    <div className="border-solid border-2 border-sky-500">
      <div>
        <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users/Roberta93-web">ShowGithubUser</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Roberta" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithunUser />}></Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Not found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
