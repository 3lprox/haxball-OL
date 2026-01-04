
import React from 'react';

const Rooms: React.FC = () => {
  const rooms = [
    {
      title: 'Sanguchito ESPAÑOL 7x | TnT y OL',
      desc: 'El corazón de nuestro entrenamiento. Servidor optimizado con baja latencia para jugadores de España.',
      badge: 'POPULAR'
    },
    {
      title: 'iceball x6 | TnT y OL',
      desc: 'Velocidad y técnica pura. Solo para los más rápidos y habilidosos en el hielo.',
      badge: 'NUEVO'
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-black italic uppercase">📍 NUESTRAS SALAS OFICIALES</h2>
        <div className="flex-grow h-1 bg-gradient-to-r from-[#DA0812] to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room, idx) => (
          <div 
            key={idx}
            className="group bg-[#1e1e1e] p-8 rounded-2xl border-l-8 border-[#DA0812] hover:bg-[#2a2a2a] transition-colors relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#DA0812] px-2 py-1 rounded-full opacity-80">
              {room.badge}
            </span>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#DA0812] transition-colors">
              {room.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {room.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
