"use client";

import { Calendar, Menu, X } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">MediBook</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/event-types" className="text-gray-700 hover:text-blue-600 transition">Book Appointment</Link>
                        <Link href="/medi-bot" className="text-gray-700 hover:text-blue-600 transition">Medi Bot</Link>
                        <a href="#cta" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</a>
                    </div>
                    
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <a href="#features" className="block text-gray-700 hover:text-blue-600 transition">Features</a>
                        <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600 transition">How It Works</a>
                        <a href="#cta" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center">Get Started</a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default NavBar