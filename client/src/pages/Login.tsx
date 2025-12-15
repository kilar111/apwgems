import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-purple-50 to-pink-50"></div>
        <div className="absolute w-96 h-96 bg-primary-400/30 rounded-full blur-3xl animate-float" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" style={{ bottom: '10%', right: '10%', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full mx-auto px-4 relative">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-8 border border-primary-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-3 rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:text-purple-600 transition-colors duration-300 font-semibold">
            Register
          </Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Login
