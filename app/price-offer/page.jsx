"use client";

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from '@/styles/styles.module.scss';
import React, { useState, useEffect, useRef } from "react";

const PriceOfferPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose an option");
  const dropdownItems = [
    "VYTYČENIE POZEMKU",
    "VYHOTOVENIE GEOMETRICKÉHO PLÁNU POLOHOPISNÉ A VÝSKOPISNÉ ZAMERANIE",
    "INE"
  ];

  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Handle selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Attach listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <NavBar/>
        <HeroSection backgroundImage="img/hero-price.jpg" phoneImage="img/hero-p-price.jpg" title="Price offer"/>
      </header>
      <main className={styles.mainPrice}>
        <h2>Žiadosť o cenovú ponuku</h2>

        {/* Services & Price offer form section */}
        <section className={styles.containerServicesPrice}>
          {/* Services */}
          <article className={styles.articleServices}>
            <h2>Služby:</h2>

            <div>
              <p className={styles.p_strong}>Kataster nehnuteľností</p>
              <ul>
                <li>vyhotovenie geometrických plánov</li>
                <li>vytýčenie hraníc pozemkov</li>
                <li>vyhotovenie elaborátu adresného bodu</li>
              </ul>
            </div>

            <div>
              <p className={styles.p_strong}>Inžinierska geodézia</p>
              <ul>
                <li>vytýčenie stavieb</li>
                <li>budovanie vytyčovacích sietí</li>
                <li>vyhotovenie účelových máp veľkých mierok</li>
                <li>zameranie podzemných a nadzemných vedení</li>
                <li>kontrolné merania a zamerania skutočného vyhotovenia stavebných objektov</li>
                <li>geometrické zameranie a vyhotovenie dokumentácie skutočného stavu budov</li>
                <li>meranie posunov stavebných objektov</li>
                <li>zameranie žeriavových dráh 3D modely objektov</li>
              </ul>
            </div>

            <div>
              <p className={styles.p_strong}>Projekty pozemkových úprav</p>
            </div>
          </article>

          {/* Price offer form */}
          <article className={styles.formPriceOffer}>
            <form action="post">
              <div className={styles.row}>
                <div>
                  <label htmlFor="name">Name*</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label htmlFor="surname">Surname*</label>
                  <input type="text" id="surname" name="surname" />
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <label htmlFor="phone_nmbr">Phone number*</label>
                  <input type="text" id="phone_nmbr" name="phone_number" />
                </div>
                <div>
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>

              <div className={`${styles.row} ${styles.row_three_cols}`}>
                <div>
                  <label htmlFor="cadastral">Cadastral territory*</label>
                  <input type="text" id="cadastral" name="cadastral" />
                </div>
                <div>
                  <label htmlFor="parcel-nmbr">Parcel number*</label>
                  <input type="text" id="parcel-nmbr" name="parcel-nmbr" />
                </div>
                <div>
                  <label htmlFor="municipality">Municipality*</label>
                  <input type="text" id="municipality" name="municipality" />
                </div>
              </div>

              {/* Dropdown for Subject */}
              <div>
                <label htmlFor="subject">Subject</label>
                <div
                  ref={dropdownRef}

                className={`${styles.formSelect} ${isDropdownOpen ? styles.active : ""}`}
                >
                  <div className={styles.formSelect_input} onClick={toggleDropdown}>
                    <span className={styles.formSelect_option}>{selectedOption}</span>
                    <span className={styles.formSelect_arrow}>&#9660;</span>
                  </div>
                  {isDropdownOpen && (
                    <ul className={styles.formSelect_menu}>
                       
                      {dropdownItems.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button className={styles.submitBtn}>Submit</button>
            </form>
          </article>
        </section>

        {/* Contact Section */}
        <section>
          <PhoneNmbrContact title="Alebo nás kontaktujte" />
        </section>

        {/* Back to top button */}
        <BackToTopBtn />
      </main>
      <Footer />
    </>
  );
};

export default PriceOfferPage;