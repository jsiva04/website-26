/** @paper-design/shaders-react@0.0.71 */
import { useState, useEffect } from 'react';
import { Dithering, ImageDithering } from '@paper-design/shaders-react';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YV0JB4NKMV5BXA7B6RE5Y
 * on Jan 30, 2026
 */
export default function ({ onBack, isLightMode, setIsLightMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`[font-synthesis:none] antialiased min-h-screen w-full relative transition-colors duration-500 ${isLightMode ? 'bg-white' : 'bg-black'}`}>
      {/* Header - Absolute */}
      <div className="absolute top-10 md:top-10 right-4 md:right-10 flex items-center gap-2 md:gap-4 z-50">
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] cursor-pointer transition-all duration-500 hover:translate-x-1 ${isLightMode ? 'text-black' : 'text-white'}`}
        >
          {isLightMode ? '☀' : '☾'}
        </button>
        <div className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`}>
          janahan siva
        </div>
      </div>

      {/* Back button - Absolute */}
      <div onClick={onBack} className="absolute top-4 left-4 md:top-[10px] md:left-[10px] cursor-pointer w-[80px] h-[80px] md:w-[170px] md:h-[170px] z-50">
        <Dithering speed={1} shape="sphere" type="4x4" size={4} scale={0.6} frame={444269.99999996135} colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full" />
      </div>

      {/* Main Content - Flow Layout */}
      <div className="px-4 md:px-10 pt-28 md:pt-[200px] pb-8 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column - Current and Links */}
        <div className="flex flex-col gap-8 md:gap-16 md:min-w-[400px]" style={{ paddingLeft: isMobile ? '0' : '5rem', paddingTop: isMobile ? '6rem' : '12rem' }}>
          {/* Current Section */}
          <div className="flex flex-col gap-4">
            <div className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '1rem' : '0' }}>
              current
            </div>
            <a href="https://getconvene.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - convene
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
            <a href="https://www.mcmaster.ca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - tron @ mac
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
            <a href="https://www.mcmaster.ca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - software eng
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4">
            <div className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '1rem' : '0' }}>
              links
            </div>
            <a href="https://www.github.com/jsiva04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - github
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
            <a href="https://www.linkedin.com/in/jan-siva" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - linkedin
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
            <a href="mailto:sivanj1@mcmaster.ca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
              <div className={`text-xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ paddingLeft: isMobile ? '2rem' : '0' }}>
                - email
              </div>
              <img src="/assets/arrow.png" alt="" className="w-4 h-4 md:w-5 md:h-5" style={{ filter: isLightMode ? 'invert(1)' : 'none', marginRight: isMobile ? '1rem' : '0', transition: 'filter 0.5s ease' }} />
            </a>
          </div>
        </div>

        {/* Right Column - Image Dithering */}
        <div className="w-full md:flex-1 h-[300px] md:h-[600px]">
          <ImageDithering
            originalColors={false}
            type="2x2"
            size={3}
            colorSteps={1}
            image="https://workers.paper.design/file-assets/01KG7WVPYVQ3V97H6A2SJ0XGQ5/01KG7YYKJ5N9G2JNZ5Z3BRR82P.png"
            scale={1}
            fit="cover"
            colorHighlight="#00000000"
            colorBack="#00000000"
            colorFront="#9D90E5"
            className="w-full h-full animate-pulse-fade rounded-lg"
            style={{ marginTop: isMobile ? '0' : '8rem' }}
          />
        </div>
      </div>
    </div>
  );
}
