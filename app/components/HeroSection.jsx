'use client'

import hero from '@/styles/components/components.module.scss';

const Hero = ({phoneImage, backgroundImage, title, subtitle }) => {
    return (
        <div className={`${hero.hero}`}>
            <picture>
                {/* Mobile image */}
                <source srcSet={phoneImage} media="(max-width: 768px)" />
                {/* Default to desktop/tablet image */}
                <img src={backgroundImage} alt="Hero background" className={hero.image} />
            </picture>
      
            {/* Darker overlay */}
            <div className={hero.heroOverlay}></div>

            {/* White separator line on descktop */}
            <div className={hero.separatorLine}></div>

            {/* Content */}
            <div className={hero.hero_content}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
};

export default Hero;