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
                <HeroSection backgroundImg="#" phoneImage="img/Horse.jpg" title="Globing Poprad s.r.o" subtitle=""/>
            </header>
            <main>

            {/* Quote section */}
                <section className={styles.containerQuote}>
                    <h2>“V oblasti geodézie a kartografie máme dlhoročné skúsenosti a naša firma disponuje modernou meračskou a výpočtovou technikou, pomocou ktorej používa len najnovšie geodetické technológie a vyhodnocovacie postupy.”</h2>
                    <p>Vlastimil Maxim, CEO</p>
                </section>

                {/* Services section */}
                <section className={styles.containerServices}>
                    <h1>Služby</h1>
                    <p >Spoločnosť GLOBING POPRAD s.r.o. vznikla v marci 1997 a na slovenskom trhu geodetických prác sa radíme medzi stredne veľké spoločnosti. Ponúkame široké spektrum služieb v oblasti geodézie a kartografie. </p>
                    <div>
                        <h2>Kataster nehnuteľností</h2>
                    </div>
                    <div>
                         <h2>Inžinierska geodézia</h2>
                    </div>
                    <div>
                        <h2>Projekty pozemkových úprav</h2>
                    </div>
                </section>

            {/* Go to price offer section */}
                <section className={styles.containerPriceOffer}>
                    <h1>Nechajte si od nás urobiť cenovú ponuku</h1>
                    <img src="#" alt="#" />
                    <p className={styles.containerPriceOffer_p}>Aby firma mohla zabezpečiť 100% kvalitu všetkých vykonaných prác od začiatku presadzuje tendenciu zamestnávať iba špičkovo vysokoškolsky vzdelaných odborníkov, čo umožňuje na vykonané práce poskytnúť časovo neobmedzenú záruku.</p>
                    <img src="#" alt="#" />
                    <p className={styles.containerPriceOffer_p}>Naši pracovníci sú členmi <a href="#">KOMORY GEODETOV A KARTOGRAFOV</a> a <a href="#">KOMORY POZEMKOVÝCH ÚPRAV</a>. Spoločnosť je vybavená špičkovou meračskou a výpočtovou technikou vrátane GPS aparatúr. Naša firma pri spracovaní výsledkov merania a vytváraní geodetických elaborátov využíva grafický systém MicroStation a KOKEŠ.</p>
                    
                    <Link href="/price-offer" className={styles.goToPage}>
                        <p>Žiadosť o cenovú ponuku</p>  
                        <img src="/svg/arrow-r.svg" alt="#" />
                    </Link>
                </section>

            {/* Go to references section */}
                <section className={styles.containerReferences}>
                    <h1>Referencie</h1>
                    <h2>Pozrite si naše posledné projekty, na ktorých sme pracovali</h2>
                    <ReferenceList/>
                    <Link href="/references" className={styles.goToPage}>
                        <p>Všetky referencie</p>  
                        <img src="/svg/arrow-r.svg" alt="#" />
                    </Link>
                </section>

                {/* Back to top button */}
                <BackToTopBtn/>
            </main>
            <Footer/>
        </>
  )};

export default HomePage;
