// import Login from "../Login";
import { Route, HashRouter, Routes, BrowserRouter, Outlet } from "react-router-dom";
import OutletPage from "./outlet/OutletPage";
import Login from "./components/Login";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import TransactionPage from "./pages/TransactionPage";
import { ContextApplication } from "./libs/config/contexts";
import RegisterPage from "./pages/RegisterPage";


function App() {
  
  const [isAuthenticated , setIsAuthenticated] = useState(false)


  return (
    <ContextApplication.Provider value={{isAuthenticated, setIsAuthenticated}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletPage/>}>
          <Route index={true} element={<LoginPage/>}></Route>
        </Route>
        <Route path="/register" element={<OutletPage/>}>
          <Route index={true} element={<RegisterPage/>}></Route>
        </Route>
        <Route path="/transaction" element={<OutletPage/>}>
          <Route index={true} element={<TransactionPage/>}></Route>
        </Route>
        <Route path="/item" element={<OutletPage/>}>
          <Route index={true} element={<ItemPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextApplication.Provider>
  );
}

export default App;
