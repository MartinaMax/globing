'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; 
import styles from '@/styles/styles.module.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef(null); 

    const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (href) => pathname === href;
  

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 992);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      // Handle clicking outside of the menu
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Close the menu if clicked outside
          }
        };
    
        if (isMenuOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isMenuOpen]);

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
                <Link className={`${styles.desktopMenu_link1} ${isActive('/price-offer') ? styles.active : ""}`} href="/price-offer">Price offer</Link>
                <Link className={`${styles.desktopMenu_link2} ${isActive('/references') ? styles.active : ""}`} href="/references">References</Link>
                <Link className={styles.contactBtn} href="/contact">Contact</Link>
            </nav>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && (
            <div
                ref={dropdownRef}
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
                    <Link href="/price-offer" className={isActive('/price-offer') ? styles.active : ''}><h1>Price offer</h1></Link>
                    <Link href="/references" className={isActive('/references') ? styles.active : ''}><h1>References</h1></Link>
                    <Link href="/contact" className={isActive('/contact') ? styles.active : ''}><h1>Contact</h1></Link>
                </nav>
            </div>
        )}
        </div>
    );
};

export default Navbar;