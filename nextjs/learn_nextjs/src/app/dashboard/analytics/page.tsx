import React from 'react'

const Analytics = () => {
  const metrices = [
    {
      title: "Total sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "-8%",
      isPositive: false
    },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true
    },
    {
      title: "New Sign-Ups",
      value: "350",
      change: "+18%",
      isPositive: true
    },
    
  ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-xl lg:text-3xl md:text-2xl font-bold text-gray-800 mb-8'>
          Analytics Dashboard
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {
          metrices.map((metric, index) => (
            <div key={index}
            className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
              metric.isPositive ? "border-green-500": "border-red-500"
            }`}
            >
              <div>
                <h3 className='text-xl font-semibold text-gray-700'>{metric.title}</h3>
                <p className='text-lg text-gray-600 mt-2'>
                  {metric.value}
                </p>
                
              </div>
              <div className='text-right'>
                  <p className={`text-sm mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}>
                    {metric.change}
                  </p>
                </div>
            </div>
          ))
        }
        </div>
        {/* charts */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Website Traffic</h2>
          <div className='bg-gray-100 rounded-lg h-72 w-full'>
            <img className='h-72 w-full object-cover overflow-hidden' src='https://images.unsplash.com/photo-1592495989226-03f88104f8cc?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='chart'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics