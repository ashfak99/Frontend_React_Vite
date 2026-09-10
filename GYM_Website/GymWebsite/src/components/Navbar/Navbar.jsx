import { useState, useEffect } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import logo from '../../assets/logoNexus.png';
import './Navbar.css';

const NAVBAR_ITEMS = [
    { id: 1, text: 'Home', href: '#' },
    { id: 2, text: 'About Us', href: '#about' },
    { id: 3, text: 'Pricing', href: '#pricing' },
    { id: 4, text: 'Blog', href: '#blog' },
    { id: 5, text: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Close menu with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            
            {/* ================= DESKTOP / MAIN NAVBAR ================= */}
            <nav className="relative mx-auto flex h-24 max-w-[1400px] items-center px-6 lg:px-10">

                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center rounded-lg px-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <img
                        src={logo}
                        alt="Nexus Gym Logo"
                        className="h-16 w-auto object-contain md:h-[68px] lg:h-[72px]"
                    />
                </a>

                {/* Desktop Navigation - PERFECTLY CENTERED */}
                <ul
                    className="
                        absolute left-1/2 hidden
                        -translate-x-1/2
                        items-center gap-1
                        md:flex
                    "
                >
                    {NAVBAR_ITEMS.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className="
                                    block rounded-xl
                                    px-5 py-2.5
                                    text-[16px]
                                    font-semibold
                                    text-blue-600
                                    transition-all duration-200
                                    hover:bg-blue-600
                                    hover:text-white
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="ml-auto md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="
                            rounded-lg p-2
                            text-3xl
                            text-blue-600
                            transition-colors
                            hover:bg-blue-50
                            hover:text-blue-800
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                        aria-label={
                            isMobileMenuOpen ? 'Close menu' : 'Open menu'
                        }
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE BACKDROP ================= */}
            {isMobileMenuOpen && (
                <div
                    className="
                        fixed inset-0 z-40
                        bg-black/30
                        backdrop-blur-sm
                        md:hidden
                    "
                    onClick={toggleMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* ================= MOBILE SIDE MENU ================= */}
            <aside
                className={`
                    fixed top-0 right-0 z-50
                    h-full w-72
                    bg-white
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-in-out
                    md:hidden
                    ${
                        isMobileMenuOpen
                            ? 'translate-x-0'
                            : 'translate-x-full'
                    }
                `}
                aria-label="Mobile Navigation"
            >
                <div className="relative flex h-full flex-col px-8 pt-20">

                    {/* Close Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="
                            absolute top-6 right-6
                            rounded-lg p-1
                            text-3xl
                            text-blue-600
                            transition-colors
                            hover:bg-blue-50
                            hover:text-blue-800
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                        aria-label="Close menu"
                    >
                        <IoMdClose />
                    </button>

                    {/* Mobile Navigation */}
                    <ul className="flex flex-col items-end gap-5">
                        {NAVBAR_ITEMS.map((item) => (
                            <li
                                key={item.id}
                                className="w-full text-right"
                            >
                                <a
                                    href={item.href}
                                    className="
                                        block rounded-md
                                        px-2 py-2
                                        text-xl
                                        font-semibold
                                        text-blue-600
                                        transition-colors
                                        duration-200
                                        hover:text-blue-800
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-500
                                    "
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Footer */}
                    <div className="mt-8 flex flex-col items-end gap-4">
                        <div className="h-0.5 w-16 rounded-full bg-blue-100" />

                        <p className="text-xs text-blue-400">
                            © 2026 Nexus Gym
                        </p>
                    </div>
                </div>
            </aside>
        </header>
    );
}

export default Navbar;