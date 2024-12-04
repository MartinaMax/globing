'use client';

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ReferenceList from "@/components/ReferenceList";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";

const ReferencesPage = () => {

    return (
    <>
        <header>
            <NavBar/>
            <HeroSection  backgroundImg="#" title="References"/>
        </header>
        <main>
            <h1></h1>

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