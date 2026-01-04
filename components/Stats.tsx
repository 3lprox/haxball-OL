
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'JUGADORES', value: '+40' },
    { label: 'HOST PROPIO', value: '24/7' },
    { label: 'COMPETENCIA', value: 'PRO' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 -mt-10 relative z-20 px-4">
      {stats.map((stat, idx) => (
        <div 
          key={idx}
          className="bg-[#0046A0] p-6 rounded-xl min-w-[160px] text-center shadow-2xl border border-white/10 hover:translate-y-[-5px] transition-transform"
        >
          <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
          <p className="text-xs font-bold text-blue-200 tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
