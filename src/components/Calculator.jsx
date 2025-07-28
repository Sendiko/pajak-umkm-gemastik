import { useState } from 'react';

export default function Calculator({ onCalculate }) {
  const [formData, setFormData] = useState({
    lokasi: '',
    jenisUsaha: '',
    omzet: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.omzet) {
      alert('Mohon isi omzet bulanan Anda.');
      return;
    }
    onCalculate(formData);
  };

  return (
    <section id="kalkulator" className="bg-gray-50/50 py-20 md:py-32 px-6 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Kalkulator Pajak Terpadu untuk Usaha Anda.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Dapatkan estimasi PPh Final dan Pajak Daerah dalam hitungan detik.
        </p>
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl max-w-3xl mx-auto text-left border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-2">Lokasi Usaha</label>
                <select name="lokasi" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition">
                  <option value="">Pilih Kota/Kabupaten</option>
                  <option value="bandung">Kota Bandung</option>
                  <option value="jakarta">DKI Jakarta</option>
                  <option value="surabaya">Kota Surabaya</option>
                </select>
              </div>
              <div>
                <label htmlFor="jenisUsaha" className="block text-sm font-medium text-gray-700 mb-2">Jenis Usaha</label>
                <select name="jenisUsaha" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition">
                  <option value="">Pilih Jenis Usaha</option>
                  <option value="kuliner">Kuliner</option>
                  <option value="jasa">Jasa</option>
                  <option value="perdagangan">Perdagangan</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="omzet" className="block text-sm font-medium text-gray-700 mb-2">Omzet Bulanan (Rp)</label>
              <input type="number" name="omzet" onChange={handleChange} placeholder="Masukkan omzet tanpa titik atau koma" required className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg mt-8 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300">
              Hitung Pajak Sekarang
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}