import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import CategorySection from "./components/CategorySection";
import Consoles from "./components/Console";
import Headphones from "./components/Headphones";
import HeroSection from "./components/HeroSection";
import Laptops from "./components/Laptop";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Watches from "./components/Watches";
import WishlistPage from "./components/WishlistPage";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import Specifications from "./components/Specifications";
import BestSelling from "./components/BestSelling";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategorySection />
                <BestSelling />
                <Specifications />
              </>
            }
          />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        <Footer />
      </Router>
    </StoreProvider>
  );
}

export default App;
