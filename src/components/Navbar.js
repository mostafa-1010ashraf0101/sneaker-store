import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getTotalItems, wishlist } = useCart();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w- mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-black uppercase tracking-tight">
            SneakerStore
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-black hover:text-slate-600 font-medium text-sm uppercase tracking-wide">
              New & Featured
            </Link>
            <Link to="/" className="text-black hover:text-slate-600 font-medium text-sm uppercase tracking-wide">
              Men
            </Link>
            <Link to="/" className="text-black hover:text-slate-600 font-medium text-sm uppercase tracking-wide">
              Women
            </Link>
            <Link to="/" className="text-black hover:text-slate-600 font-medium text-sm uppercase tracking-wide">
              Kids
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {wishlist.length > 0 && (
              <span className="text-black font-medium text-sm">
                ❤️ {wishlist.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}