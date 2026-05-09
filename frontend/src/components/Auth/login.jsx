import React, { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const SubmitHandler= (e) =>{
    e.preventDefault()
    console.log("hello gyus form submitted");
    console.log("email is",email);
    console.log("password is",password);
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className=" min-h-screen w-screen flex  items-center justify-center bg-black">
        <div className="border-2 border-amber-600 rounded-xl  p-7">
            <form  onSubmit={(e)=>{
                SubmitHandler(e)
              }} className="flex flex-col items-center justify-center p-5">
                <input 
                 value={email}
                 onChange={(e)=>{
                   setEmail(e.target.value)
                 }}
                type="email"
                required className=" outline-none border-2 rounded-full mt-5 font-medium text-white py-3 px-8 placeholder:text-gray-400 bg-transparent border-amber-600"
                placeholder="Enter your email">
                </input>
                <input
                 value={password}
                 onChange={(e)=>{
                   setPassword(e.target.value)
                 }}
               type="password"
                required className=" outline-none border-2 rounded-full font-medium text-white mt-5 py-3 px-8 placeholder:text-gray-400 bg-transparent border-amber-600"
                placeholder="Enter password"></input>
                <button className="active:hover:bg-amber-700 cursor-pointer font-semibold rounded-full text-white bg-amber-600 mt-5 py-3 px-8 active:scale-95">Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
