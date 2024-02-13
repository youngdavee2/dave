import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const footer = () => {
  return (
    <div className='bg-gray-900 bottom-0 p-3'>
      <h1 className='text-2xl text-white text-center font-bold'>contact us</h1>
      <div className='flex gap-4 items-center'>
      <FaEnvelopeOpen size={30}  className='text-white'/><p className='text-white text-xl font-bold'>Penpress</p>
      </div>
      <div className='flex justify-between'>
      <div className='text-white text-xl hidden  md:grid grid-cols-1 gap-2 cursor-pointer'>
        <h1 className='font-bold'>Download</h1>
        <h1>Mac app</h1>
        <h1>Linux app</h1>
        <h1>Windows</h1>
        <h1>Desktop app</h1>
      </div>
      <div className='hidden md:grid grid-cols-1 text-white text-xl cursor-pointer'>
        <h1 className='font-bold'>Products</h1>
        <h1>App</h1>
        <h1>Web</h1>
        <h1>Software</h1>
        <h1>Ecommerce</h1>
      </div>
      <div className='flex flex-col'>
      <div className='text-white flex gap-2 mr-4 cursor-pointer'>
        <h1>get in touch</h1>
        <FaXTwitter size={20} />
        <FaFacebook size={20} />
        <FaLinkedin size={20} />
        <div className='flex flex-col gap-3'>
          <h1>subscribe</h1>
          <input type="text" placeholder='Enter email address' className='p-2 rounded-lg text-black '/>
          <button className='btn bg-slate-500 text-white rounded-lg p-2 hover:opacity-45'>Subscribe</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default footer
