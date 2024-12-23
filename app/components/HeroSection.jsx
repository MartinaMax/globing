'use client'

import styles from '@/styles/styles.module.scss';

const Hero = ({phoneImage, backgroundImage, title, subtitle }) => {
    return (
        <div className={styles.hero}>
            <picture>
                {/* Mobile image */}
                <source srcSet={phoneImage} media="(max-width: 900px)"/>
                {/* Default to desktop/tablet image */}
                <img src={backgroundImage} alt="Hero background" className={styles.image} />
            </picture>
      
            {/* Darker overlay */}
            <div className={styles.heroOverlay}></div>

            {/* Content */}
            <div className={styles.heroContent}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <img className={styles.arrow_down} src="svg/arrow-white.svg" alt="Arrow down"/>
            </div>
           
        </div>
    );
};

export default Hero;