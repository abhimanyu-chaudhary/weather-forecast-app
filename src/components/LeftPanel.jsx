import React, { useEffect, useState } from 'react'
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { FaCloud } from "react-icons/fa";
import { BsCloudRainHeavyFill } from "react-icons/bs";

function LeftPanel() {
  const [city, setCity] = useState("Bengaluru");
  const [info, setInfo] = useState(null);
  
  const api1= "https://api.tomorrow.io/v4/weather/history/recent?location=austin&apikey=GZNHp0qHHUlhD0xBs0nX8lnLMM9FXqYB";
  const api2 = "https://api.tomorrow.io/v4/weather/realtime?location=manali&apikey=GZNHp0qHHUlhD0xBs0nX8lnLMM9FXqYB";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eeb0a96d2cc5d60e60bc3f2e0adcb208`)
    .then((response) => response.json())
    .then((data) => setInfo(data))
  })

  const handleCity = (e) => {
    if(e.key === "Enter"){
      setCity(e.target.value);
    }
  }
  return (
    <div className='h-[100vh] bg-zinc-100 flex flex-col items-center py-8 rounded-tr-xl rounded-br-xl'>
      <div className='flex items-center'>
        <CiTempHigh className='h-8 mb-10 absolute text-xl' />
        <input type="text" onKeyDown={(e) => handleCity(e)} placeholder='Location' className='w-48 h-8 mb-10 bg-transparent border-b-[1px] outline-none placeholder:pl pl-5' />
      </div>
      <div className='text-9xl mb-10 text-orange-500'>
        <IoRainyOutline />
      </div>
      <div className='h-20 '>
        <h5 className='text-6xl font-semibold'>{info ? (info.main.temp-273.15).toFixed(1) : "11"}°C</h5>
      </div>
      <div className='flex justify-center items-center gap-2 h-16 text-sm w-52 border-b-[1px] border-b-green-700'>
        <span> <FaWind /></span>
        <span>Northeast</span>
        <span>38.9 km/h</span>
      </div>
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
