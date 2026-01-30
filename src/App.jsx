/** @paper-design/shaders-react@0.0.71 */
import { Dithering } from '@paper-design/shaders-react';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YGVC1MD5C5E4B4MY0ZEDD
 * on Jan 30, 2026
 */
export default function () {
  return (
    <div className="w-full h-full bg-black">
      <Dithering speed={1} shape="swirl" type="2x2" size={8} scale={1} frame={463647.4999999583} colorBack="#00000000" colorFront="#9D90E5" className="w-full h-full opacity-100 absolute" />
      <a href="https://paper.design" target="_blank" rel="noopener noreferrer" className="w-2/5 h-2/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dithering speed={1} shape="sphere" type="4x4" size={8} scale={1} frame={444269.99999996135} colorBack="#00000000" colorFront="#9D90E5" className="relative w-full h-full" />
      </a>
    </div>
  );
}
