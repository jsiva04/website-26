/** @paper-design/shaders-react@0.0.71 */
import { Dithering, ImageDithering } from '@paper-design/shaders-react';

/**
 * from Paper
 * https://app.paper.design/file/01KG7WVPYVQ3V97H6A2SJ0XGQ5?page=01K4GP58P8JRM8PGBP0586VKYV&node=01KG7YV0JB4NKMV5BXA7B6RE5Y
 * on Jan 30, 2026
 */
export default function () {
  return (
    <div className="[font-synthesis:none] bg-black antialiased">
      <Dithering speed={1} shape="sphere" type="4x4" size={4} scale={0.6} frame={444269.99999996135} colorBack="#00000000" colorFront="#9D90E5" className="w-[170px] h-[170px] absolute" style={{ translate: '10px 10px' }} />
      <ImageDithering originalColors={false} type="2x2" size={3} colorSteps={1} image="https://workers.paper.design/file-assets/01KG7WVPYVQ3V97H6A2SJ0XGQ5/01KG7YYKJ5N9G2JNZ5Z3BRR82P.png" scale={1} fit="cover" colorHighlight="#00000000" colorBack="#00000000" colorFront="#9D90E5" className="w-200 h-120 absolute left-150 top-50" />
      <div className="absolute w-120 h-130 top-50 left-10 flex flex-col gap-y-10">
        <div className="relative w-120 h-60 opacity-100">
          <div className="text-[40px] leading-12 w-[171px] h-[57px] absolute text-white font-['Pixelify_Sans',system-ui,sans-serif]">
            current
          </div>
          <div className="[width:384px] h-12 absolute" style={{ translate: '52px 70px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - convene
            </div>
            <div className="absolute size-5" style={{ translate: '364px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="[width:384px] h-12 absolute" style={{ translate: '52px 131px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - tron @ mac
            </div>
            <div className="absolute size-5" style={{ translate: '364px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="[width:384px] h-12 absolute" style={{ translate: '52px 192px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - software eng
            </div>
            <div className="absolute size-5" style={{ translate: '364px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="relative w-120 h-60 opacity-100">
          <div className="text-[40px] leading-12 w-[171px] h-[57px] absolute text-white font-['Pixelify_Sans',system-ui,sans-serif]">
            links
          </div>
          <div className="w-[279px] h-12 absolute" style={{ translate: '52px 70px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - github
            </div>
            <div className="absolute size-5" style={{ translate: '259px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="w-[279px] h-12 absolute" style={{ translate: '52px 131px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - linkedin
            </div>
            <div className="absolute size-5" style={{ translate: '259px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="w-[279px] h-12 absolute" style={{ translate: '52px 192px' }}>
            <div className="text-[40px] leading-12 absolute text-white font-['Pixelify_Sans',system-ui,sans-serif] size-fit">
              - email
            </div>
            <div className="absolute size-5" style={{ translate: '259px 15px' }}>
              <img src="/assets/arrow.png" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
