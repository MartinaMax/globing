'use client';

import NavBar from "@/components/NavBar";
import PhoneNmbrContact from "@/components/PhoneNmbrContact";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";

const PriceOfferPage = () => {

    return (
    <body>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1></h1>

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
                <article>
                    <form action="post">
                        <label htmlFor="name"></label>
                        <input type="text" />
                        <label htmlFor="surname"></label>
                        <input type="text" />
                        <label htmlFor="phone number"></label>
                        <input type="text" />
                        <label htmlFor="email"></label>
                        <input type="text" />
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

                        <button></button>
                    </form>
                </article>
            </section>

        {/* Contact Section */}
            <section>
                <h1>Alebo nás kontaktujte</h1>
                {/* Phone number contact */}
                <PhoneNmbrContact/>
            </section>

        {/* Back to top button */}
            <BackToTopBtn/>
      
        </main>
        <Footer/>
    </body>
    );
};

export default PriceOfferPage;