import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

const Main = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='hidden md:flex gap-15 p-5 justify-between'>
        <IoBookSharp size={50} /><ImBooks  size={50}/><IoBookSharp size={50} /><ImBooks  size={50}/>
        <ImBooks  size={50}/><IoBookSharp size={50} /><ImBooks  size={50}/><IoBookSharp size={50} /><ImBooks  size={50}/>
      </div>
      
      <div className='md:relative p-3 mt-5'>
        <div className='flex flex-col gap-10 justify-center items-center md:relative'>
          <div className='md:absolute w-full h-full bg-black/50 rounded-xl p-4 text-white'>
            <h1 className='block md:text-5xl ml-10 text-white font-bold'>PenPress: Empowering Local Writers to Share Their Voice</h1>
            <p className='hidden md:flex text-4xl md:ml-12 items-center justify-between text-white text-center'>
              "Empowering Local Voices, One Penstroke at a Time."
            </p>
          </div>
          <img src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=600" alt='wey my ' className='max-h-[1600px] md:max-h-[200px] w-full object-cover rounded'/>
        </div>
      </div>
      
      <div className='md:flex gap-1 justify-center items-center mr-20'>
        <h1 className='text-4xl md:hidden text-white text-center ml-10 p-4'>REVIEW</h1>
        <div className='rounded bg-gray-800 flex flex-col relative md:w-72 w-120 h-72 ml-20 p-4 items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 ease-in-out'>
          <div className='text-3xl text-white'><FaUser /></div>
          <div><p className='text-white text-2xl'>".........I am very proud to have joined PenPress since 2019"</p></div>
          <div><p className='text-white text-2xl'>Michael Dave</p></div>
        </div>
        <div className='rounded bg-gray-800 flex flex-col relative md:w-72 h-72 ml-20 p-4 items-center justify-center cursor-pointer hover:shadow-lg transition duration-300 ease-in-out'>
          <div className='text-3xl text-white'><FaUserGraduate /></div>
          <div><p className='text-white text-2xl'>".........I have never seen a more reliable platform than PenPress"</p></div>
          <div><p className='text-white text-2xl'>Young Davee</p></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
