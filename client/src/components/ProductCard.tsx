import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

interface Product {
  _id: string
  name: string
  price: number
  image: string
  category: string
  carat: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const gemIcons: { [key: string]: string } = {
    ruby: '🔴',
    sapphire: '🔵',
    emerald: '🟢',
    diamond: '💎',
    topaz: '🟡',
    amethyst: '🟣',
  }

  const gemColors: { [key: string]: string } = {
    ruby: 'from-red-600 to-pink-600',
    sapphire: 'from-blue-600 to-indigo-600',
    emerald: 'from-emerald-600 to-green-600',
    diamond: 'from-slate-300 to-purple-300',
    topaz: 'from-yellow-600 to-amber-600',
    amethyst: 'from-purple-600 to-pink-600',
  }

  const categoryKey = product.category.toLowerCase()
  const gemIcon = gemIcons[categoryKey] || '💎'
  const gemColor = gemColors[categoryKey] || 'from-purple-600 to-pink-600'

  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gemColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>
      
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl shadow-2xl overflow-hidden hover:shadow-purple-500/30 transition-all duration-500 border border-slate-800 group-hover:border-purple-500/50 group-hover:scale-[1.02]">
        {/* Image Section */}
        <Link to={`/products/${product._id}`} className="relative block overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${gemColor} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {gemIcon} {product.category}
            </span>
          </div>
          
          <img
            src={product.image || 'https://via.placeholder.com/400x400?text=Premium+Gem'}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {/* Dark overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </Link>
        
        {/* Content Section */}
        <div className="p-6 relative">
          <Link to={`/products/${product._id}`}>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-3 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          
          {/* Specs */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="text-lg">💎</span>
              <span className="font-semibold text-purple-300">{product.carat}</span> Carat
            </span>
            <span className="flex items-center gap-1">
              <span className="text-lg">⭐</span>
              <span className="font-semibold text-purple-300">4.8</span>
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div>
              <div className="text-xs text-gray-500 mb-1">Price</div>
              <span className={`text-2xl font-extrabold bg-gradient-to-r ${gemColor} bg-clip-text text-transparent`}>
                ${product.price.toLocaleString()}
              </span>
            </div>
            <button className={`group/btn relative px-6 py-3 bg-gradient-to-r ${gemColor} text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 overflow-hidden`}>
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Add</span>
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        {/* Quick view badge */}
        <Link
          to={`/products/${product._id}`}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
