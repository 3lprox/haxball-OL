
import React from 'react';

const DevHighlight: React.FC = () => {
  // Enlace de previsualización de Google Drive para el iframe
  const embedUrl = "https://drive.google.com/file/d/17tI8Z2VuqhR5cQMBPOxnQ_LUtX0b_9dS/preview";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0046A0] via-[#00285a] to-black p-1 shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="relative z-10 bg-black/40 backdrop-blur-sm rounded-[22px] p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DA0812]/20 border border-[#DA0812]/50 text-[#DA0812] text-xs font-bold tracking-widest uppercase text-center md:text-left">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA0812] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DA0812]"></span>
              </span>
              DESARROLLO EXCLUSIVO
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black italic">
                DE NUESTRO DEV <span className="text-[#DA0812] not-italic underline decoration-2 underline-offset-8">HAXIOS</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Un <span className="font-bold text-white italic">Haxball para iOS</span> real. Olvídate de los problemas de compatibilidad y juega con la máxima fluidez en tu dispositivo Apple.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.icloud.com/shortcuts/ae2ae7dd4a214dd5a89ab6af3f67f7a0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black transition-all hover:bg-[#DA0812] hover:text-white active:scale-95 shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.666 3.334c-1.127 0-2.04.913-2.04 2.04v.868h.867v-.868c0-.648.525-1.173 1.173-1.173h11.294c.648 0 1.173.525 1.173 1.173v11.294c0 .648-.525 1.173-1.173 1.173h-.868v.867h.868c1.127 0 2.04-.913 2.04-2.04V5.374c0-1.127-.913-2.04-2.04-2.04H11.666zM5.374 9.626c-1.127 0-2.04.913-2.04 2.04v11.294c0 1.127.913 2.04 2.04 2.04h11.294c1.127 0 2.04-.913 2.04-2.04V11.666c0-1.127-.913-2.04-2.04-2.04H5.374zm11.294 14.507H5.374a1.173 1.173 0 01-1.173-1.173V11.666c0-.648.525-1.173 1.173-1.173h11.294c.648 0 1.173.525 1.173 1.173v11.294c0 .648-.525 1.173-1.173 1.173z"/>
                </svg>
                INSTALAR EN iOS
              </a>
            </div>
          </div>

          {/* Iframe Video Side */}
          <div className="w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
               <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                Demostración HaxiOS
              </p>
              <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">Google Drive Host</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevHighlight;
