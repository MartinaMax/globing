'use client';

import styles from '@/styles/styles.module.scss'
import { useState, useEffect } from "react";

const BackToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Show the button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} className={styles.backToTop}>
                <img src="svg/arrow-up.svg" alt="Up arrow svg"/>
            </button>
        )
    );
};

export default BackToTopBtn;