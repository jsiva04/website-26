/** @paper-design/shaders-react@0.0.71 */
import { useState, useEffect } from 'react';
import { Dithering } from '@paper-design/shaders-react';
import Copy from './copy.jsx';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YGVC1MD5C5E4B4MY0ZEDD
 * on Jan 30, 2026
 */
export default function () {
  const [showCopy, setShowCopy] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    const saved = localStorage.getItem('lightMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('lightMode', JSON.stringify(isLightMode));
  }, [isLightMode]);

  const handleTransition = (toCopy) => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowCopy(toCopy);
      setIsAnimating(false);
    }, 300);
  };

  if (showCopy) {
    return (
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <Copy onBack={() => handleTransition(false)} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      </div>
    );
  }

  return (
    <div className={`w-full h-full min-h-screen transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} ${isLightMode ? 'bg-white' : 'bg-black'}`}>
      <Dithering speed={1} shape="swirl" type="2x2" size={8} scale={1} frame={1190090.0999999435} colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full opacity-100 absolute" />
      <div onClick={() => handleTransition(true)} className="absolute size-full cursor-pointer">
        <Dithering speed={1} shape="sphere" type="4x4" size={8} scale={0.49} frame={1170148.7999999495} colorBack="#00000000" colorFront="#9D90E5" className="absolute size-full" />
      </div>
    </div>
  );
}
