import { HashRouter, Route, Routes } from "react-router-dom";
import TransactionPage from "./page/transaction/PageTransaction";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TransactionPage />}>
          <Route index={true} element={<TransactionPage />} />
          <Route path={"create"} element={<TransactionPage />} />
          <Route path={"detail"} element={<TransactionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
