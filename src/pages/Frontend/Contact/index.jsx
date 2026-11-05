import React, { useState } from 'react'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log({ name, email, message })

    // Simulating API network delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      e.target.reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Have a question, feedback, or need help with an order? We would love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Information Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-800">Contact Information</h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Fill out the form or reach out to us directly using the details below. Our support team typically replies within 24 hours.
          </p>

          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">📍</span>
              <p className="text-xs sm:text-sm">123 Market Street, Suite 456, VSS</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">📞</span>
              <p className="text-xs sm:text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">✉️</span>
              <p className="text-xs sm:text-sm">support@veloriaStore.com</p>
            </div>
          </div>

          <div className="mt-4 pt-6 border-t border-gray-200">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Working Hours</h3>
            <p className="text-xs sm:text-sm text-gray-500">Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p className="text-xs sm:text-sm text-gray-500">Saturday – Sunday: 10:00 AM – 4:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl">✓</div>
              <h3 className="font-bold text-gray-800 text-lg">Message Sent!</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-xs">Thank you for contacting us. We will get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full text-xs font-medium hover:bg-indigo-600 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">Send us a Message</h2>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  disabled={loading}
                  placeholder="Enter your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  disabled={loading}
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm outline-none focus:border-indigo-500 transition disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  disabled={loading}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs sm:text-sm outline-none focus:border-indigo-500 transition resize-none disabled:bg-gray-100"
                ></textarea>
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
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  )
}

export default Contact