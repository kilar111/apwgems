import { useCartStore } from '../store/cartStore'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ top: '20%', left: '20%' }}></div>
        </div>
        <div className="text-center animate-fade-in-up">
          <div className="text-8xl mb-4">🛒</div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Your Cart is Empty</h1>
          <Link
            to="/products"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:scale-105"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative bg-black pt-20">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ top: '10%', right: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ bottom: '10%', left: '10%', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item, index) => (
            <div
              key={item.product._id}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl p-6 mb-4 flex gap-4 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.product.image || 'https://via.placeholder.com/150'}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.product.name}</h3>
                <p className="text-gray-400">{item.product.category}</p>
                <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold mt-2">
                  ${item.product.price.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.product._id)}
                  className="text-red-500 hover:text-red-700 transition-all duration-300 hover:scale-110"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                    className="p-1 rounded-full bg-purple-900/50 hover:bg-purple-800/50 transition-all duration-300 hover:scale-110 border border-purple-500/30"
                  >
                    <Minus className="h-4 w-4 text-purple-400" />
                  </button>
                  <span className="w-8 text-center font-semibold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                    className="p-1 rounded-full bg-purple-900/50 hover:bg-purple-800/50 transition-all duration-300 hover:scale-110 border border-purple-500/30"
                  >
                    <Plus className="h-4 w-4 text-purple-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-lg shadow-xl p-6 sticky top-20 border border-purple-500/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-white">${getTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping:</span>
                  <span className="font-semibold text-green-400">Free</span>
                </div>
                <div className="border-t border-purple-500/20 pt-3 flex justify-between font-bold text-xl">
                  <span className="text-white">Total:</span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">${getTotal().toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
