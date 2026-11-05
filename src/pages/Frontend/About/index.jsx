import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero / Header Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 sm:py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl leading-tight">
          About <span className="text-indigo-600">Veloria Store</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-4 max-w-xl">
          We are dedicated to bringing you the best shopping experience with top-quality products, exceptional customer service, and unbeatable prices.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Our Story & Mission</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Founded with a simple vision, Veloria Store started as a small passion project to make online shopping seamless and reliable. Over the years, we have grown into a trusted destination for modern shoppers looking for trendsetting electronics, fashion, and lifestyle accessories.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our mission is to bridge the gap between affordability and premium quality, ensuring every customer feels valued and satisfied with every purchase they make.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0a67d553c2a5?w=600&auto=format&fit=crop&q=60" 
              alt="Our Team" 
              className="w-full h-64 sm:h-72 object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 border-t border-gray-100">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">What makes Veloria Store your best shopping partner</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
            <h3 className="font-bold text-gray-800 text-sm mb-2">100% Quality Assured</h3>
            <p className="text-xs text-gray-500">Every item is carefully selected and tested to meet high standards of durability and style.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
            <h3 className="font-bold text-gray-800 text-sm mb-2">Fast & Secure Delivery</h3>
            <p className="text-xs text-gray-500">We partner with top logistics providers to ensure your package arrives safely and on time.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
            <h3 className="font-bold text-gray-800 text-sm mb-2">Customer First Approach</h3>
            <p className="text-xs text-gray-500">Our support team is always ready to assist you with any questions or concerns you might have.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Ready to start shopping with us?</h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 max-w-md mx-auto">Explore our wide range of collections and find your next favorite item today.</p>
        <Link to="/products" className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full font-medium text-sm shadow-sm">
          Browse Products
        </Link>
      </section>

    </div>
  )
}

export default About