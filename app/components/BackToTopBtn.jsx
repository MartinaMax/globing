'use client';

import styles from '@/styles/styles.module.scss'

const BackToTopBtn = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button onClick={scrollToTop} className={styles.backToTop}>
            <img src="svg/arrow-up.svg" alt="Up arrow svg"/>
        </button>
    );
};

export default BackToTopBtn;