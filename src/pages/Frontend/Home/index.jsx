import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  // Mock featured products
  const products = [
    { id: 1, name: 'Modern Headphones', price: '$99.00', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Smart Watch Series', price: '$149.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Minimalist Backpack', price: '$79.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Classic Sunglasses', price: '$45.00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60' },
  ]

  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 sm:py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl leading-tight">
          Discover Quality Products at <span className="text-indigo-600">Veloria Store</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-4 max-w-xl">
          Shop the latest trends with unbeatable prices, secure checkout, and fast delivery right to your doorstep.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/products" className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full font-medium text-sm shadow-sm text-center">
            Shop Now
          </Link>
          <Link to="/auth/register" className="px-8 py-3 text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition rounded-full font-medium text-sm text-center">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 border-b border-gray-100 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10">
            <h3 className="font-bold text-gray-800 text-sm mb-1">Free Shipping</h3>
            <p className="text-xs text-gray-500">On all orders over $50</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10">
            <h3 className="font-bold text-gray-800 text-sm mb-1">Secure Payment</h3>
            <p className="text-xs text-gray-500">100% secure checkout process</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10">
            <h3 className="font-bold text-gray-800 text-sm mb-1">24/7 Support</h3>
            <p className="text-xs text-gray-500">Dedicated customer support</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link to="/products" className="text-indigo-600 text-xs sm:text-sm font-medium hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100" />
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">{product.price}</p>
              <button className="mt-auto w-full py-2 bg-indigo-50 hover:bg-indigo-500 text-indigo-600 hover:text-white transition rounded-full text-xs font-medium cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home