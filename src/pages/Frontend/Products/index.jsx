import React, { useState } from 'react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock products list
  const products = [
    { id: 1, name: 'Modern Headphones', category: 'Electronics', price: '$99.00', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Smart Watch Series', category: 'Electronics', price: '$149.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Minimalist Backpack', category: 'Accessories', price: '$79.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Classic Sunglasses', category: 'Accessories', price: '$45.00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Running Sneakers', category: 'Footwear', price: '$120.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Cotton Casual T-Shirt', category: 'Clothing', price: '$25.00', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60' },
    { id: 7, name: 'Leather Wallet', category: 'Accessories', price: '$35.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60' },
    { id: 8, name: 'Bluetooth Speaker', category: 'Electronics', price: '$85.00', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60' },
  ]

  // Categories list
  const categories = ['All', 'Electronics', 'Accessories', 'Footwear', 'Clothing']

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-16 lg:px-24">
      
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Products</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Find everything you need right here at Veloria Store</p>
        </div>

        {/* Search Input Bar */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition bg-gray-50"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
              selectedCategory === category
                ? 'bg-indigo-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100" />
              <span className="text-[10px] uppercase font-semibold text-indigo-500 mb-1">{product.category}</span>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">{product.price}</p>
              <button className="mt-auto w-full py-2 bg-indigo-50 hover:bg-indigo-500 text-indigo-600 hover:text-white transition rounded-full text-xs font-medium cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-sm">No products found matching your search.</p>
        </div>
      )}

    </div>
  )
}

export default Products