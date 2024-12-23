'use client';

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ReferenceList from "@/components/ReferenceList";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";
import styles from "@/styles/styles.module.scss";

const ReferencesPage = () => {

    return (
    <>
        <header>
            <NavBar/>
            <HeroSection  backgroundImage="img/hero-ref.jpg" phoneImage="img/hero-p-ref.jpg" title="References"/>
        </header>
        <main className={styles.mainReferences}>
            <h2>References</h2>

            {/* References section */}
            <section>
                <ReferenceList/>
            </section>

            {/* Back to top button */}
            <BackToTopBtn/>
      
        </main>
        <Footer/>
    </>
    );
};

export default ReferencesPage;