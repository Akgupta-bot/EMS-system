import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex gap-5 mt-10 justify-between '>
        <div className='bg-blue-400 w-[45%] rounded-xl py-6 px-9'>
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-xl">Task</h3>
        </div>
        <div className='bg-red-400 w-[45%] rounded-xl py-6 px-9'>
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-xl">Task</h3>
            </div>
        <div className='bg-green-400 w-[45%] rounded-xl py-6 px-9'>
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-xl">Task</h3>
            </div>
        <div className='bg-yellow-400 w-[45%] rounded-xl py-6 px-9'>
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-xl">Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
