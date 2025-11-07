import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 z-50">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="text-gray-800 hover:text-gray-900">
                <ArrowLeft size={22} />
            </button>

            {/* Menu Button */}
            <button onClick={onMenuClick} className="text-gray-800 hover:text-gray-900">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
};

export default Topbar;
