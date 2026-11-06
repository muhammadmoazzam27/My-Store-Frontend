import React from 'react'

const ScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-8 bg-white/90 dark:bg-slate-800/90 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">

        {/* Spinning Rings */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 rounded-full"></div>
          <div className="absolute w-16 h-16 border-4 border-indigo-600 dark:border-indigo-400 rounded-full animate-spin border-t-transparent"></div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 tracking-wide">
            Loading...
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Please wait while we prepare your content
          </p>
        </div>

      </div>
    </div>
  )
}

export default ScreenLoader