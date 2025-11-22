import { useEffect, useState } from 'react'

function StatusPill({ status }) {
  const map = {
    pending: 'bg-red-100 text-red-600',
    inprogress: 'bg-yellow-100 text-yellow-600',
    completed: 'bg-green-100 text-green-600',
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm ${map[status] || 'bg-gray-100 text-gray-700'}`}>
      {status === 'pending' ? 'Pending' : status === 'inprogress' ? 'In Progress' : 'Completed'}
    </span>
  )
}

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/tasks/')
        if (res.ok) setTasks(await res.json())
        else setTasks([])
      } catch (e) {
        console.error(e)
        setTasks([])
      }
    }
    load()
  }, [])

  const sample = [
    { id: 1, title: 'Final Project Report', course: 'Software Engineering', due: 'Oct 25, 2025', status: 'pending', points: 100 },
    { id: 2, title: 'Weekly Quiz Chapter 5', course: 'Data Structures', due: 'Oct 24, 2025', status: 'pending', points: 50 },
    { id: 3, title: 'Lab Assignment 4', course: 'Database Systems', due: 'Oct 26, 2025', status: 'inprogress', points: 75 },
    { id: 4, title: 'Research Paper Review', course: 'Machine Learning', due: 'Oct 28, 2025', status: 'inprogress', points: 60 },
    { id: 5, title: 'Code Review Exercise', course: 'Software Engineering', due: 'Oct 23, 2025', status: 'completed', points: 30 },
  ]

  const list = tasks.length ? tasks : sample

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      <div className="grid grid-cols-1 gap-4">
        {list.map((t) => (
          <div key={t.id} className="bg-white rounded-xl p-4 shadow flex items-center justify-between">
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-sm text-gray-500">{t.course || t.course_name}</div>
              <div className="text-xs text-gray-400 mt-2">{t.due} • {t.points ? `${t.points} pts` : ''}</div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <StatusPill status={t.status === 'in_progress' ? 'inprogress' : t.status} />
              <div>
                {t.status === 'completed' ? (
                  <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">View Submission</button>
                ) : (
                  <button className="px-3 py-1 rounded-full bg-indigo-700 text-white text-sm">Start Task</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
