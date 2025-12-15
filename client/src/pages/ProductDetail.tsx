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
        // Fallback to mock data if API fails
        const mockProducts: { [key: string]: Product } = {
          '1': {
            _id: '1',
            name: 'Premium Blue Sapphire',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600',
            category: 'Sapphire',
            carat: 3.5,
            description: 'A stunning premium blue sapphire with exceptional clarity and brilliance. This natural gemstone features a deep royal blue color that captures light beautifully from every angle. Perfect for creating an heirloom piece.',
            origin: 'Sri Lanka',
            color: 'Deep Blue'
          },
          '2': {
            _id: '2',
            name: 'Natural Ruby Gemstone',
            price: 7500,
            image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600',
            category: 'Ruby',
            carat: 2.8,
            description: 'Magnificent natural ruby with rich red coloration. This precious gemstone exhibits the classic "pigeon blood" red color highly prized by collectors. Excellent cut and polish enhance its natural beauty.',
            origin: 'Myanmar',
            color: 'Pigeon Blood Red'
          },
          '3': {
            _id: '3',
            name: 'Emerald Crystal',
            price: 6200,
            image: 'https://images.unsplash.com/photo-1583937443566-6868f2e3abb7?w=600',
            category: 'Emerald',
            carat: 4.2,
            description: 'Breathtaking emerald crystal with vibrant green hue. This exceptional stone displays remarkable transparency and the coveted deep green color. A rare find for serious collectors.',
            origin: 'Colombia',
            color: 'Vivid Green'
          },
          '4': {
            _id: '4',
            name: 'Diamond Premium Cut',
            price: 12000,
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
            category: 'Diamond',
            carat: 1.5,
            description: 'Flawless premium cut diamond with exceptional brilliance. This D-color diamond features ideal proportions and superior cut quality, maximizing its fire and sparkle. Certified by GIA.',
            origin: 'South Africa',
            color: 'Colorless (D)'
          },
          '5': {
            _id: '5',
            name: 'Golden Topaz',
            price: 3500,
            image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600',
            category: 'Topaz',
            carat: 5.0,
            description: 'Beautiful golden topaz with warm, rich tones. This large gemstone displays excellent clarity and a mesmerizing golden-yellow color. Perfect for statement jewelry pieces.',
            origin: 'Brazil',
            color: 'Imperial Golden'
          },
          '6': {
            _id: '6',
            name: 'Purple Amethyst',
            price: 2800,
            image: 'https://images.unsplash.com/photo-1583937443566-6868f2e3abb7?w=600',
            category: 'Amethyst',
            carat: 3.8,
            description: 'Gorgeous purple amethyst with deep, saturated color. This natural gemstone showcases the finest purple hue with excellent transparency. A beloved stone for its beauty and spiritual properties.',
            origin: 'Uruguay',
            color: 'Deep Purple'
          }
        }
        
        const mockProduct = mockProducts[id || '1'] || mockProducts['1']
        setProduct(mockProduct)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-purple-600 text-lg font-semibold">Loading product...</div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center pt-20">
        <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-purple-200/50 shadow-xl">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            Back to Products
          </Link>
        </div>
      </div>
    )
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-12 pt-24">
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
