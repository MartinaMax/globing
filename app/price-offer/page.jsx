// 'use client';

// import NavBar from "@/components/NavBar";
// import HeroSection from "@/components/HeroSection";
// import PhoneNmbrContact from "@/components/PhoneNmbrContact";
// import BackToTopBtn from "@/components/BackToTopBtn";
// import Footer from "@/components/Footer";
// import styles from '@/styles/styles.module.scss';
// import { useState, useEffect } from "react";
// import React, { useState } from "react";

// const PriceOfferPage = () => {

//     const [query, setQuery] = useState("");
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//     const dropdownItems = ["Option 1", "Option 2", "Option 3", "Another Option"];
  
//     // const filteredItems = dropdownItems.filter((item) =>
//     //   item.toLowerCase().includes(query.toLowerCase())
//     // );
  
//     // const handleInputChange = (e) => {
//     //   setQuery(e.target.value);
//     //   setIsMenuOpen(e.target.value.length > 0); // Open the menu if there is input
//     // };
  
//     // const handleSelect = (value) => {
//     //   setQuery(value); // Set the selected value to the input
//     //   setIsMenuOpen(false); // Close the menu
//     // };

//     const CustomDropdown = ({ options }) => {
//         const [isOpen, setIsOpen] = useState(false);
//         const [selected, setSelected] = useState("Choose an option");
      
//         const toggleDropdown = () => setIsOpen(!isOpen);
      
//         const handleSelect = (option) => {
//           setSelected(option);
//           setIsOpen(false);
//         };
  
  

//     return (
//     <>
//         <header>
//             <NavBar/>
//             <HeroSection backgroundImage="img/hero-price.jpg" phoneImage="img/hero-price.jpg" title="Price offer"/>
//         </header>
//         <main className={styles.mainPrice}>
//             <h2>Žiadosť o cenovú ponuku</h2>

//         {/* Services & Price offer form section */}
//             <section className={styles.containerServicesPrice}>
//             {/* Services */}
//                 <article className={styles.articleServices}>
//                 <h2>Služby:</h2>
                
//                     {/* */}
//                     <div>
//                         <p className={styles.p_strong}>Kataster nehnuteľností</p>
//                         <ul>
//                             <li>vyhotovenie geometrických plánov</li>
//                             <li>vytýčenie hraníc pozemkov</li>
//                             <li>vyhotovenie elaborátu adresného bodu</li>
//                         </ul>
//                     </div>

//                     {/* */}
//                     <div>
//                         <p className={styles.p_strong}>Inžinierska geodézia</p>
//                         <ul>
//                             <li>vytýčenie stavieb</li>
//                             <li>budovanie vytyčovacích sietí</li>
//                             <li>vyhotovenie účelových máp veľkých mierok</li>
//                             <li>zameranie podzemných a nadzemných vedení</li>
//                             <li>kontrolné merania a zamerania skutočného vyhotovenia stavebných objektov</li>
//                             <li>geometrické zameranie a vyhotovenie dokumentácie skutočného stavu budov</li>
//                             <li>meranie posunov stavebných objektov</li>
//                             <li>zameranie žeriavových dráh 3D modely objekto</li>
//                         </ul>
//                     </div>

//                     {/* */}
//                     <div>
//                         <p className={styles.p_strong}>Projekty pozemkových úprav</p>
//                     </div>
//                 </article>

//             {/* Price offer */}
//                 <article className={styles.formPriceOffer}>
//                     <form action="post">
                     
//                         <div className={styles.row}>
//                             <div>
//                                 <label htmlFor="name">Name*</label>
//                                 <input type="text" id='name' name="name"/>
//                             </div>
//                             <div>
//                                 <label htmlFor="surname">Surname*</label>
//                                 <input type="text" id='surname' name="surname"/>
//                             </div>
//                         </div>
                    
                    
                        
//                         <div className={styles.row}>
//                             <div>
//                                 <label htmlFor="phone_nmbr">Phone number*</label>
//                                 <input type="text" id='phone_nmbr' name="phone_number"/>
//                             </div>
//                             <div>
//                                 <label htmlFor="email">Email*</label>
//                                 <input type="email" id='email' name="email"/>
//                             </div>
//                         </div>

//                         <div className={`${styles.row} ${styles.row_three_cols}`}>
//                             <div>
//                                 <label htmlFor="cadastral">Cadastral territory*</label>
//                                 <input type="text" id='cadastral' name="cadastral" />
//                             </div>
//                             <div>
//                                 <label htmlFor="parcel-nmbr">Parcel number*</label>
//                                 <input type="text" id='parcel-nmbr' name="parcel-nmbr"/>
//                             </div>
//                             <div>
//                                 <label htmlFor="municipality">Municipality*</label>
//                                 <input type="text" id='municipality' name="municipality"/>
//                             </div>
//                         </div> 
                      
                        
//                         <div>
//                             <label htmlFor="subject">Subject</label>
//                             {/* <input type="text" id='subject' name="subject"/> */}
//                             <div className={`custom-dropdown ${isOpen ? "active" : ""}`}>
//       <div className="dropdown-header" onClick={toggleDropdown}>
//         <span className="selected-option">{selected}</span>
//         <span className="arrow">&#9660;</span>
//       </div>
//       <ul className="dropdown-menu">
//         {options.map((option, index) => (
//           <li key={index} onClick={() => handleSelect(option)}>
//             {option}
//           </li>
//         ))}
//       </ul>
//     </div>  
//                         </div>                               
   
//                         <div>  
//                             <label htmlFor="message">Message</label>
//                             <textarea name="message" id="message"></textarea>
//                         </div>
                        
//                         <button className={styles.submitBtn}> Submit </button>
//                     </form>
//                 </article>
//             </section>

//         {/* Contact Section */}
//             <section>
//                 {/* Phone number contact */}
//                 <PhoneNmbrContact title="Alebo nás kontaktujte"/>
//             </section>

//         {/* Back to top button */}
//             <BackToTopBtn/>
      
//         </main>
//         <Footer/>
//     </>
//     );
// };

// export default PriceOfferPage;


"use client";

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from '@/styles/styles.module.scss';
import { useState } from "react";

const PriceOfferPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose an option");
  const dropdownItems = ["VYTYČENIE POZEMKU", "VYHOTOVENIE GEOMETRICKÉHO PLÁNU POLOHOPISNÉ A VÝSKOPISNÉ ZAMERANIE", "INE"];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <>
      <header>
        <NavBar />
        <HeroSection
          backgroundImage="img/hero-price.jpg"
          phoneImage="img/hero-price.jpg"
          title="Price offer"
        />
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