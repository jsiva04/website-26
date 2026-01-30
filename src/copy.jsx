/** @paper-design/shaders-react@0.0.71 */
import { Dithering, ImageDithering } from '@paper-design/shaders-react';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YV0JB4NKMV5BXA7B6RE5Y
 * on Jan 30, 2026
 */
export default function ({ onBack, isLightMode, setIsLightMode }) {
  return (
    <div className={`[font-synthesis:none] antialiased min-h-screen w-full ${isLightMode ? 'bg-white' : 'bg-black'}`}>
      {/* Header - fixed on mobile, absolute on desktop */}
      <div className="fixed md:absolute top-4 md:top-10 right-4 md:right-10 flex items-center gap-2 md:gap-4 z-50">
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] cursor-pointer transition-transform duration-200 hover:translate-x-1 ${isLightMode ? 'text-black' : 'text-white'}`}
        >
          {isLightMode ? '☀' : '☾'}
        </button>
        <div className={`text-2xl md:text-[40px] leading-tight md:leading-12 font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
          janahan siva
        </div>
      </div>

      {/* Back button - fixed on mobile, absolute on desktop */}
      <div onClick={onBack} className="fixed md:absolute top-4 left-4 md:top-[10px] md:left-[10px] cursor-pointer w-[80px] h-[80px] md:w-[170px] md:h-[170px] z-50">
        <Dithering speed={1} shape="sphere" type="4x4" size={4} scale={0.6} frame={444269.99999996135} colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full" />
      </div>

      {/* Mobile Layout - Column */}
      <div className="md:hidden flex flex-col px-4 pt-28 pb-8 gap-8">
        {/* Current Section */}
        <div className="flex flex-col gap-4">
          <div className={`text-2xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
            current
          </div>
          <a href="https://getconvene.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - convene
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - tron @ mac
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - software eng
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          <div className={`text-2xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
            links
          </div>
          <a href="https://www.github.com/jsiva04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - github
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/jan-siva" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - linkedin
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
          <a href="mailto:sivanj1@mcmaster.ca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between transition-transform duration-200 hover:translate-x-1">
            <div className={`text-xl leading-tight font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              - email
            </div>
            <img src="/assets/arrow.png" alt="" className="w-4 h-4" />
          </a>
        </div>

        {/* Image Dithering */}
        <div className="w-full h-[300px] mt-4">
          <ImageDithering originalColors={false} type="2x2" size={3} colorSteps={1} image="https://workers.paper.design/file-assets/01KG7WVPYVQ3V97H6A2SJ0XGQ5/01KG7YYKJ5N9G2JNZ5Z3BRR82P.png" scale={1} fit="cover" colorHighlight="#00000000" colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full animate-pulse-fade" />
        </div>
      </div>

      {/* Desktop Layout - Absolute Positioning */}
      <div className="hidden md:block">
        <ImageDithering originalColors={false} type="2x2" size={3} colorSteps={1} image="https://workers.paper.design/file-assets/01KG7WVPYVQ3V97H6A2SJ0XGQ5/01KG7YYKJ5N9G2JNZ5Z3BRR82P.png" scale={1} fit="cover" colorHighlight="#00000000" colorBack="#00000000" colorFront="#9D90E5" className="w-200 h-120 absolute left-150 top-50 animate-pulse-fade" />
        <div className="absolute w-120 h-130 top-50 left-10 flex flex-col gap-y-10">
          <div className="relative w-120 h-60 opacity-100">
            <div className={`text-[40px] leading-12 w-[171px] h-[57px] absolute font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              current
            </div>
            <div className="[width:384px] h-12 absolute" style={{ translate: '52px 70px' }}>
              <a href="https://getconvene.com" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - convene
                </div>
                <div className="absolute size-5" style={{ translate: '364px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="[width:384px] h-12 absolute" style={{ translate: '52px 131px' }}>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - tron @ mac
                </div>
                <div className="absolute size-5" style={{ translate: '364px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="[width:384px] h-12 absolute" style={{ translate: '52px 192px' }}>
              <a href="#" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - software eng
                </div>
                <div className="absolute size-5" style={{ translate: '364px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-120 h-60 opacity-100">
            <div className={`text-[40px] leading-12 w-[171px] h-[57px] absolute font-['Pixelify_Sans',system-ui,sans-serif] ${isLightMode ? 'text-black' : 'text-white'}`}>
              links
            </div>
            <div className="w-[279px] h-12 absolute" style={{ translate: '52px 70px' }}>
              <a href="https://www.github.com/jsiva04" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - github
                </div>
                <div className="absolute size-5" style={{ translate: '259px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="w-[279px] h-12 absolute" style={{ translate: '52px 131px' }}>
              <a href="https://www.linkedin.com/in/jan-siva" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - linkedin
                </div>
                <div className="absolute size-5" style={{ translate: '259px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="w-[279px] h-12 absolute" style={{ translate: '52px 192px' }}>
              <a href="mailto:sivanj1@mcmaster.ca" target="_blank" rel="noopener noreferrer" className="block relative transition-transform duration-200 hover:translate-x-1">
                <div className={`text-[40px] leading-12 absolute font-['Pixelify_Sans',system-ui,sans-serif] size-fit ${isLightMode ? 'text-black' : 'text-white'}`}>
                  - email
                </div>
                <div className="absolute size-5" style={{ translate: '259px 15px' }}>
                  <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
