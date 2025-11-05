import './index.css'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Packages from "./components/Packages";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks />
            <Packages />
        </div>
    );
}

export default App;
