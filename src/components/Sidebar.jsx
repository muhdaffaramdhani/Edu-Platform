import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Icon = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" />
        </svg>
      )
    case 'courses':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M4 6h16v2H4V6zm0 4h10v2H4v-2zm0 4h7v2H4v-2z" />
        </svg>
      )
    case 'tasks':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M9 11.5l2 2 4-4-1.4-1.4L11 11.7 10.4 11l-1.4 1.5zM5 5h14v2H5V5zm0 4h10v2H5V9zM5 13h6v2H5v-2z" />
        </svg>
      )
    case 'chat':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21 6v9a2 2 0 0 1-2 2H7l-4 3V8a2 2 0 0 1 2-2h16z" />
        </svg>
      )
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <aside className={`sidebar-root ${open ? 'open' : ''}`} aria-hidden={!open && window.innerWidth <= 768}>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="sidebar-brand">EduPlatform</h2>
          <button className="p-2 rounded-md md:hidden" onClick={onClose} aria-label="Close sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
            <NavLink to="/" end>
              {({ isActive }) => (
                <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                  <span className="icon-wrap">
                    <Icon name="home" className="w-5 h-5" />
                  </span>
                  <span className="flex-1">Dashboard</span>
                  <span className="active-indicator" />
                </div>
              )}
            </NavLink>

          <NavLink to="/courses">
            {({ isActive }) => (
              <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="icon-wrap">
                  <Icon name="courses" />
                </span>
                <span className="flex-1">Courses</span>
                <span className="active-indicator" />
              </div>
            )}
          </NavLink>

          <NavLink to="/tasks">
            {({ isActive }) => (
              <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="icon-wrap">
                  <Icon name="tasks" />
                </span>
                <span className="flex-1">Tasks</span>
                <span className="active-indicator" />
              </div>
            )}
          </NavLink>

          <NavLink to="/chat">
            {({ isActive }) => (
              <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="icon-wrap">
                  <Icon name="chat" />
                </span>
                <span className="flex-1">Chat</span>
                <span className="active-indicator" />
              </div>
            )}
          </NavLink>

          <NavLink to="/profile">
            {({ isActive }) => (
              <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="icon-wrap">
                  <Icon name="user" />
                </span>
                <span className="flex-1">Profile</span>
                <span className="active-indicator" />
              </div>
            )}
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-profile">
        <img src="/src/assets/react.svg" alt="avatar" className="object-cover w-12 h-12 rounded-full" />
        <div>
          <div className="font-medium">Daffa Alhafizh</div>
          <div className="text-xs text-gray-500">Student</div>
        </div>
      </div>
    </aside>
  )
}
