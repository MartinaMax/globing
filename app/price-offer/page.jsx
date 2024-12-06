'use client';

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from '@/styles/styles.module.scss';

const PriceOfferPage = () => {

    return (
    <>
        <header>
            <NavBar/>
            <HeroSection backgroundImg="#" title="Price offer"/>
        </header>
        <main>
            <h2></h2>

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
                        <label htmlFor="name">Name</label>
                        <input type="text"  id='name' name="name"/>
                        <label htmlFor="surname">Surname</label>
                        <input type="text"  id='surname' name="surname"/>
                        <label htmlFor="phone_number">Phone number</label>
                        <input type="text"  id='phone_number' name="phone_number"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email"/>
                        <label htmlFor=""></label>
                        <input type="text" />
                        <label htmlFor=""></label>
                        <input type="text" />
                        <label htmlFor="city"></label>
                        <input type="text" />
                        <label htmlFor="subject"></label>
                        <input type="text" />
                        <label htmlFor="message"></label>
                        <textarea name="message" id=""></textarea>

                        <button className={styles.submitBtn}> Submit </button>
                    </form>
                </article>
            </section>

        {/* Contact Section */}
            <section>
                <h2 className={styles.containerContact_h2}> Alebo nás kontaktujte</h2>
                {/* Phone number contact */}
                <PhoneNmbrContact/>
            </section>

        {/* Back to top button */}
            <BackToTopBtn/>
      
        </main>
        <Footer/>
    </>
    );
};

export default PriceOfferPage;