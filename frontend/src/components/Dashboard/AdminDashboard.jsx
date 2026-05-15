import React from 'react'
import Header from '../other/Header.jsx'
import CreateTask from '../other/CreateTask.jsx'
import AllTask from '../other/AllTask.jsx'


const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-black p-10 w-full">
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
