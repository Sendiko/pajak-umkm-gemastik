// Lokasi File: src/components/Hero.jsx

import HeroImage from '../assets/hero-image.png';

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten teks  */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center text-white">
        {/* revisi*/}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
            Hitung pajak UMKM mudah
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Platform terpadu untuk pajak pusat dan daerah
          </p>
          <div className="mt-8">
            <a 
              href="#keunggulan" 
              // 
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}