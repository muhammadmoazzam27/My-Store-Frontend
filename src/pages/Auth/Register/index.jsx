import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "@/utils/global"

const initialState = {
  fullName: "",
  email: "",
  password: ""
}

const Register = () => {

  const API = import.meta.env.VITE_API_URL

  const navigate = useNavigate()

  const [state, setState] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const { fullName, email, password } = state;

    if (fullName.trim().length < 3) {
      toastify('Enter your full name', "error");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toastify('Please enter a valid email address!', 'error');
      return;
    }

    if (password.length < 6) {
      toastify('Password must be at least 6 characters long!', 'error');
      return;
    }

    const user = { fullName, email, password }

    setLoading(true);

    axios.post(`${API}/auth/register`, user)

      .then((res) => {
        const { status, data } = res;
        if (status === 201) {
          toastify(data.message || "user registered", "success");
          navigate("/auth/login");
          return console.log("user => ", data.user)
        }
      })
      .catch((error) => {
        console.log("Error => ", error)
        return toastify("Server Error", "error")
      })
      .finally(() => {
        setLoading(false)
      })

  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 transition-all">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Sign up to get started with Veloria Store</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  // Eye On Icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  // Eye Off Icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full font-medium text-xs sm:text-sm cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:bg-indigo-300 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Creating account...</span>
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-5 sm:mt-6">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register