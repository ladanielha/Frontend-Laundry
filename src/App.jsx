import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Login from "../Login";
import { Route, HashRouter, Routes } from "react-router-dom";
import OutletPage from "./outlet/OutletPage";
import Login from "./components/Login";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}>
          <Route index={true} element={LoginPage}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
