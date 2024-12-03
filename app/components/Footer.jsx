'use client';

const Footer = () => {
    return (
      <footer>
        {/* Map Section */}

        {/* Consent section */}  
        <div>
            <a href="#">Ochrana osobných údajov</a>
            <a href="#">Zásady používania súborov cookies</a>
        </div>  

        {/* Company info section */}
            <div>
                <p>GLOBING POPRAD s.r.o.</p>
                <p>Dostojevského 3313/12, 058 01 Poprad, Slovensko</p>
                <ul>
                    <li>IČO: 36444499</li>
                    <li>DIČ: 2020016966</li>
                    <li>IČ DPH: SK2020016966</li>
                    <li>Zápis v obch. registri: OR OS Prešov</li>
                    <li>Číslo zápisu: vložka č. 10132/P</li>
                    
                </ul>
            </div>

        {/* Contact info section */}
            <div>
                <p>Kontakt</p>
                <ul>
                    <li>Tel., fax.: +421 52 7731 450</li>
                    <li>Mobil: +421 905 273 309</li>
                    <li> Mobil: +421 905 273 312</li>
                    <li>E-mail: globing@globing.sk</li>
                </ul>
            </div>

        {/* Copyright */}
        <p>&copy;2024 GLOBING POPRAD s.r.o All rights reserved</p>
      </footer>
    );
};
  
export default Footer;