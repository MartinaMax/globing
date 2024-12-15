'use client';

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from '@/styles/styles.module.scss';
import { useState, useEffect } from "react";

const PriceOfferPage = () => {

    const [query, setQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const dropdownItems = ["Option 1", "Option 2", "Option 3", "Another Option"];
  
    const filteredItems = dropdownItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
      setIsMenuOpen(e.target.value.length > 0); // Open the menu if there is input
    };
  
    const handleSelect = (value) => {
      setQuery(value); // Set the selected value to the input
      setIsMenuOpen(false); // Close the menu
    };
  
  

    return (
    <>
        <header>
            <NavBar/>
            <HeroSection backgroundImg="#" title="Price offer"/>
        </header>
        <main className={styles.mainPhone}>
            <h2>Žiadosť o cenovú ponuku</h2>

        {/* Services & Price offer form section */}
            <section>
            {/* Services */}
                <article>
                <h2>Služby</h2>
                
                    {/* */}
                    <div>
                        <p></p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    {/* */}
                    <div>
                        <p></p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    {/* */}
                    <div>
                        <p></p>
                    </div>
                </article>

            {/* Price offer */}
                <article className={styles.formPriceOffer}>
                    <form action="post">
                        <label htmlFor="name">Name*</label>
                        <input type="text"  id='name' name="name"/>
                        <label htmlFor="surname">Surname*</label>
                        <input type="text"  id='surname' name="surname"/>
                        <label htmlFor="phone_nmbr">Phone number*</label>
                        <input type="text"  id='phone_nmbr' name="phone_number"/>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id='email' name="email"/>
                        <label htmlFor="cadastral">Cadastral territory*</label>
                        <input type="text" id='cadastral' name="cadastral" />
                        <label htmlFor="parcel-nmbr">Parcel number*</label>
                        <input type="text" id='parcel-nmbr' name="parcel-nmbr"/>
                        <label htmlFor="municipality">Municipality*</label>
                        <input type="text" id='municipality' name="municipality"/>
                        
                        <label htmlFor="subject">Subject</label>
                        {/* <input type="text" id='subject' name="subject"/> */}
                       <div style={styles.dropdownContainer}>
        <select
        id="leaseAgreementPraha2"
        
        //value={formData.leaseAgreementPraha2}
        //onChange={handleChange}
        name="leaseAgreementPraha2"
      >
        <option value="" hidden>Choose</option>
        <option value="Mám" className={styles.selectOption}>hhh</option>
        <option value="Nemám" className={styles.selectOption}>hhh</option>
      </select>
      </div>                     
                        
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>

                        <button className={styles.submitBtn}> Submit </button>
                    </form>
                </article>
            </section>

        {/* Contact Section */}
            <section>
                {/* Phone number contact */}
                <PhoneNmbrContact title="Alebo nás kontaktujte"/>
            </section>

        {/* Back to top button */}
            <BackToTopBtn/>
      
        </main>
        <Footer/>
    </>
    );
};

export default PriceOfferPage;