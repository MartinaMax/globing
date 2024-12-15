'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from '@/styles/styles.module.scss';

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
        <div className={styles.navbar}>
        {/* Logo */}
            <div className={styles.containerLogo}>
                <Link href="/" >
                    <img src="/img/globing-logo.png" alt="Globing poprad logo"  className={styles.logo}/>
                </Link>
            </div>

        {/* Burger menu icon */}
            <div className={styles.containerIcon}>
                {isMobile && (
                    <img src="/svg/burger-menu.svg" alt="Burger menu icon" className={styles.burgerIcon} onClick={toggleMenu}/>
                )}
            </div>

        {/* Desktop Menu */}
        {!isMobile && (
            <nav className={styles.desktopMenu}>
                <Link href="/price-offer">Price offer</Link>
                <Link href="/references">References</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && (
            <div
                className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.dropdownVisible : ""
                }`}
            >
                <div className={styles.dropdownHeader}>
                    <div className={styles.dropdownLogo}>
                        <Link href="/"  onClick={toggleMenu}>
                            <img src="/img/globing-logo.png" alt="Globing Poprad Logo" className={styles.logo}/>
                        </Link>
                    </div>

                    <div className={styles.containerIcon}>
                        <img src="/svg/close.svg" alt="Close icon" className={styles.buttonClose} onClick={toggleMenu} />
                    </div>
                </div>
                <nav className={styles.navLinks}>
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