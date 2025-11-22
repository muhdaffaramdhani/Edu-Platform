import { useEffect, useState } from 'react'

export default function Chat() {
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    // placeholder sample data; integrate API as available
    setConversations([
      { id: 1, title: 'Software Engineering Group', last: 'Sarah: The deadline has been extended', unread: 3 },
      { id: 2, title: 'Dr. Sarah Johnson', last: 'Thanks for submitting the assignment', unread: 0 },
      { id: 3, title: 'Database Project Team', last: 'Mike: I\'ve pushed the latest changes', unread: 5 },
      { id: 4, title: 'Prof. Michael Chen', last: 'Please check the updated syllabus', unread: 1 },
    ])
  }, [])

  return (
    <div className="p-6 grid grid-cols-12 gap-6">
      <div className="col-span-4 bg-white rounded-xl shadow p-4">
        <div className="mb-4">
          <input placeholder="Search conversations..." className="w-full px-3 py-2 rounded-full border" />
        </div>
        <ul className="space-y-3">
          {conversations.map((c) => (
            <li key={c.id} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50">
              <div>
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-gray-500">{c.last}</div>
              </div>
              {c.unread > 0 && <div className="bg-indigo-700 text-white text-xs px-2 py-1 rounded-full">{c.unread}</div>}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-8 bg-white rounded-xl shadow p-6 flex flex-col">
        <div className="flex-1 overflow-auto mb-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-block bg-gray-100 p-3 rounded-xl">Hey everyone! Did you see the announcement about the project deadline?</div>
              <div className="text-xs text-gray-400 mt-1">10:30 AM</div>
            </div>

            <div className="mb-6 text-right">
              <div className="inline-block bg-indigo-900 text-white p-3 rounded-xl">Yes! That's great news. We have an extra week now.</div>
              <div className="text-xs text-gray-400 mt-1">10:32 AM</div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-gray-100 p-3 rounded-xl">Perfect timing. I was worried about the database implementation.</div>
              <div className="text-xs text-gray-400 mt-1">10:35 AM</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input className="flex-1 px-4 py-3 rounded-full border" placeholder="Type a message..." />
          <button className="bg-indigo-700 text-white px-4 py-3 rounded-full">Send</button>
        </div>
      </div>
    </div>
  )
}
