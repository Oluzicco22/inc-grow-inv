import React from "react";
import heroImage from "../assets/hero-ill.svg"; // rename your image and place in /assets

const Hero = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-10">
            <h1 className="text-5xl font-semibold leading-snug text-[#292727] uppercase">
                income <br /> growth <br /> investment
            </h1>
            <p className="mt-3 max-w-md text-[#7E7A7A] leading-8 w-4/5">
                Sow your money in the right place. Let your income grow while you continue living
            </p>

            <div className="flex flex-col gap-3 mt-6">
                <button className="bg-[#7460E3] text-white font-normal leading-8 px-6 py-3 rounded-2xl hover:bg-indigo-700 transition">
                    Get Started
                </button>
                <button className="border border-[#7460E3] text-[#7460E3] font-normal leading-8 px-6 py-3 rounded-2xl hover:bg-indigo-100 transition">
                    Learn More
                </button>
            </div>

            <img
                src={heroImage}
                alt="Investment Illustration"
                className="mt-8"
            />
        </section>
    );
};

export default Hero;
