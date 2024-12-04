'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import navigation from '@/styles/components/components.module.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen is mobile
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={navigation.navbar}>
        {/* Logo */}
            <div className={ navigation.containerLogo}>
                <Link href="/" >
                    <img src="/img/globing-logo.png" alt="Globing poprad logo"  className={ navigation.logo}/>
                </Link>
            </div>

        {/* Burger menu icon */}
            <div className={navigation.containerIcon}>
                {isMobile && (
                    <img src="/svg/burger-menu.svg" alt="Burger menu icon" className={ navigation.burgerIcon} onClick={toggleMenu}/>
                )}
            </div>

        {/* Desktop Menu */}
        {!isMobile && (
            <nav className={ navigation.desktopMenu}>
                <Link href="/price-offer">Price offer</Link>
                <Link href="/references">References</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && (
            <div
                className={`${navigation.mobileMenu} ${
                isMenuOpen ? navigation.dropdownVisible : ""
                }`}
            >
                <div className={navigation.dropdownHeader}>
                    <div className={navigation.dropdownLogo}>
                        <Link href="/"  onClick={toggleMenu}>
                            <img src="/img/globing-logo.png" alt="Globing Poprad Logo" className={ navigation.logo}/>
                        </Link>
                    </div>

                    <div className={navigation.containerIcon}>
                        <img src="/svg/close.svg" alt="Close icon" className={navigation.buttonClose} onClick={toggleMenu} />
                    </div>
                </div>
                <nav className={navigation.navLinks}>
                    <Link href="/price-offer"><h1>Price offer</h1></Link>
                    <Link href="/references"><h1>References</h1></Link>
                    <Link href="/contact"><h1>Contact</h1></Link>
                </nav>
            </div>
        )}
        </div>
    );
};

export default Navbar;