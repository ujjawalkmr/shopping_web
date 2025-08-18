import React from "react";
import AppBarView from "./commonPage/appbar/AppBarView";
import BottomArea from "./components/HomePageElement/BottomArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/Products/ProductDetailsPage";

function App() {
  const handleNavClick = (item) => {
    console.log(`Clicked!!!! on: ${item}`);
    // You can add more logic here, like navigation or state updates
  };
  return (
    <Router>
      <AppBarView onNavClick={handleNavClick} />
      <div style={{ height: '70px' }} />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <BottomArea />
    </Router>
  );
}

export default App;
