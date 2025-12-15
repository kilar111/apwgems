import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import axios from 'axios'

interface Product {
  _id: string
  name: string
  price: number
  image: string
  category: string
  carat: number
  description: string
  origin: string
  color: string
}

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>
  }

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Product not found</div>
  }

  const gemIcons: { [key: string]: string } = {
    ruby: '🔴',
    sapphire: '🔵',
    emerald: '🟢',
    diamond: '💎',
    topaz: '🟡',
    amethyst: '🟣',
  }

  const gemIcon = gemIcons[product.category.toLowerCase()] || '💎'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/products" className="hover:text-primary-600 transition-colors">Products</Link>
          <span>›</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={product.image || 'https://via.placeholder.com/600x600?text=Premium+Gem'}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    {gemIcon} {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
              <div className="flex items-baseline gap-4 mb-8">
                <p className="text-6xl font-extrabold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  ${product.price.toLocaleString()}
                </p>
                <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">In Stock</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>📝</span> Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>✨</span> Specifications
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
                  <p className="text-2xl mb-2">💎</p>
                  <p className="text-sm text-gray-600">Carat</p>
                  <p className="font-bold text-lg">{product.carat}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <p className="text-2xl mb-2">🌍</p>
                  <p className="text-sm text-gray-600">Origin</p>
                  <p className="font-bold text-lg">{product.origin}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl">
                  <p className="text-2xl mb-2">🎨</p>
                  <p className="text-sm text-gray-600">Color</p>
                  <p className="font-bold text-lg">{product.color}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold rounded-2xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  <ShoppingCart className="h-6 w-6" />
                  Add to Cart
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
              <button className="p-4 bg-pink-100 text-pink-600 rounded-2xl hover:bg-pink-200 transition-all duration-300 hover:scale-110 shadow-lg">
                <Heart className="h-7 w-7" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t">
              <div className="text-center">
                <p className="text-2xl mb-1">✅</p>
                <p className="text-xs text-gray-600 font-semibold">Certified</p>
              </div>
              <div className="text-center">
                <p className="text-2xl mb-1">🚚</p>
                <p className="text-xs text-gray-600 font-semibold">Free Shipping</p>
              </div>
              <div className="text-center">
                <p className="text-2xl mb-1">↩️</p>
                <p className="text-xs text-gray-600 font-semibold">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
