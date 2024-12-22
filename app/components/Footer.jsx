'use client';

import styles from '@/styles/styles.module.scss'

const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* Map Section */}
            <img src="/img/map.png" alt="Image of Globing Poprad on Google maps" />

        {/* Company info section */}
            <div className={styles.containerCompInfo}>
                <p className={styles.p_strong}>GLOBING POPRAD s.r.o.</p>
                <p>Dostojevského 3313/12, 058 01 Poprad, Slovensko</p>
                <ul>
                    <li>IČO: 36444499</li>
                    <li>DIČ: 2020016966</li>
                    <li>IČ DPH: SK2020016966</li>
                    <li>Registration in business registries: OR OS Prešov</li>
                    <li>Registration number: vložka č. 10132/P</li>
                    
                </ul>
            </div>

        {/* Contact info section */}
            <div className={styles.containerContactInfo}>
                <p className={styles.p_strong}>Contact</p>
                <ul>
                    <li>Phone, fax.: +421 52 7731 450</li>
                    <li>Mobile: +421 905 273 309</li>
                    <li> Mobile: +421 905 273 312</li>
                    <li>E-mail: globing@globing.sk</li>
                </ul>
            </div>

        {/* Consent section */}  
        <div className={styles.containerConsent}>
            <a href="/pdf/ochrana_osobnych_udajov.pdf" target='_blank'>Protection of personal data</a>
            <a href="#">Policy for the use of cookies</a>
        </div>  

        {/* Copyright */}
        <p className={styles.copyright}>&copy;2024 GLOBING POPRAD s.r.o All rights reserved</p>
      </footer>
    );
};
  
export default Footer;