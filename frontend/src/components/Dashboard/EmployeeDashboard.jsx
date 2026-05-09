import React from 'react'
import Header from '../other/Header.jsx'
import TaskListNumber from '../other/TaskListNumber.jsx'


const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] p-10">
      <Header/>
      <TaskListNumber/>
    </div>
  )
}

export default EmployeeDashboard
