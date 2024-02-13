import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { name: "Home", link: 1 },
        { name: "About", link: 2 },
        { name: "Details", link: 3 },
        { name: "Contact", link: 4 },
    ];

    return (
        <div>
            <div className='flex w-full md:h-25 bg-gray-800 justify-between items-center p-10 md:relative z-2'>
                <span className="text-3xl underline text-white cursor-pointer ">
                    PenPress
                </span>
                <div className="md:hidden text-white mr-7 cursor-pointer transition-all duration-500" onClick={() => setNav(!nav)}>
                    {nav ? <FaTimes className="text-white text-2xl z-50 top-6 right-9 m-4" /> : <FaBars className="text-white text-2xl" />}
                </div>
            </div>
            {/* Side navigation */}
            <ul className={`md:hidden bg-gray-800 text-white absolute top-10 z-auto h-screen w-full left-0 flex flex-col  gap-10  items-center transition-all duration-500 ${nav ? "block" : "hidden"}`}>
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
    <button className='hidden md:flex bg-gray-600 p-2 text-2xl text-white rounded '>Get started</button>
</ul>

        </div>
    );
};

export default Navbar;
