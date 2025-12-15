import { Link } from 'react-router-dom'
import { Gem, Shield, Truck, Award, Sparkles, Star } from 'lucide-react'

const Home = () => {

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Animated Dark Background with Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        
        {/* Animated 3D Gemstones floating */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const colors = ['from-red-500/30 to-red-700/30', 'from-blue-500/30 to-blue-700/30', 'from-green-500/30 to-emerald-700/30', 'from-purple-500/30 to-pink-700/30', 'from-yellow-500/30 to-amber-700/30']
            const sizes = ['w-16 h-16', 'w-20 h-20', 'w-12 h-12', 'w-24 h-24']
            return (
              <div
                key={i}
                className="absolute animate-float-3d"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 15 + 20}s`,
                }}
              >
                <div 
                  className={`relative ${sizes[Math.floor(Math.random() * sizes.length)]} animate-rotate-3d`}
                  style={{
                    transformStyle: 'preserve-3d',
                    animationDuration: `${Math.random() * 8 + 6}s`,
                  }}
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${colors[Math.floor(Math.random() * colors.length)]} backdrop-blur-sm shadow-2xl`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Particle stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Luxury Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden min-h-screen flex items-center">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-transparent to-transparent animate-light-ray"
              style={{
                transform: `rotate(${i * 45}deg) translateX(-50%)`,
                transformOrigin: 'top',
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-8">
              <div className="inline-block animate-fade-in-up">
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-[0.3em] uppercase">Luxury Gemstones</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="block mb-2">Exquisite World of</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Premium Gemstones
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Discover the world's finest collection of authentic, certified gemstones. From rare sapphires to brilliant diamonds, each stone tells a unique story of nature's artistry.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  to="/products"
                  className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Gem className="w-5 h-5" />
                    Explore Collection
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                <Link
                  to="/about"
                  className="px-10 py-5 border-2 border-purple-500/50 rounded-full text-lg font-bold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-400 mt-1">Premium Gems</div>
                </div>
                <div className="text-center border-x border-gray-700">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-400 mt-1">Certified</div>
                </div>
              </div>
            </div>

            {/* Right side - Large gemstone visual */}
            <div className="relative lg:h-[700px] flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Glowing gemstone representation */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Outer glow rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full border border-purple-500/20 animate-ping-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                  <div className="w-[450px] h-[450px] rounded-full border border-pink-500/20 animate-ping-slow"></div>
                </div>
                
                {/* Central gemstone */}
                <div className="relative z-10 animate-float-slow">
                  <div className="relative w-80 h-80 animate-rotate-slow" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Multi-faceted gem effect */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-blue-500/40 backdrop-blur-sm"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            transform: `rotate(${i * 45}deg) scale(${1 - i * 0.08})`,
                            boxShadow: '0 0 60px rgba(168, 85, 247, 0.6)',
                            animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Center brilliant cut */}
                    <div className="absolute inset-1/4 bg-gradient-to-br from-white via-purple-300 to-pink-300 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  
                  {/* Floating particles around gem */}
                  <div className="absolute inset-0 -m-32">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full animate-orbit"
                        style={{
                          top: '50%',
                          left: '50%',
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${5 + Math.random() * 3}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Luxury */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Promise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Why Choose <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">APW Gems</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience unparalleled excellence in every aspect of your gemstone journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Gem, 
                title: 'Certified Authenticity', 
                description: 'Every gemstone comes with international certification and complete documentation',
                gradient: 'from-purple-500 to-purple-700',
                glowColor: 'purple'
              },
              { 
                icon: Shield, 
                title: 'Secure Transactions', 
                description: 'Bank-level encryption and multiple secure payment gateways for your protection',
                gradient: 'from-pink-500 to-pink-700',
                glowColor: 'pink'
              },
              { 
                icon: Truck, 
                title: 'Global Shipping', 
                description: 'Insured express delivery to anywhere in the world with real-time tracking',
                gradient: 'from-blue-500 to-blue-700',
                glowColor: 'blue'
              },
              { 
                icon: Award, 
                title: 'Lifetime Support', 
                description: 'Expert guidance and dedicated support throughout your ownership journey',
                gradient: 'from-indigo-500 to-indigo-700',
                glowColor: 'indigo'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.glowColor}-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 group-hover:border-purple-500/50 transition-all duration-500 group-hover:-translate-y-3 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Categories - Luxury Showcase */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
        
        {/* Floating light particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.8,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase flex items-center gap-2 justify-center">
                <Star className="w-4 h-4" />
                Explore Our Collection
                <Star className="w-4 h-4" />
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Rare </span>
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Gemstones</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Each stone is a masterpiece, carefully selected for its exceptional quality and unique characteristics</p>
          </div>
          
          {/* Main Featured Categories with Realistic Gems */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { 
                name: 'Emerald', 
                subtitle: 'Queen of Gems',
                gradient: 'from-emerald-600 via-green-500 to-teal-600',
                shadowColor: 'shadow-emerald-500/50',
                description: 'Elegant & Timeless',
                facets: 'from-emerald-400/60 to-green-600/80',
                lightReflection: 'from-white/40 via-emerald-200/60 to-transparent',
                glowColor: 'emerald'
              },
              { 
                name: 'Diamond', 
                subtitle: 'Forever Brilliant',
                gradient: 'from-slate-200 via-blue-100 to-purple-100',
                shadowColor: 'shadow-blue-300/60',
                description: 'Pure & Eternal',
                facets: 'from-white/90 to-slate-300/70',
                lightReflection: 'from-white via-blue-200 to-purple-200',
                glowColor: 'blue'
              },
              { 
                name: 'Sapphire', 
                subtitle: 'Stone of Wisdom',
                gradient: 'from-blue-600 via-blue-500 to-indigo-600',
                shadowColor: 'shadow-blue-500/50',
                description: 'Royal & Mystical',
                facets: 'from-blue-400/60 to-indigo-700/80',
                lightReflection: 'from-white/40 via-blue-300/60 to-transparent',
                glowColor: 'blue'
              },
              { 
                name: 'Ruby', 
                subtitle: 'King of Gems',
                gradient: 'from-red-600 via-red-500 to-pink-600',
                shadowColor: 'shadow-red-500/50',
                description: 'Passionate & Powerful',
                facets: 'from-red-400/60 to-red-800/80',
                lightReflection: 'from-white/40 via-red-300/60 to-transparent',
                glowColor: 'red'
              }
            ].map((gem, index) => (
              <Link
                key={gem.name}
                to={`/products?category=${gem.name.toLowerCase()}`}
                className="group relative"
                style={{
                  animation: 'fade-in-up 0.8s ease-out forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Outer glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${gem.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 group-hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gem.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Shine sweep effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative p-8 text-center">
                    {/* Realistic 3D Gemstone with Facets */}
                    <div className="relative w-48 h-48 mx-auto mb-6 perspective-1000">
                      {/* Ambient glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gem.gradient} rounded-full blur-3xl opacity-50 animate-pulse-slow`}></div>
                      
                      {/* Main gemstone body */}
                      <div className="relative w-full h-full animate-float-slow" style={{ transformStyle: 'preserve-3d' }}>
                        {/* Diamond shape with facets */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gem.gradient} ${gem.shadowColor} shadow-2xl`}
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            transform: 'rotateX(0deg) rotateZ(0deg)',
                          }}
                        >
                          {/* Top facets */}
                          <div className="absolute inset-0 opacity-60">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={`top-${i}`}
                                className={`absolute w-full h-1/2 bg-gradient-to-br ${gem.facets}`}
                                style={{
                                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 50% 0%)',
                                  transform: `rotate(${i * 60}deg)`,
                                  transformOrigin: '50% 75%',
                                  mixBlendMode: 'overlay',
                                }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Light reflections */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${gem.lightReflection} opacity-70 animate-shimmer`}
                            style={{
                              clipPath: 'polygon(30% 20%, 70% 20%, 60% 40%, 40% 40%)',
                            }}
                          ></div>
                          
                          {/* Bottom facets */}
                          <div className="absolute inset-0 opacity-80">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={`bottom-${i}`}
                                className={`absolute w-full h-1/2 bottom-0 bg-gradient-to-t ${gem.facets}`}
                                style={{
                                  clipPath: 'polygon(50% 100%, 100% 50%, 50% 0%, 50% 100%)',
                                  transform: `rotate(${i * 60 + 30}deg)`,
                                  transformOrigin: '50% 25%',
                                  mixBlendMode: 'multiply',
                                }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Center brilliant sparkle */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full blur-md opacity-80 animate-pulse"></div>
                        </div>
                        
                        {/* Reflection shadow at bottom */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-br ${gem.gradient} blur-xl opacity-40`}></div>
                      </div>
                      
                      {/* Sparkling particles */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                            style={{
                              top: `${20 + Math.random() * 60}%`,
                              left: `${20 + Math.random() * 60}%`,
                              animationDelay: `${i * 0.3}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {gem.name}
                    </h3>
                    <p className="text-purple-400 text-sm font-semibold mb-3 tracking-wider">{gem.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-4">{gem.description}</p>
                    
                    <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:gap-3 transition-all">
                      View Collection 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Topaz', color: 'from-yellow-500 to-amber-600' },
              { name: 'Amethyst', color: 'from-purple-500 to-purple-700' },
              { name: 'Opal', color: 'from-pink-400 to-orange-500' },
              { name: 'Turquoise', color: 'from-cyan-400 to-blue-600' },
              { name: 'Aquamarine', color: 'from-blue-300 to-cyan-500' },
              { name: 'Garnet', color: 'from-red-700 to-red-900' },
              { name: 'Peridot', color: 'from-lime-400 to-green-600' },
              { name: 'Tanzanite', color: 'from-indigo-500 to-purple-600' },
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${cat.name.toLowerCase()}`}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl px-4 py-6 text-center hover:bg-slate-900 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-br ${cat.color} rounded-full group-hover:scale-110 transition-transform duration-300`}></div>
                  <span className="text-white text-sm font-semibold block group-hover:text-purple-300 transition-colors">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-slate-900 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Floating gems */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-3d"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-8">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Begin Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Gemstone Journey
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover exceptional gemstones curated by experts. Experience luxury, authenticity, and unmatched quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/products"
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-xl font-bold overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_80px_rgba(168,85,247,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Gem className="w-6 h-6" />
                Explore Collection
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
            
            <Link
              to="/about"
              className="group px-12 py-6 border-2 border-purple-500/50 rounded-full text-xl font-bold text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Learn Our Story
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto pt-12 border-t border-purple-500/20">
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400">Certified Authentic</div>
            </div>
            <div className="text-center border-x border-purple-500/20">
              <Truck className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400">Insured Delivery</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-sm text-gray-400">30-Day Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
