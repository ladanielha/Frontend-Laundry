import { useState } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomerList from "./pages/Customer/CustomerList";
import Login from "./pages/Auth/Login";
import { ContextApplication } from "./config/contexts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <ContextApplication.Provider
        value={{ isAuthenticated, setIsAuthenticated }}
      >
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/customer" element={<CustomerList />} />
          </Routes>
        </HashRouter>
      </ContextApplication.Provider>
    </>
  );
}

export default App;
