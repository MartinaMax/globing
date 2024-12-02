'use client'
import Link from 'next/link'

const NavBar = () => {
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