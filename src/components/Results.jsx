import { FaFilePdf, FaMoneyCheckAlt } from 'react-icons/fa';

export default function Results({ result }) {
  const formatCurrency = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);

  return (
    <section id="hasil" className="py-20 px-6 bg-white" style={{animation: 'fadeIn 0.5s ease-out'}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Hasil Perhitungan Anda</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {/* Kartu Pajak Pusat */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pajak Pusat (PPh Final 0.5%)</h3>
            <p className="text-gray-600 mb-2">Berdasarkan omzet: {formatCurrency(result.omzet)}</p>
            <div className="text-4xl font-extrabold text-blue-900 my-6">{formatCurrency(result.pajakPusat)}</div>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all">
              <FaMoneyCheckAlt /> Buat Kode Billing
            </button>
          </div>
          {/* Kartu Pajak Daerah */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg">
             <h3 className="text-xl font-bold text-gray-800 mb-4">Estimasi Pajak Daerah</h3>
            <p className="text-gray-600 mb-2">Untuk usaha {result.jenisUsaha || 'Anda'} di {result.lokasi || 'daerah Anda'}</p>
            <div className="text-4xl font-extrabold text-blue-900 my-6">{formatCurrency(result.estimasiPajakDaerah)}</div>
            <button className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-all">
              <FaFilePdf /> Simpan Hasil (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}