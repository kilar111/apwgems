import { Gem, Award, Shield, Globe, Heart, Star } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dark Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle stars */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
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

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 animate-fade-in-up">
              <Gem className="w-16 h-16 text-purple-400 mx-auto animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
              About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">APW Gems</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              For over two decades, we've been connecting gemstone enthusiasts with the world's most exquisite treasures. 
              Our passion for excellence drives everything we do.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '10K+', label: 'Happy Clients' },
              { value: '50+', label: 'Countries' },
              { value: '100%', label: 'Certified Gems' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-xl rounded-2xl border border-purple-500/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                A Legacy of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2003, APW Gems began with a simple vision: to make the world's finest gemstones 
                  accessible to collectors and enthusiasts worldwide. What started as a small family business 
                  has grown into a trusted global marketplace.
                </p>
                <p>
                  Our journey has been guided by unwavering commitment to authenticity, quality, and customer 
                  satisfaction. Every gemstone in our collection is carefully selected and certified by leading 
                  gemological institutes.
                </p>
                <p>
                  Today, we're proud to serve customers in over 50 countries, offering an unparalleled selection 
                  of rare and precious gemstones backed by our guarantee of authenticity and excellence.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-12 border border-purple-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>
                <div className="relative grid grid-cols-2 gap-8">
                  {[
                    { icon: Award, title: 'Certified Quality', desc: 'International standards' },
                    { icon: Shield, title: 'Secure Trading', desc: 'Protected transactions' },
                    { icon: Globe, title: 'Global Reach', desc: 'Worldwide shipping' },
                    { icon: Heart, title: 'Customer First', desc: 'Dedicated support' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-24 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase flex items-center gap-2 justify-center">
                <Star className="w-4 h-4" />
                Our Core Values
                <Star className="w-4 h-4" />
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What We <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'Every gemstone comes with certification from internationally recognized gemological institutes. We guarantee 100% authentic, natural gemstones.',
                gradient: 'from-purple-600 to-purple-800'
              },
              {
                title: 'Transparency',
                description: 'Complete disclosure of treatments, origins, and characteristics. We believe in honest communication and building trust with our customers.',
                gradient: 'from-pink-600 to-pink-800'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in selection, service, and customer care. Your satisfaction is our ultimate measure of success.',
                gradient: 'from-blue-600 to-blue-800'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-8">
            <Gem className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Collection?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our exquisite collection of certified gemstones
          </p>
          <a
            href="/products"
            className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-lg font-bold text-white hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_80px_rgba(168,85,247,0.6)]"
          >
            Browse Collection
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
