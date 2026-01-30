/** @paper-design/shaders-react@0.0.71 */
import { useState } from 'react';
import { Dithering } from '@paper-design/shaders-react';
import Copy from './copy.jsx';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YGVC1MD5C5E4B4MY0ZEDD
 * on Jan 30, 2026
 */
export default function () {
  const [showCopy, setShowCopy] = useState(false);

  if (showCopy) {
    return <Copy onBack={() => setShowCopy(false)} />;
  }

  return (
    <div className="w-full h-full bg-black">
      <Dithering speed={1} shape="swirl" type="2x2" size={8} scale={1} frame={1190090.0999999435} colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full opacity-100 absolute" />
      <div onClick={() => setShowCopy(true)} className="absolute size-full cursor-pointer">
        <Dithering speed={1} shape="sphere" type="4x4" size={8} scale={0.49} frame={1170148.7999999495} colorBack="#00000000" colorFront="#9D90E5" className="absolute size-full" />
      </div>
    </div>
  );
}
