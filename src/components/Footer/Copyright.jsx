import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-t border-gray-200 py-6 sm:py-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link to="/" className="font-bold text-base sm:text-lg text-gray-800 hover:text-indigo-600 transition">
            Veloria Store
          </Link>
          <p className="text-xs text-gray-500">
            Your one-stop destination for modern shopping.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center sm:text-right">
          <p>&copy; {new Date().getFullYear()} Veloria Shopping Store. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Copyright