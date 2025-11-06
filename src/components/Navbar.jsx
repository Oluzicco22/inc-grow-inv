import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Image, Info, FileText, User } from "lucide-react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Define your menu items and their routes
    const menuItems = [
        { name: "Packages", icon: <Image size={20} strokeWidth={1.8} />, path: "/packages" },
        { name: "About Us", icon: <Info size={20} strokeWidth={1.8} />, path: "/about" },
        { name: "FAQs", icon: <FileText size={20} strokeWidth={1.8} />, path: "/faq" },
        { name: "Contact Us", icon: <User size={20} strokeWidth={1.8} />, path: "/contact" },
    ];

    return (
        <nav className="relative flex items-center justify-between px-6 py-4 bg-white">
            <Link to="/">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
            </Link>

            {/* Menu Button */}
            <button onClick={toggleMenu}>
                {menuOpen ? (
                    <X size={26} strokeWidth={2.4} className="text-[#292727]" />
                ) : (
                    <Menu size={26} strokeWidth={2.4} className="text-[#292727]" />
                )}
            </button>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                />
            )}

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-white shadow-xl transform transition-transform duration-300 z-50 ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end items-center px-6 py-5 border-b border-gray-200">
                    <X
                        size={26}
                        strokeWidth={2.4}
                        className="text-[#292727]"
                        onClick={toggleMenu}
                    />
                </div>

                <ul className="mt-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-r-xl cursor-pointer transition-colors ${
                                        isActive ? "bg-gray-100" : "hover:bg-gray-100"
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-gray-800 text-[15px] font-medium">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
