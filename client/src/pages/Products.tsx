import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { Sparkles, Filter } from 'lucide-react'

interface Product {
  _id: string
  name: string
  price: number
  image: string
  category: string
  carat: number
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('newest')
  
  // Update URL when category changes
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    if (newCategory === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', newCategory)
    }
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products')
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        // Fallback to mock data if API fails
        const mockProducts: Product[] = [
          {
            _id: '1',
            name: 'Premium Blue Sapphire',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400',
            category: 'Sapphire',
            carat: 3.5
          },
          {
            _id: '2',
            name: 'Natural Ruby Gemstone',
            price: 7500,
            image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400',
            category: 'Ruby',
            carat: 2.8
          },
          {
            _id: '3',
            name: 'Emerald Crystal',
            price: 6200,
            image: 'https://images.unsplash.com/photo-1583937443566-6868f2e3abb7?w=400',
            category: 'Emerald',
            carat: 4.2
          },
          {
            _id: '4',
            name: 'Diamond Premium Cut',
            price: 12000,
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
            category: 'Diamond',
            carat: 1.5
          },
          {
            _id: '5',
            name: 'Golden Topaz',
            price: 3500,
            image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400',
            category: 'Topaz',
            carat: 5.0
          },
          {
            _id: '6',
            name: 'Purple Amethyst',
            price: 2800,
            image: 'https://images.unsplash.com/photo-1583937443566-6868f2e3abb7?w=400',
            category: 'Amethyst',
            carat: 3.8
          }
        ]
        setProducts(mockProducts)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = ['all', 'ruby', 'sapphire', 'emerald', 'diamond', 'topaz', 'amethyst']

  const filteredProducts = products.filter(
    (product) => category === 'all' || product.category.toLowerCase() === category
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-purple-600 text-lg font-semibold">Loading gemstones...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative pt-20">
      {/* Light Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"></div>
        
        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/40 rounded-full animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Luxury Header Section */}
      <div className="relative bg-gradient-to-br from-white via-purple-100/50 to-pink-100/50 py-24 overflow-hidden border-b border-purple-200/50 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-6 animate-fade-in-up">
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-fade-in-up">
            Exclusive <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover extraordinary gemstones handpicked from the world's finest sources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Light Luxury Filters */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-purple-200/50 p-8 mb-12 animate-fade-in-up shadow-xl">
          <div className="flex ithandleCategoryChangegap-3 mb-6">
            <Filter className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-900">Filter & Sort</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-purple-700">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border-2 border-purple-200 rounded-xl px-4 py-3 text-gray-900 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-purple-700">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border-2 border-purple-200 rounded-xl px-4 py-3 text-gray-900 hover:border-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product._id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index % 8)}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="inline-block p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-purple-200/50 shadow-xl">
              <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg font-semibold">No gemstones found in this category</p>
              <button 
                onClick={() => handleCategoryChange('all')}
                className="mt-4 text-purple-600 hover:text-purple-700 underline transition-colors font-medium"
              >
                View all products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
