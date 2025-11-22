export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b bg-white">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-md" onClick={() => window.dispatchEvent(new CustomEvent('toggleSidebar'))} aria-label="Open sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative w-[520px]">
          <input
            type="text"
            placeholder="Search courses, tasks..."
            className="px-4 py-2 rounded-full w-full border placeholder-gray-400 bg-gray-50"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">3</span>
        </button>

        <div className="flex items-center gap-3">
          <img src="/src/assets/react.svg" alt="avatar" className="w-9 h-9 rounded-full object-cover" />
          <div className="text-sm">
            <div className="font-medium">Daffa Alhafizh</div>
            <div className="text-xs text-gray-500">Student</div>
          </div>
        </div>
      </div>
    </header>
  )
}
