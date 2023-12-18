import { Routes, Route } from "react-router";
import "./App.css";
import Main from "./Components/Main";
import Signup from "./Components/Signup/SignUp";

function App() {
  return (
    <div className=" bg-gradient-to-b from-purple-600 to-purple-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
