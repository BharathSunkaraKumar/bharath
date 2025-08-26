import React from 'react'

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      desciption: "Complte the final report for the project and submit it.",
      status: "In progress",
      dueDate: "2025-02-18"
    },
    {
      id: 2,
      title: "Update website content",
      desciption: "Revise the homepage text to reflect recent changes.",
      status: "Pennding",
      dueDate: "2025-02-20"
    },
    {
      id: 3,
      title: "team meeing",
      desciption: "Discuss the project milestones and progress with the team",
      status: "Completed",
      dueDate: "2025-02-15"
    },
  ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Tasks</h1>
        <section className='space-y-6'>
          {
            tasks.map((task) => (
              <div 
              key={task.id}
              className='flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4 sm:flex-col lg:flex-row sm:gap-5 sm:items-start flex-wrap'
              style={{
                borderColor: task.status === 'Completed' ? 'green' : task.status === 'In progress' ? 'yellow' : "red"
              }}
              >
                <div className="flex flex-col">
                  <h2 className='text-xl font-semibold text-gray-800'>{task.title}</h2>
                  <p className='text-sm text-gary-600 mt-2 sm:mr-1'>{task.desciption}</p>
                  <p className='text-sm text-gary-600 mt-2'>Due Date: {task.dueDate}</p>
                </div>
                <section className='flex space-x-4 flex-wrap mt-5 gap-5'>
                  <span
                  className={`px-4 py-3 text-center text-sm rounded-full ${
                    task.status === 'Completed'
                    ? "bg-green-100 text-green-600"
                    : task.status === 'In progress'
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                  }`}
                  >{task.status}</span>
                  <button className='px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>Edit</button>
                  {task.status != 'Completed' && (
                    <button className='px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors'>Mark as Completed</button>
                  )}
                  <button
                  className='px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors'
                  >Delete</button>
                </section>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default Tasks