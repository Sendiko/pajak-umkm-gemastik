// Lokasi File: src/components/Features.jsx

import { FaCalculator, FaFilePdf, FaLock } from 'react-icons/fa';

const featureList = [
  { icon: <FaCalculator className="text-blue-600" />, title: 'Terpadu & Akurat', description: 'Menghitung PPh Final 0.5% sekaligus estimasi Pajak Daerah sesuai lokasi.' },
  { icon: <FaFilePdf className="text-blue-600" />, title: 'Simpan & Cetak', description: 'Simpan hasil perhitungan pajak Anda dalam format PDF yang rapi.' },
  { icon: <FaLock className="text-blue-600" />, title: 'Aman & Rahasia', description: 'Kami tidak menyimpan data omzet yang Anda masukkan. Privasi Anda terjamin.' }
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-20 px-6 bg-gray-50/50 scroll-mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sederhana, Namun Lengkap</h2>
        <p className="text-lg text-gray-600 mb-12">Fitur yang dirancang untuk kebutuhan UMKM.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div 
              key={index} 
              // INI BAGIAN YANG DIREVISI:
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-4xl mb-4 inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}