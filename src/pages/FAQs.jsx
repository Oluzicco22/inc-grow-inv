import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Topbar from "../components/TopBar.jsx"; // ✅ import Topbar

const faqs = [
    {
        question: "What is this investment scheme about?",
        answer:
            "This scheme allows users to invest a small amount and get returns within a short period, focusing on transparency and community sustainability.",
    },
    {
        question: "How does profit distribution work?",
        answer:
            "Profits are distributed according to the plan you choose. Each plan offers different timelines and return rates.",
    },
    {
        question: "Is my investment guaranteed?",
        answer:
            "Yes, every investment is backed by a verified structure ensuring reliability and prompt payments.",
    },
    {
        question: "How long does it take to receive pay?",
        answer:
            "Payments are typically processed within 24 hours after your investment cycle completes.",
    },
    {
        question: "How do I recycle or reinvest?",
        answer:
            "You can easily reinvest from your dashboard after completing your first cycle. Recycling keeps your earnings growing.",
    },
];

const FAQs = ({ onMenuClick }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white min-h-screen">
            <Topbar onMenuClick={onMenuClick} />

            <div className="px-6 py-12">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">FAQs</h2>

                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-4 py-3 text-left"
                            >
                                <span className="text-gray-800 text-[15px] font-medium">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-200 ${
                                        openIndex === index ? "rotate-180 text-gray-900" : "text-gray-600"
                                    }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
