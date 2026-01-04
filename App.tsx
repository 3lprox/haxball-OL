
import React from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import Rooms from './components/Rooms';
import DevHighlight from './components/DevHighlight';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#DA0812] selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Stats />
        
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
          <Rooms />
          <DevHighlight />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
