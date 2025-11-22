import { useEffect, useState } from 'react'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/courses/')
        if (res.ok) setCourses(await res.json())
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-gray-100 rounded">All Courses</button>
          <button className="px-3 py-1 bg-gray-100 rounded">Ongoing</button>
          <button className="px-3 py-1 bg-gray-100 rounded">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {courses.map((c) => (
          <div key={c.id} className="p-5 bg-white rounded-xl shadow flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-500">{c.code || ''} {c.instructor ? `• ${c.instructor}` : ''}</div>
              <div className="mt-2 font-semibold text-lg">{c.title}</div>
              <p className="text-sm text-gray-500 mt-2">{c.description || 'Learn modern software development practices and methodologies.'}</p>
            </div>

            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-900" style={{ width: `${c.progress || 0}%` }} />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="text-xs text-gray-500">{c.materials || 0} Materials • {c.assignments || 0} Assignments • {c.duration || '16 weeks'}</div>
                <button className="px-3 py-1 bg-indigo-900 text-white rounded">Enter Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
