import { Routes, Route } from "react-router";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div className=" bg-gradient-to-b from-purple-600 to-purple-900 ">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
