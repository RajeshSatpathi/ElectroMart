import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#F3F4F6]  fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl uppercase font-bold text-gray-600">
                            <span className='text-blue-700 uppercase font-extrabold '>Electro</span>Mart
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center uppercase">
                        <Link to="/" className="text-gray-900  font-bold text-sm hover:bg-blue-700 hover:text-white p-2 rounded ">Home</Link>
                        <Link to="/about" className="text-gray-900 font-bold text-sm hover:bg-blue-700 hover:text-white p-2 rounded">About</Link>
                        <Link to="/product" className="text-gray-900 font-bold text-sm hover:bg-blue-700 hover:text-white p-2 rounded">Product</Link>
                        <Link to="/about" className="text-gray-900 font-bold text-sm hover:bg-blue-700 hover:text-white p-2 rounded">Testmonial</Link>
                        <Link to="/contact" className="text-gray-900 font-bold text-sm hover:bg-blue-700 hover:text-white p-2 rounded">Contact</Link>
                    </div>
                    {/* icons */}
                    <div className="hidden md:flex space-x-8 items-center cursor-pointer ">
                        <IoSearch size={18} />
                        <FaUser size={18} />
                        <FaHeart size={18} />
                        <FaCartShopping size={18} />

                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-sm text-center">
                        <Link to="/" className="text-gray-900  font-bold text-sm block">Home</Link>
                        <Link to="/about" className="text-gray-900 font-bold text-sm block">About</Link>
                        <Link to="/about" className="text-gray-900 font-bold text-sm block">Product</Link>
                        <Link to="/about" className="text-gray-900 font-bold text-sm block">Testmonial</Link>
                        <Link to="/contact" className="text-gray-900 font-bold text-sm block">Contact</Link>
                        {/* icons */}
                        <div className="flex mt-3 space-x-8 items-center justify-center cursor-pointer ">
                            <IoSearch size={18} />
                            <FaUser size={18} />
                            <FaHeart size={18} />
                            <FaCartShopping size={18} />

                        </div>
                    </div>

                </>

            )}
        </nav>
    );
};

export default Navbar;
