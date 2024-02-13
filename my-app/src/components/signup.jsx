import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";

const Signup = () => {
  
  // let items =()=>{
  //   if (document.getElementsByTagName("input")===("")) {
      
  //   }
    
  // }
  return (
    <div className='flex justify-center items-center m-5'>
      <div className='flex flex-col gap-8 hover:shadow-lg transition duration-300 ease-in-out p-15 max-w-md w-full text-white'>
        <div className='flex flex-col'>
          <span className='text-2xl'>Email</span>
          <input type="text" placeholder='Email' className=' bg-transparent text-white rounded' />
          <div><FaUser/></div>
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl'>Create Password</span>
          <input type="password" placeholder='Password' className='bg-transparent text-white' />
          <div><FaLock /></div>
        </div>
        
        <div className='flex flex-col '>
          <span className='text-2xl'>Confirm Password</span>
          <input type="password" placeholder='Confirm Password' className='bg-transparent text-white' />
          </div>
          <div><FaLock /></div>
          
        <div className='flex flex-col'>
          <button type='submit' className='btn rounded bg-gray-900 hover:opacity-45 md:p-5 p-3 text-2xl text-white'>Submit</button>
          <span className='text-2xl text-white'>Already have an account? <a href="/" className=' transition-all duration-500 text-orange-600 md:text-white md:hover:text-orange-600'>Login now</a></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
