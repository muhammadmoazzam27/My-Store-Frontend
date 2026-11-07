import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { isAuth } = useAuthContext();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 lg:px-6 py-4 border-b border-gray-300 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 relative transition-all">

      <div className="flex items-center gap-10">
        <Link to="/" className="font-bold text-lg">
          Veloria Store
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
        </div>
      </div>

      {/* (Search, Cart, Auth Buttons) */}
      <div className="hidden sm:flex items-center gap-6">
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="relative cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
        </div>

        <div className="flex items-center gap-3">
          {!isAuth ? (
            <>
              <Link to="/auth/login" className="px-5 py-2 text-indigo-600 hover:bg-indigo-500 hover:text-white transition rounded-full font-medium text-sm">
                Login
              </Link>
              <Link to="/auth/register" className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm font-medium">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/user-profile" className="px-5 py-2 text-indigo-600 hover:bg-indigo-50 transition rounded-full font-medium text-sm">
                Dashboard
              </Link>
              <button onClick={() => setIsAuth(false)} className="px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm font-medium">
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Right Icons (Cart + Hamburger) */}
      <div className="flex items-center gap-4 sm:hidden">
        {/* Mobile Cart Icon */}
        <div className="relative cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setOpen(true)} aria-label="Menu" className="p-1">
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>
      </div>

      {/* Mobile Off-Canvas Drawer Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 sm:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />

        <div className={`absolute top-0 left-0 h-full w-70 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <span className="font-bold text-lg">Veloria Store</span>
            <button onClick={() => setOpen(false)} aria-label="Close Menu" className="p-2 text-gray-500 hover:text-black">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Search Box Inside Drawer */}
          <div className="px-6 pt-5">
            <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-gray-50">
              <input className="py-2 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col px-6 py-6 gap-5 text-base font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">Contact</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="hover:text-indigo-600 transition">Products</Link>
          </div>

          {/* Drawer Footer Buttons */}
          <div className="mt-auto p-6 border-t border-gray-200 flex flex-col gap-3">
            {!isAuth ? (
              <>
                <Link to="/auth/login" onClick={() => setOpen(false)} className="w-full text-center py-2.5 text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition rounded-full font-medium text-sm">
                  Login
                </Link>
                <Link to="/auth/register" onClick={() => setOpen(false)} className="w-full text-center py-2.5 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full font-medium text-sm">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/user-profile" onClick={() => setOpen(false)} className="w-full text-center py-2.5 text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition rounded-full font-medium text-sm">
                  Dashboard
                </Link>
                <button onClick={() => { setIsAuth(false); setOpen(false); }} className="w-full py-2.5 bg-red-500 hover:bg-red-600 transition text-white rounded-full font-medium text-sm">
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar;