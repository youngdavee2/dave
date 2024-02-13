import React from 'react'
import { PiPushPinLight } from "react-icons/pi";

const stores = () => {
  return (
    <div className='max-w-[1640px]'>
      <h1 className='text-center text-2xl text-white font-bold'>Our Top Writers</h1>
      <div className='grid  grid-cols-2 p-2 md:grid-cols-4 gap-2 '>
        <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
          <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Harper</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1498726406/photo/black-female-student-reading-a-book-in-a-library.jpg?s=612x612&w=0&k=20&c=nMCzUlBsBeH6OgrDNGkatSaMyVwsU3YN-N1Sknd9Dlw=" alt="" className='cursor-pointer rounded-lg shadow-lg w-full h-full' />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Phoenix</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1480332703/photo/portrait-of-a-smiling-young-woman-in-the-library.jpg?s=612x612&w=0&k=20&c=RwvBTJ8Pl1OyQ4GtYYUtnaYXiaPP5N69dwm4VX9Mhzk=" alt="" className='cursor-pointer hover:scale-105 duration-500 transition-all rounded-lg shadow-lg' />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Aurora</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1136571012/photo/female-student-in-a-bookstore.jpg?s=612x612&w=0&k=20&c=kmHsH0T2OMycP8KgVdIQE0u9WVdNk2NKSxL_pWvnY68=" alt="" className='cursor-pointer transition-all duration-500 hover:scale-105 rounded-lg shadow-lg' />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Zara</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1474583480/photo/portrait-of-young-african-american-teacher-or-student-sitting-in-university-library-looking.jpg?s=612x612&w=0&k=20&c=_Kqf-aPfQiYPAlddOQIN9g_spQ7PsNLD-hxsEKjODN0=" alt="" className='hover:scale-105 duration-500 transition-all cursor-pointer rounded-lg shadow-lg'  />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Luna</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1440490026/photo/joyful-young-latin-female-reading-the-book-while-standing-in-library.jpg?s=612x612&w=0&k=20&c=D9fL7vsTX4j29jFB_8Ff2ZiZUgqsnwpj9GYZJmgeT08=" alt="" className='hover:scale-105 duration-500 transition-all cursor-pointer' />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Kai</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/922427618/photo/boy-smiling-while-holding-book-in-library.jpg?s=612x612&w=0&k=20&c=GGjKFAZjuQtkjZ2S_6Bh1o06nMatL-xfw92sZSvn4Xw=" alt="" className='cursor-pointer hover:scale-105 duration-500 transition-all rounded-lg shadow-lg'/>
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Luna</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://media.istockphoto.com/id/1448404596/photo/college-student-holding-a-book-in-the-bookstore.jpg?s=612x612&w=0&k=20&c=DjCs4ZD3rtRf0ZYHSgt83nDbh4vnHiheZKV-F8Ax8GY=" alt=""className='cursor-pointer hover:scale-105 duration-500 transition-all rounded-lg shadow-lg' />
      </div>
      <div className='relative hover:scale-105 duration-500 transition-all cursor-pointer'>
      <div className='absolute w-full h-full bg-black/50 rounded'>
          <button className='border-white font-bold text-xl px-2 pt-4 transition-all duration-500 hover:text-orange-500 text-white'>Jade</button>
          <PiPushPinLight className='absolute bottom-2 right-2 text-white' size={30} />
          </div>
      <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='cursor-pointer hover:scale-105 duration-500 transition-all'/>
      </div>
      </div>
    </div>

  )
}

export default stores
