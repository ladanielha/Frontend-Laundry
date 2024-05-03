import React from "react";
import Transactions from "../components/Trancastions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TransactionPage = () => {
  return (
    <>
      <Navbar />
      <Transactions />
      <Footer />
    </>
  );
};

export default TransactionPage;
