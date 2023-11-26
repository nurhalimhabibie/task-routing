import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarSec from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavbarSec />
      <Outlet />
    </div>
  );
}

export default App;
