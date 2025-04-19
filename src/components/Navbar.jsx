import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Jika scroll lebih dari tinggi layar pertama (Home), tampilkan navbar
            setShowNav(scrollY > window.innerHeight * 0.9);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showNav) return null; // Jangan tampilkan navbar jika belum scroll

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center gap-6">
                <Link to="home" smooth={true} duration={600} className="cursor-pointer hover:underline">Home</Link>
                <Link to="about" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:underline">About</Link>
                <Link to="projects" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:underline">Projects</Link>
                <Link to="contact" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:underline">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
