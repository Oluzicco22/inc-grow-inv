import React from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <img src={Logo} alt="Logo"></img>
            <Menu size={24} strokeWidth={2.4} className="text-[#292727]"/>
        </nav>
    );
};

export default Navbar;
