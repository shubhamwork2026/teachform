import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <nav className="flex justify-between h-[70px] items-center px-4 sm:px-8">
                <p className="font-bold text-[18px]">TeachForm</p>
                <ul className="hidden sm:flex gap-8 sm:items-center">
                    <p>Pricing</p>
                    <p>Contact</p>
                    <p className="border-b-3 leading-7">Get Started</p>
                </ul>
                <div className="sm:hidden">
                    <GiHamburgerMenu size={28} onClick={() => setShowMenu(!showMenu)}/>
                </div>
            </nav>
            {
                showMenu &&
                <ul className="flex-col px-4">
                    <p className="py-[15px]">Pricing</p>
                    <p className="py-[15px]">Contact</p>
                    <p className="py-[15px]">Get Started</p>
                </ul>
            }
        </>
    );
}