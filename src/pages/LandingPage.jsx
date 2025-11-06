import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import PackagesSection from "../components/PackagesSection.jsx";

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <HowItWorksSection />
            <PackagesSection />
        </div>
    );
};

export default LandingPage;
