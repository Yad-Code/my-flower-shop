import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Navbar from "./components/layout/Navbar/Navbar.jsx";

import "./assets/App.css";
import Shop from "./pages/Shop.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
