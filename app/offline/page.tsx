"use client"

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6 p-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white">You're Offline</h1>
        <p className="text-xl text-gray-300 max-w-md">
          No internet connection detected. Some features may not be available.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
