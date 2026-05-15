import React from 'react'
import Header from '../other/Header.jsx'
import TaskListNumber from '../other/TaskListNumber.jsx'
import TaskList from '../tasklist/TaskList.jsx'


const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] p-10">
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
