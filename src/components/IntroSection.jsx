// Lokasi File: src/components/IntroSection.jsx

import IntroImage from '../assets/intro-image.png';

export default function IntroSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Teks */}
        <div className="text-center md:text-left">
          <p className="text-blue-600 font-bold tracking-wider mb-2">
            SOLUSI PAJAK UMKM
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Hitung pajak pusat dan daerah mudah
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Platform lengkap untuk UMKM menghitung pajak sesuai lokasi dan jenis usaha tanpa ribet.
          </p>
          <div className="mt-8">
            {/* INI BAGIAN YANG DIREVISI */}
            <a 
              href="#kalkulator" 
              className="inline-block px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-bold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              Get in touch
            </a>
          </div>
        </div>
        
        {/* Kolom Gambar (Slot Gambar Baru Anda) */}
        <div className="flex justify-center">
          <img 
            src={IntroImage} 
            alt="Menghitung Pajak" 
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}