'use client';

import NavBar from "@/components/NavBar";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";


const ContactPage = () => {

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
      
                <h1>Kontaktujte alebo nás navštívte</h1>
                {/* Phone number contact Section */}
                <section>
                    <PhoneNmbrContact/>
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
                            <input type="text" />
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