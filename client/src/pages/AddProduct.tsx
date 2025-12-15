import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, DollarSign, Package, Gem } from 'lucide-react'
import axios from 'axios'

const AddProduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string>('')
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'sapphire',
    carat: '',
    color: '',
    origin: '',
    stock: '1',
    image: null as File | null,
    imageUrl: '',
  })

  const categories = [
    { value: 'ruby', label: 'Ruby 🔴', emoji: '🔴' },
    { value: 'sapphire', label: 'Sapphire 🔵', emoji: '🔵' },
    { value: 'emerald', label: 'Emerald 🟢', emoji: '🟢' },
    { value: 'diamond', label: 'Diamond 💎', emoji: '💎' },
    { value: 'topaz', label: 'Topaz 🟡', emoji: '🟡' },
    { value: 'amethyst', label: 'Amethyst 🟣', emoji: '🟣' },
    { value: 'other', label: 'Other ✨', emoji: '✨' },
  ]

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      if (!token) {
        alert('Please login first!')
        navigate('/login')
        return
      }

      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('description', formData.description)
      submitData.append('price', formData.price)
      submitData.append('category', formData.category)
      submitData.append('carat', formData.carat)
      submitData.append('color', formData.color)
      submitData.append('origin', formData.origin)
      submitData.append('stock', formData.stock)
      
      if (formData.image) {
        submitData.append('image', formData.image)
      } else if (formData.imageUrl) {
        submitData.append('image', formData.imageUrl)
      }

      await axios.post('/api/products', submitData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })

      alert('✨ Product added successfully!')
      navigate('/products')
    } catch (error: any) {
      console.error('Error adding product:', error)
      alert(error.response?.data?.message || 'Failed to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-12 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Gem className="h-12 w-12 text-purple-600" />
            Add New Product
          </h1>
          <p className="text-gray-600 text-lg">List your precious gems for sale</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g., Premium Blue Sapphire"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price (USD) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                placeholder="5000"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Carat */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Carat Weight *
              </label>
              <input
                type="number"
                name="carat"
                value={formData.carat}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                placeholder="3.5"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Stock Quantity *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
                min="0"
                placeholder="1"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Color *
              </label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                required
                placeholder="e.g., Deep Blue"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Origin */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Origin *
              </label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                required
                placeholder="e.g., Sri Lanka"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Describe your gemstone in detail..."
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none resize-none"
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Product Image
              </label>
              
              {/* File Upload */}
              <div className="mb-4">
                <label className="flex items-center justify-center w-full px-4 py-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-dashed border-purple-300 rounded-xl cursor-pointer hover:bg-purple-100 transition-all">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-purple-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* OR URL */}
              <div className="text-center mb-4 text-sm text-gray-500 font-semibold">OR</div>
              
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="Paste image URL here"
                className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
              />

              {/* Image Preview */}
              {(imagePreview || formData.imageUrl) && (
                <div className="mt-4">
                  <p className="text-sm font-bold text-gray-700 mb-2">Preview:</p>
                  <div className="relative w-48 h-48 mx-auto">
                    <img
                      src={imagePreview || formData.imageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-purple-200"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="flex-1 px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding...
                </span>
              ) : (
                '✨ Add Product'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
