import React from "react";
import Topbar from "../components/Topbar";
import ArrowDown from "../assets/arrowDown.svg";

const packages = [
    { title: "Starter", invest: "₦5,000", return: "₦15,000" },
    { title: "Basic", invest: "₦10,000", return: "₦30,000" },
    { title: "Classic", invest: "₦20,000", return: "₦60,000" },
    { title: "Standard", invest: "₦50,000", return: "₦150,000" },
    { title: "Premium", invest: "₦100,000", return: "₦400,000" },
    { title: "Ultimate", invest: "₦200,000", return: "₦800,000" },
];

const Packages = () => {
    return (
        <section className="bg-[#3A3D77] text-white py-12 px-6 min-h-screen relative block md:hidden">
            {/* ✅ TopBar */}
            <Topbar />

            {/* Section heading */}
            <h2 className="text-3xl font-semibold mb-10 text-center leading-[64px] mt-16">
                Investment Packages
            </h2>

            {/* Packages layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold tracking-wide text-[#FFFBFB] mb-3 leading-8">
                            {pkg.title}
                        </h3>

                        <div className="border border-[#B0B2DC] rounded-xl w-7/8 h-full py-10 text-center bg-[#B0B2DC1A] hover:bg-[#444885] transition-all duration-300">
                            <p className="text-2xl text-[#FFFBFB] tracking-wide leading-8">{pkg.invest}</p>

                            <div className="flex py-7 justify-center">
                                <img src={ArrowDown} alt="ArrowDown" />
                            </div>

                            <h4 className="text-[45px] font-medium mb-6 text-[#FFFBFB] tracking-wide leading-8">{pkg.return}</h4>

                            <button className="border border-[#D9D2FF] px-6 py-2 rounded-lg mt-6 w-3/4 hover:bg-white hover:text-[#3A3D77] transition font-medium leading-8">
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;
