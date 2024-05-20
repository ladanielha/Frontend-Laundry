import { Route, BrowserRouter, Routes } from "react-router-dom";
import OutletPage from "./outlet/OutletPage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import TransactionPage from "./pages/TransactionPage";
import { ContextApplication } from "./libs/config/contexts";
import RegisterPage from "./pages/RegisterPage";
import CustomerPage from "./pages/CustomerPage";
import { useState, useEffect } from "react";
import ItemUpdatePage from "./pages/ItemUpdatePage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";
import TransactionDetailPage from "./pages/TransactionDetailPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <ContextApplication.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/transaction" element={<OutletPage />}>
                <Route index={true} element={<TransactionPage />}></Route>
                <Route
                  path={"detail"}
                  element={<TransactionDetailPage />}
                ></Route>
              </Route>
              <Route path="/item" element={<OutletPage />}>
                <Route index={true} element={<ItemPage />}></Route>
                <Route path={"detail"} element={<ItemUpdatePage />}></Route>
              </Route>
              <Route path="/customer" element={<OutletPage />}>
                <Route index={true} element={<CustomerPage />}></Route>
                <Route path={"detail"} element={<CustomerUpdatePage />}></Route>
              </Route>
            </>
          ) : (
            <Route path="/" element={<OutletPage />}>
              <Route index={true} element={<LoginPage />}></Route>
              <Route path="/signin" element={<LoginPage />}></Route>
            </Route>
          )}
          <Route path="/*" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextApplication.Provider>
  );
}

export default App;
