import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Tasks from './pages/Tasks'
import Chat from './pages/Chat'
import Profile from './pages/Profile'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handler = () => setSidebarOpen((s) => !s)
    window.addEventListener('toggleSidebar', handler)
    return () => window.removeEventListener('toggleSidebar', handler)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* overlay for mobile when sidebar is open */}
        <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
