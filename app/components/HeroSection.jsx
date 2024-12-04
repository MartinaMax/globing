'use client'

const HeroSection = ({backgroundImg, title, subtitle}) => {
    return (
        <header style={{ backgroundImage: `url(${backgroundImg})` }}>
        
        {/* Darker overlay on the sides */}
        <div></div>
  
        {/* White separator line */}
        <div></div>
  
        {/* Content */}
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </header>
    );
};
  
export default HeroSection;