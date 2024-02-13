import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiShoppingCart } from "react-icons/ti";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const links = [
        { name: "Home", link: 1 },
        { name: "About", link: 2 },
        { name: "Details", link: 3 },
        { name: "Contact", link: 4 },
    ];

    return (
        <div className="z-50">
            <div className='flex w-full md:h-25 bg-blue-900 justify-between items-center p-7 md:relative z-2'>

                <h1 className="text-2xl text-white text-bold">King
                <span className="text-3xl font-bold text-orange-600 cursor-pointer  ">
                    Hotsopt
                </span>
                </h1>
                <div className="md:hidden text-white mr-7 cursor-pointer transition-all duration-500 z-10" onClick={() => setIsActive(!isActive)}>
                    {isActive ? <FaTimes className="text-white text-2xl z-10 absolute top-5 right-6 m-4 mt-4" /> : <FaBars className="text-white text-2xl" />}
                </div>
            </div>
            {/* Side navigation */}
            <ul className={`md:hidden bg-blue-900 text-white absolute top-0 z-1 h-screen w-full left-0 flex flex-col  gap-10  items-center transition-all duration-500 ${isActive ? "block" : "hidden"}`}>
                {links.map(link => (
                    <li className="text-white py-4 px-6 text-3xl hover:bg-gray-700" key={link.link}>
                        <a href="/">{link.name}</a>
                    </li>
                ))}
            </ul>
            {/* Regular navigation for medium and larger screens */}
            <ul className="hidden md:flex md:absolute top-0 right-0 mt-9 mr-3">
    {links.map(link => (
        <li className="text-white hover:opacity-50 text-2xl mr-10" key={link.link}>
            <a href="/" className="text-white">{link.name}</a>
        </li>
    ))}
    <button><TiShoppingCart className="cursor-pointer text-white" size={30} /></button>
</ul>

        </div>
    );
};

export default Nav;
