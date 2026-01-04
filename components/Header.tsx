
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b-4 border-[#DA0812]">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://picsum.photos/id/164/1600/900')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 drop-shadow-2xl">
          OLYMPIQUE <span className="text-[#DA0812]">DE LYON</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#DA0812]"></div>
          <p className="text-lg md:text-xl tracking-[0.3em] font-medium text-gray-300 uppercase">
            Sangre, Honor y Victoria
          </p>
          <div className="h-[2px] w-12 bg-[#DA0812]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
