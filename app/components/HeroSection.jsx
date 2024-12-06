'use client'

import styles from '@/styles/styles.module.scss';

const Hero = ({phoneImage, backgroundImage, title, subtitle }) => {
    return (
        <div className={`${styles.hero}`}>
            <picture>
                {/* Mobile image */}
                <source srcSet={phoneImage} media="(max-width: 768px)" />
                {/* Default to desktop/tablet image */}
                <img src={backgroundImage} alt="Hero background" className={styles.image} />
            </picture>
      
            {/* Darker overlay */}
            <div className={styles.heroOverlay}></div>

            {/* White separator line on descktop */}
            <div className={styles.separatorLine}></div>

            {/* Content */}
            <div className={styles.hero_content}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
};

export default Hero;