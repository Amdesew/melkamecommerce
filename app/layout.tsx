"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import myimage from "@/public/favicon.ico"
import React, { useState } from 'react';


const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen"> 
          <nav className="bg-orange-400 p-4 border-b-2 border-red-400">
            <div className="container mx-auto flex justify-between items-center">      
                <div className="text-white font-bold text-xl">
                    <Image src={myimage} alt="Logo" className="inline h-16 w-16 rounded-full"/>
                    <Link href="/">Melkam Ecommerce</Link>
                </div>
                <div className="hidden md:flex  gap-5">
                    <Link href="/" className="text-black hover:text-white">Home</Link>
                    <Link href="/pages/natural_products" className="text-black hover:text-white">Natural Products</Link>
                    <Link href="/pages/car_spare" className="text-black hover:text-white">Car Spare</Link>
                    <Link href="#" className="text-black hover:text-white">About Us</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>    
                <div className={`mobile-menu ${isMenuOpen ? '' : 'hidden'} md:hidden`}>
                    <Link href="/" className="block px-4 py-2 text-sm text-white">Home</Link>
                    <Link href="/pages/natural_products" className="block px-4 py-2 text-sm text-white">Natural Products</Link>
                    <Link href="/pages/car_spare" className="block px-4 py-2 text-sm text-white">Car Spare</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-white">About Us</Link>
                </div>        
            </div> 
          </nav>

          <main className="flex-grow">     
            {children}
          </main> 

          <div className="relative inset-x-0 bottom-0">
            <footer className="py-4 bg-orange-400 text-black">
              <div className="container mx-auto px-4 text-center">
                <p>©️Melkam Ecommerce(2024)</p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Layout;


