// import Login from "../Login";
import {
  Route,
  HashRouter,
  Routes,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import OutletPage from "./outlet/OutletPage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import TransactionPage from "./pages/TransactionPage";
import { ContextApplication } from "./libs/config/contexts";
import RegisterPage from "./pages/RegisterPage";
import CustomerPage from "./pages/CustomerPage";
import { useState } from "react";
import ItemUpdatePage from "./pages/ItemUpdatePage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ContextApplication.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<OutletPage />}>
            <Route index={true} element={<LoginPage />}></Route>
          </Route>
          <Route path="/register" element={<OutletPage />}>
            <Route index={true} element={<RegisterPage />}></Route>
          </Route>
          <Route path="/transaction" element={<OutletPage />}>
            <Route index={true} element={<TransactionPage />}></Route>
          </Route>
          <Route path="/item" element={<OutletPage />}>
            <Route index={true} element={<ItemPage />}></Route>
            <Route path={"detail"} element={<ItemUpdatePage/>}></Route>
          </Route>
          <Route path="/customer" element={<OutletPage />}>
            <Route index={true} element={<CustomerPage />}></Route>
            <Route path={"detail"} element={<CustomerUpdatePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextApplication.Provider>
  );
}

export default App;
