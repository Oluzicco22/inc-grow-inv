import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import FAQ from "./pages/FAQs.jsx";
import Packages from "./pages/Packages.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
    );
};

export default App;
