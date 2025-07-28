export default function Header() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold text-gray-900">
          Pajak<span className="text-blue-600">UMKM</span>
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#kalkulator" className="text-gray-600 hover:text-blue-600 transition-colors">Kalkulator</a>
          <a href="#keunggulan" className="text-gray-600 hover:text-blue-600 transition-colors">Keunggulan</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
        </div>
      </nav>
    </header>
  );
}