
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 px-4 text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-4">¿QUIERES SER PARTE DEL LYON?</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
          Buscamos talento constantemente para nuestras filas. Si crees que tienes lo necesario para vestir la camiseta, únete a nuestra academia.
        </p>
        
        <a 
          href="https://discord.gg/yEz8JBMBQH" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#DA0812] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#b0060e] hover:scale-110 transition-all shadow-[0_0_30px_rgba(218,8,18,0.3)]"
        >
          UNIRSE AL DISCORD
        </a>

        <div className="mt-20 pt-8 border-t border-white/10 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Olympique de Lyon Haxball Team. Todos los derechos reservados.</p>
          <p>Desarrollado por <span className="text-white font-bold tracking-wider">3lprøx</span> con ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
