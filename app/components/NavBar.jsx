'use client'

import Link from 'next/link'

import { useState, useEffect } from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Check if the user has scrolled under the hero section
            setScrolled(window.scrollY > 760);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <nav>
        <Link href="/">
            <img src="/img/globing-logo.png" alt="Globing Poprad logo" />
        </Link>
        <Link href="/references">Referencie</Link>
        <Link href="/price-offer">Cenová ponuka</Link>
        <Link href="/contact">Kontact</Link>
      </nav>
    );
};
  
export default NavBar;