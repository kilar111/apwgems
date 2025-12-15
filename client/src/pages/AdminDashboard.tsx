import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, Clock, Trash2, Eye, Users } from 'lucide-react'
import axios from 'axios'

interface Product {
  _id: string
  name: string
  price: number
  image: string
  category: string
  carat: number
  status: 'pending' | 'approved' | 'rejected'
  seller: {
    _id: string
    name: string
    email: string
  }
  createdAt: string
}

interface Stats {
  totalProducts: number
  pendingProducts: number
  approvedProducts: number
  rejectedProducts: number
  totalUsers: number
}

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.role !== 'admin') {
      alert('Access denied. Admin only!')
      navigate('/')
      return
    }
    
    fetchData()
  }, [filter, navigate])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login')
        return
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      const [productsRes, statsRes] = await Promise.all([
        axios.get(`/api/admin/products?status=${filter}`, config),
        axios.get('/api/admin/stats', config)
      ])

      setProducts(productsRes.data)
      setStats(statsRes.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('Failed to load admin data')
      setLoading(false)
    }
  }

  const handleApprove = async (id: string) => {
    try {
      const token = localStorage.getItem('token')
      await axios.patch(`/api/admin/products/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchData()
      alert('✅ Product approved!')
    } catch (error) {
      alert('Failed to approve product')
    }
  }

  const handleReject = async (id: string) => {
    try {
      const token = localStorage.getItem('token')
      await axios.patch(`/api/admin/products/${id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchData()
      alert('❌ Product rejected!')
    } catch (error) {
      alert('Failed to reject product')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`/api/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchData()
      alert('🗑️ Product deleted!')
    } catch (error) {
      alert('Failed to delete product')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-lg font-semibold">Loading admin panel...</div>
        </div>
      </div>
    )
  }

  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
    approved: 'bg-green-500/20 text-green-300 border-green-500/50',
    rejected: 'bg-red-500/20 text-red-300 border-red-500/50',
  }

  const statusIcons = {
    pending: <Clock className="h-4 w-4" />,
    approved: <CheckCircle className="h-4 w-4" />,
    rejected: <XCircle className="h-4 w-4" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-white mb-4 flex items-center justify-center gap-3">
            🛡️ Admin Dashboard
          </h1>
          <p className="text-gray-300 text-lg">Manage products and approve listings</p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-gray-300 text-sm">Total Products</div>
              <div className="text-white text-2xl font-bold">{stats.totalProducts}</div>
            </div>
            <div className="bg-yellow-500/10 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/30">
              <div className="text-3xl mb-2">⏳</div>
              <div className="text-gray-300 text-sm">Pending</div>
              <div className="text-yellow-300 text-2xl font-bold">{stats.pendingProducts}</div>
            </div>
            <div className="bg-green-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-gray-300 text-sm">Approved</div>
              <div className="text-green-300 text-2xl font-bold">{stats.approvedProducts}</div>
            </div>
            <div className="bg-red-500/10 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
              <div className="text-3xl mb-2">❌</div>
              <div className="text-gray-300 text-sm">Rejected</div>
              <div className="text-red-300 text-2xl font-bold">{stats.rejectedProducts}</div>
            </div>
            <div className="bg-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
              <Users className="h-8 w-8 text-purple-300 mb-2" />
              <div className="text-gray-300 text-sm">Total Users</div>
              <div className="text-purple-300 text-2xl font-bold">{stats.totalUsers}</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {(['all', 'pending', 'approved', 'rejected'] as const).map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                filter === status
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.length === 0 ? (
            <div className="text-center py-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-purple-500/30">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-300 text-lg">No products found</p>
            </div>
          ) : (
            products.map(product => (
              <div
                key={product._id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="w-full md:w-32 h-32 flex-shrink-0">
                    <img
                      src={product.image || 'https://via.placeholder.com/128'}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm">
                          Seller: {product.seller.name} ({product.seller.email})
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2 ${statusColors[product.status]}`}>
                        {statusIcons[product.status]}
                        {product.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-xs">Price</p>
                        <p className="text-white font-bold">${product.price.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Category</p>
                        <p className="text-white font-semibold">{product.category}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Carat</p>
                        <p className="text-white font-semibold">{product.carat}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Date</p>
                        <p className="text-white font-semibold">
                          {new Date(product.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/products/${product._id}`)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      {product.status !== 'approved' && (
                        <button
                          onClick={() => handleApprove(product._id)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </button>
                      )}
                      {product.status !== 'rejected' && (
                        <button
                          onClick={() => handleReject(product._id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                        >
                          <XCircle className="h-4 w-4" />
                          Reject
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
