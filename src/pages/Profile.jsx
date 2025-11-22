export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-4">
            <img src="/src/assets/react.svg" alt="avatar" className="w-20 h-20 rounded-full object-cover" />
            <div>
              <div className="font-semibold">Daffa Alhafizh</div>
              <div className="text-sm text-gray-500">Student</div>
              <div className="text-sm text-gray-500 mt-2">daffa.alhafizh@university.edu</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-500">Location</div>
            <div className="font-medium">Jakarta, Indonesia</div>
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-xl p-6 shadow">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500">Total Courses</div>
              <div className="font-semibold text-2xl mt-2">12</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500">Completed</div>
              <div className="font-semibold text-2xl mt-2">7</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500">GPA</div>
              <div className="font-semibold text-2xl mt-2">3.85</div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Academic Progress</h2>
            <div className="mb-3">
              <div className="text-sm text-gray-500">Overall GPA</div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-indigo-700" style={{ width: '78%' }} />
              </div>
            </div>

            <div className="mb-3">
              <div className="text-sm text-gray-500">Course Completion</div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-indigo-700" style={{ width: '58%' }} />
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">Assignment Success Rate</div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-indigo-700" style={{ width: '92%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
