'use client';

import NavBar from "@/components/NavBar";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styles from '@/styles/styles.module.scss';


const ContactPage = () => {
    
    return (
        <>
            <header>
                <NavBar/>
                <HeroSection  backgroundImage="img/hero-contact.jpg" phoneImage="img/hero-contact.jpg" title="Contact"/>
            </header>
            <main className={styles.mainContact}>
      
                {/* Phone number contact Section */}
                <section>
                    <PhoneNmbrContact title="Contact or visit us"/>
                </section>

                {/* IMGs and Contact form section */}
                <section className={styles.containerImgForm}>

                {/* IMGs */}
                    <div className={styles.containerImg}>
                        <img src="/img/globing-building.jpg" alt="Photo of an entrance to GLOBING Poprad."/>
                        <img src="/img/map.png" alt="Image of Globing Poprad on Google maps" />
                    </div>

                {/* Contact form */}
                    <div className={styles.containerForm_C}>
                        <form action="post">
                        
                        <div className={styles.row}>
                            <div>
                                <label htmlFor="name">Name*</label>
                                <input type="text" id='name' name="name" />
                            </div>
                            <div>
                                <label htmlFor="surname">Surname*</label>
                                <input type="text" id="surname" name="surname" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                                <label htmlFor="phone_nmbr">Phone number*</label>
                                <input type="text" id="phone_nmbr" name="phone_nmbr"  />
                            </div>

                            <div>
                                <label htmlFor="email">Email*</label>
                                <input type="text" />
                            </div>
                        </div>
                            
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" />
                            </div>
                            
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id=""></textarea>
                            </div>

                            <button className={styles.submitBtn}>Send</button>
                        </form>
                    </div>
                </section>

            {/* Back to top button */}
                <BackToTopBtn/>
            </main>
            <Footer/>
        </>
    );
};

export default ContactPage;