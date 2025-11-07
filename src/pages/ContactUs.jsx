import React from "react";
import TopBar from "../components/TopBar.jsx";

const ContactUs = () => {
    return (
        <section className="min-h-screen bg-white px-6 py-12 text-gray-800 relative">
            {/* ✅ TopBar */}
            <TopBar />

            <h2 className="text-2xl font-bold text-center mb-8 mt-16">Contact Us</h2>

            <div className="max-w-md mx-auto space-y-4">
                <p className="text-center text-gray-600">
                    We'd love to hear from you! Fill out the form below and we’ll get back to you shortly.
                </p>

                <form className="flex flex-col gap-4 mt-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#7460E3] text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
