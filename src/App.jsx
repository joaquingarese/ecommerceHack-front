import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IsAuthenticated from "./hooks/IsAuthenticated";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import NavBar from "./components/Navbar";
import FinishedPurchase from "./pages/FinishedPurchase";

function App() {
  const location = useLocation();
  const [isExiting, setIsExiting] = useState(false);
  const [key, setKey] = useState(location.pathname);

  const handleExitComplete = () => {
    setIsExiting(false);
  };

  const ScrollToTop = () => {
    useEffect(() => {
      if (location.pathname === "/") {
        return;
      }

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };

      requestAnimationFrame(scrollToTop);
    }, []);

    return null;
  };
  return (
    <AnimatePresence key={key} onExitComplete={handleExitComplete}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        exit={{ opacity: 0 }}
        onAnimationStart={() => setIsExiting(true)}
        onAnimationComplete={() => setKey(location.pathname)}
      >
        <NavBar />
        <Routes location={location}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/producto/:slug" element={<Product />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/carrito" element={<Cart />} />
          <Route element={<IsAuthenticated />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/detalles-de-compra" element={<FinishedPurchase />} />
        </Routes>
        <motion.div
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          exit={{ opacity: 0 }}
        >
          <ScrollToTop />
        </motion.div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
