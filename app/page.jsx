'use client';

import Link from "next/link";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ReferenceList from "@/components/ReferenceList";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from '@/styles/styles.module.scss';


const HomePage = () => {

    return (
        <>
            <header>
                <NavBar/>
                <HeroSection backgroundImage="img/hero-home.jpg" phoneImage="img/hero-p-home.jpg" title="Globing Poprad s.r.o" subtitle="Surveyor and cartographic works"/>
            </header>
            <main>

            {/* Quote section */}
                <section className={styles.containerQuote}>
                    <h2>"We have many years of experience in the field of geodesy and cartography, and our company has modern measuring and calculation technology, with which it uses only the latest geodetic technologies and evaluation procedures."</h2>
                    <p>Vlastimil Maxim, CEO</p>
                </section>

                {/* Services section */}
                <section className={styles.containerServices}>
                    <h2>Services</h2>
                    <p>The company GLOBING POPRAD s.r.o. was established in March 1997 and we are among medium-sized companies on the Slovak geodetic works market. We offer a wide range of services in the field of geodesy and cartography. </p>
                    <div className={styles.containerServices_service1}>
                        <h2>Real estate cadastre</h2>
                    </div>
                    <div className={styles.containerServices_service2}>
                         <h2>Engineer surveying</h2>
                    </div>
                    <div className={styles.containerServices_service3}>
                        <h2>Land improvement projects</h2>
                    </div>
                </section>

            {/* Go to price offer section */}
                <section className={styles.containerPriceOffer}>
                    <h2>Let us make you a price offer</h2>
                    <img className={styles.containerPriceOffer_img1} src="/img/home-1.jpg" alt="Photo of surveyor on a machine."/>
                    <p className={styles.containerPriceOffer_p1}>In order for the company to be able to ensure 100% quality of all the work performed, from the beginning it promotes the tendency to employ only top university-educated experts, which makes it possible to provide a time-limited guarantee for the work performed.</p>
                    <img className={styles.containerPriceOffer_img2} src="/img/home-2.jpg" alt="Photo of surveyor machine on Leica on a building sight."/>
                    <div>
                        <p className={styles.containerPriceOffer_p2}>Our workers are members of the <a href="https://kgk.sk/" target="_blank">CHAMBER OF SURVEYORS AND CARTOGRAPHERS</a> and the <a href="http://www.kpu.sk/" target="_blank">CHAMBER OF LAND ADMINISTRATION</a>. The company is equipped with top measuring and computing technology, including GPS devices. Our company uses the MicroStation graphic system and KOKEŠ when processing measurement results and creating geodetic reports.</p>
                    
                        <Link href="/price-offer" className={styles.goToPage}>
                            <p>Request price offer</p>  
                            <img src="/svg/arrow-r.svg" alt="Arrow to right"/>
                        </Link>
                    </div>
                </section>

            {/* Go to references section */}
                <section className={styles.containerReferences}>
                    <h2>References</h2>
                    <p className={styles.p_strong}>Check out our latest projects we've worked on</p>
                    <ReferenceList  maxReferences={3}/>
                    <Link href="/references" className={styles.goToPage}>
                        <p>All references</p>  
                        <img src="/svg/arrow-r.svg" alt="Arrow to right"/>
                    </Link>
                </section>

                {/* Back to top button */}
                <BackToTopBtn/>
            </main>
            <Footer/>
        </>
  )};

export default HomePage;
