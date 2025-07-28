// Lokasi File: src/App.jsx

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection'; // 
import Calculator from './components/Calculator';
import Results from './components/Results';
import Features from './components/Features';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [calculationResult, setCalculationResult] = useState(null);

  const handleCalculate = (data) => {
    const dummyResult = {
      ...data,
      pajakPusat: data.omzet * 0.005,
      estimasiPajakDaerah: data.omzet * 0.10,
    };
    setCalculationResult(dummyResult);
    
    setTimeout(() => {
      document.getElementById('hasil').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <IntroSection /> {/* <--  */}
        <Features />
        <section id="kalkulator" className="bg-gray-50/50 py-20 px-6 scroll-mt-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Kalkulator Pajak</h2>
                    <p className="text-lg text-gray-600">Dapatkan estimasi PPh Final dan Pajak Daerah di sini.</p>
                </div>
                <Calculator onCalculate={handleCalculate} />
            </div>
        </section>
        
        {calculationResult && <Results result={calculationResult} />}
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;