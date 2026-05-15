import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className="p-5 bg=[#1c1c1c] mt-7 rounded">
        
        <form >
          <div className="bg-[#1c1c1c] text-white flex items-start justify-between w-full flex-wrap p-4 ">
          <div className="w-[45%] flex flex-col h-full">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input type="text" placeholder='Make a ui design' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"></input></div>
         
          <div><h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"></input></div>
          <div><h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
          <input type="text" placeholder='employee name' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/></div>
          <div><h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input type="text" placeholder='design , dev , etc' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
          </div>
          </div>
          <div className="w-[45%] flex flex-col h-full ">
             <div><h3 className="text-sm text-gray-300 mb-0.5 ">Description</h3>
          <textarea cols="30" rows="8" className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"></textarea></div>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full">Create Task</button></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
