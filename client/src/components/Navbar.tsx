import { Link } from 'react-router-dom'
import { ShoppingCart, User, Diamond } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { useAuthStore } from '../store/authStore'

const Navbar = () => {
  const { items } = useCartStore()
  const { user, logout } = useAuthStore()

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <Diamond className="h-10 w-10 text-purple-400 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
            </div>
            <div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                APW Gems
              </span>
              <span className="text-xs text-gray-400 -mt-1 block">Premium Gemstones</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className="relative px-4 py-2 text-gray-300 font-semibold hover:text-purple-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">🏠 Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              to="/products" 
              className="relative px-4 py-2 text-gray-300 font-semibold hover:text-purple-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">💎 Products</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            {user && (
              <Link 
                to="/add-product" 
                className="relative px-4 py-2 text-gray-300 font-semibold hover:text-green-400 transition-colors duration-300 group"
              >
                <span className="relative z-10">➕ Sell</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            )}
            <Link 
              to="/about" 
              className="relative px-4 py-2 text-gray-300 font-semibold hover:text-purple-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">ℹ️ About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative group p-2 hover:bg-purple-900/30 rounded-xl transition-all duration-300">
              <ShoppingCart className="h-7 w-7 text-gray-300 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 flex items-center justify-center animate-pulse shadow-lg px-1">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile" className="group p-2 hover:bg-purple-900/30 rounded-xl transition-all duration-300">
                  <User className="h-7 w-7 text-gray-300 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110" />
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-red-400 transition-colors duration-300 border border-purple-500/30 rounded-lg hover:border-red-500/50 hover:bg-red-900/20"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="relative group px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
