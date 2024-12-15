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
                <HeroSection backgroundImage="img/hero-home.jpg" phoneImage="img/Horse.jpg" title="Globing Poprad s.r.o" subtitle=""/>
            </header>
            <main>

            {/* Quote section */}
                <section className={styles.containerQuote}>
                    <h2>“V oblasti geodézie a kartografie máme dlhoročné skúsenosti a naša firma disponuje modernou meračskou a výpočtovou technikou, pomocou ktorej používa len najnovšie geodetické technológie a vyhodnocovacie postupy.”</h2>
                    <p>Vlastimil Maxim, CEO</p>
                </section>

                {/* Services section */}
                <section className={styles.containerServices}>
                    <h2>Služby</h2>
                    <p>Spoločnosť GLOBING POPRAD s.r.o. vznikla v marci 1997 a na slovenskom trhu geodetických prác sa radíme medzi stredne veľké spoločnosti. Ponúkame široké spektrum služieb v oblasti geodézie a kartografie. </p>
                    <div className={styles.containerServices_service1}>
                        <h2>Kataster nehnuteľností</h2>
                    </div>
                    <div className={styles.containerServices_service2}>
                         <h2>Inžinierska geodézia</h2>
                    </div>
                    <div className={styles.containerServices_service3}>
                        <h2>Projekty pozemkových úprav</h2>
                    </div>
                </section>

            {/* Go to price offer section */}
                <section className={styles.containerPriceOffer}>
                    <h2>Nechajte si od nás urobiť cenovú ponuku</h2>
                    <img className={styles.containerPriceOffer_img1} src="/img/home-1.jpg" alt=""/>
                    <p className={styles.containerPriceOffer_p1}>Aby firma mohla zabezpečiť 100% kvalitu všetkých vykonaných prác od začiatku presadzuje tendenciu zamestnávať iba špičkovo vysokoškolsky vzdelaných odborníkov, čo umožňuje na vykonané práce poskytnúť časovo neobmedzenú záruku.</p>
                    <img className={styles.containerPriceOffer_img2} src="/img/home-2.jpg" alt="" />
                    <div>
                        <p className={styles.containerPriceOffer_p2}>Naši pracovníci sú členmi <a href="#">KOMORY GEODETOV A KARTOGRAFOV</a> a <a href="#">KOMORY POZEMKOVÝCH ÚPRAV</a>. Spoločnosť je vybavená špičkovou meračskou a výpočtovou technikou vrátane GPS aparatúr. Naša firma pri spracovaní výsledkov merania a vytváraní geodetických elaborátov využíva grafický systém MicroStation a KOKEŠ.</p>
                    
                        <Link href="/price-offer" className={styles.goToPage}>
                            <p>Žiadosť o cenovú ponuku</p>  
                            <img src="/svg/arrow-r.svg" alt=""/>
                        </Link>
                    </div>
                </section>

            {/* Go to references section */}
                <section className={styles.containerReferences}>
                    <h2>Referencie</h2>
                    <p className={styles.p_strong}>Pozrite si naše posledné projekty, na ktorých sme pracovali</p>
                    <ReferenceList/>
                    <Link href="/references" className={styles.goToPage}>
                        <p>Všetky referencie</p>  
                        <img src="/svg/arrow-r.svg" alt="Arrow to right" />
                    </Link>
                </section>

                {/* Back to top button */}
                <BackToTopBtn/>
            </main>
            <Footer/>
        </>
  )};

export default HomePage;
