import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [courses, setCourses] = useState([])
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [cRes, tRes] = await Promise.all([
          fetch('/api/courses/'),
          fetch('/api/tasks/'),
        ])
        if (cRes.ok) setCourses(await cRes.json())
        if (tRes.ok) setTasks(await tRes.json())
      } catch (e) {
        console.error('Failed to load API data', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hi Daffa <span className="text-2xl">👋</span></h1>
          <p className="text-sm text-gray-600 mt-1">Welcome back! You're doing great this semester.</p>
          <div className="mt-4 text-sm text-gray-500">Overall Progress</div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden w-96">
            <div className="h-full bg-indigo-900" style={{ width: '68%' }} />
          </div>
        </div>
        <div className="w-36 h-36 flex items-center justify-center rounded-full bg-white shadow">
          <div className="text-2xl font-semibold">68%</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {courses.slice(0, 3).map((c, idx) => (
          <div key={c.id || idx} className="p-5 bg-white rounded-xl shadow flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-500">{c.category || 'Course'}</div>
              <div className="mt-2 font-semibold text-lg">{c.title}</div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-700" style={{ width: `${c.progress || 50}%` }} />
              </div>
              <div className="text-xs text-gray-500 mt-2">{c.progress || 50}% progress</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <section className="col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
            <button className="text-sm text-indigo-700">View All</button>
          </div>

          <ul className="space-y-3">
            {tasks.length ? (
              tasks.map((t) => (
                <li key={t.id} className="p-4 border rounded-lg flex items-start justify-between">
                  <div>
                    <div className="font-medium">{t.title}</div>
                    <div className="text-sm text-gray-500">{t.course || 'Course'}</div>
                    <div className="text-xs text-gray-400 mt-2">Due {t.due}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-xs text-gray-500">{t.points ? `${t.points} pts` : ''}</div>
                    <button className="px-3 py-1 bg-indigo-700 text-white rounded-lg text-sm">Start Task</button>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">No upcoming tasks</li>
            )}
          </ul>
        </section>

        <aside className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Courses</h2>
            <button className="text-sm text-indigo-700">View All</button>
          </div>
          <div className="space-y-4">
            {courses.map((c) => (
              <div key={c.id} className="p-3 border rounded-lg">
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-gray-500">{c.instructor}</div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-700" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
