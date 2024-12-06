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
                    <div>
                        <img src="#" alt="#" />
                        <img src="#" alt="#" />
                    </div>

                {/* Contact form */}
                    <div>
                        <form action="post">
                            <label htmlFor="name"></label>
                            <input type="text" id='name' name="name" />
                            <label htmlFor="surname"></label>
                            <input type="text" />
                            <label htmlFor="phone number"></label>
                            <input type="text" />
                            <label htmlFor="email"></label>
                            <input type="text" />
                            <label htmlFor="subject"></label>
                            <input type="text" />
                            <label htmlFor="message"></label>
                            <textarea name="message" id=""></textarea>

                            <button>Submit</button>
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