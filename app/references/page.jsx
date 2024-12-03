'use client';

import NavBar from "@/components/NavBar";
import ReferenceList from "@/components/ReferenceList";
import BackToTopBtn from "@/components/BackToTopBtn";
import Footer from "@/components/Footer";

const ReferencesPage = () => {

    return (
    <body>
        <header>
            <NavBar/>
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
    </body>
    );
};

export default ReferencesPage;