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
                <HeroSection  backgroundImg="#" title="Contact"/>
            </header>
            <main className={styles.mainContact}>
      
                {/* Phone number contact Section */}
                <section>
                    <PhoneNmbrContact title="Kontaktujte alebo nás navštívte"/>
                </section>

                {/* IMGs and Contact form section */}
                <section>

                {/* IMGs */}
                    <div className={styles.containerImg}>
                        <img src="/img/globing-entrance.jpg" alt="#" />
                        <img src="#" alt="#" />
                    </div>

                {/* Contact form */}
                    <div className={styles.containerForm_C}>
                        <form action="post">
                            <label htmlFor="name">Name*</label>
                            <input type="text" id='name' name="name" />
                            <label htmlFor="surname">Surname*</label>
                            <input type="text"/>
                            <label htmlFor="phone number">Phone number*</label>
                            <input type="text" />
                            <label htmlFor="email">Email*</label>
                            <input type="text" />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" />
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id=""></textarea>

                            <button className={styles.submitBtn}>Submit</button>
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