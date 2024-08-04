import React from 'react'
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { FaCloud } from "react-icons/fa";
import { BsCloudRainHeavyFill } from "react-icons/bs";

function LeftPanel() {
  return (
    <div className='h-[100vh] bg-zinc-100 flex flex-col items-center py-8 rounded-tr-xl rounded-br-xl'>
      <div className='flex items-center'>
        <CiTempHigh className='h-8 mb-10 absolute text-xl' />
        <input type="text" placeholder='Location' className='w-48 h-8 mb-10 bg-transparent border-b-[1px] outline-none placeholder:pl pl-5' />
      </div>
      <div className='text-9xl mb-10 text-orange-500'>
        <IoRainyOutline />
      </div>
      <div className='h-20 '>
        <h5 className='text-7xl font-semibold'>11°C</h5>
      </div>
      <div className='flex justify-center items-center gap-2 h-16 text-sm w-52 border-b-[1px] border-b-green-700'>
        <span> <FaWind /></span>
        <span>Northeast</span>
        <span>38.9 km/h</span>
      </div>
      {/* <div className='flex flex-col gap-5 mt-10'>
        <div className='flex items-center gap-5'>
            <span className='px-3 py-3 bg-orange-400 rounded-md text-xl'><WiHumidity /></span>
            <p>64%</p>
        </div>
        <div className='flex items-center gap-5'>
            <span className='px-3 py-3 bg-orange-400 rounded-md text-xl'><IoRainyOutline /></span>
            <p>3.26</p>
        </div>
        <div className='flex items-center gap-5'>
            <span className='px-3 py-3 bg-orange-400 rounded-md text-xl'><FiSunrise /></span>
            <p>HH:MM:SS</p>
        </div>
        <div className='flex items-center gap-5'>
            <span className='px-3 py-3 bg-orange-400 rounded-md text-xl'><FiSunset /></span>
            <p>HH:MM:SS</p>
        </div>
      </div> */}
      <div className='flex items-center gap-4 mt-3 w-40'>
        <span className='px-2 py-2 bg-orange-400 rounded-md text-lg'><FaCloud /></span>
        <p className='text-sm'>Mostly Cloudy</p>
      </div>
      <div className='flex items-center gap-4 mt-3 w-40'>
        <span className='px-2 py-2 bg-orange-400 rounded-md text-lg'><BsCloudRainHeavyFill /></span>
        <p className='text-sm'>22%</p>
      </div>
      <div className='w-48 text-center bg-orange-200 py-6 mt-5 rounded-lg '>
        <p>Bengaluru, Karnataka</p>
      </div>
    </div>
  )
}

export default LeftPanel;
