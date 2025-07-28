import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    { q: "Apa itu PPh Final 0.5% dan siapa yang wajib membayarnya?", a: "PPh Final 0.5% adalah pajak penghasilan yang dikenakan pada UMKM dengan omzet di bawah 4,8 Miliar per tahun. Semua Wajib Pajak orang pribadi maupun badan yang memenuhi kriteria tersebut wajib membayarnya." },
    { q: "Kapan batas waktu untuk membayar dan melapor pajak ini?", a: "Batas waktu pembayaran PPh Final 0.5% adalah tanggal 15 bulan berikutnya. Pelaporan dilakukan setahun sekali melalui SPT Tahunan." },
    { q: "Apakah data omzet yang saya masukkan di sini aman?", a: "Tentu. Website ini tidak menyimpan data pribadi atau data keuangan yang Anda masukkan. Semua perhitungan dilakukan di sisi Anda (browser) dan langsung hilang saat halaman ditutup." },
    { q: "Apakah kalkulator ini bisa membuat Kode Billing untuk Pajak Daerah?", a: "Saat ini, fitur 'Buat Kode Billing' hanya berlaku untuk PPh Final (Pajak Pusat). Untuk Pajak Daerah, kami menyediakan estimasi dan Anda perlu memproses pembayarannya melalui kanal resmi Pemerintah Daerah masing-masing." },
];

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-semibold text-gray-800">{item.q}</h3>
                {isOpen ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-gray-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600">{item.a}</p>
            </div>
        </div>
    );
};

export default function Faq() {
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Pertanyaan Umum</h2>
            <p className="text-lg text-gray-600">Jawaban atas pertanyaan yang paling sering diajukan.</p>
        </div>
        <div>
            {faqData.map((item, index) => <FaqItem key={index} item={item} />)}
        </div>
      </div>
    </section>
  );
}