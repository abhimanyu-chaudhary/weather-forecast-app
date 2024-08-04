import React from 'react'
import Weekly from './Weekly';
import Highlights from './Highlights';

function RightPanel() {
  const backgroundImageRainy = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.3'
  }
  const backgroundImageSunny = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1483513208063-7ae9315481fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.3'
  }
  return (
    <div className='h-[100vh] flex flex-col py-10 px-12 rounded-tr-xl rounded-br-xl text-white relative' style={{}}>
      <div className='absolute w-[100%] h-[100%] bg-green-400 p-0 m-0 top-0 left-0' style={backgroundImageRainy}></div>
      <h1 className='font-semibold mb-3 z-10'>NATIONAL WEATHER FORECAST</h1>
      <div>
        <h1 className='text-sm'>SATURDAY | 03 Aug, 2024 | 09:00 AM</h1>
        <h1></h1>
      </div>
      <div className='my-10'>
        <Weekly />
      </div>
      <div>
        <h1 className='font-semibold text-xl'>Today's Highlights</h1>
      </div>
      <div className='mt-5'>
        <Highlights />
      </div>
    </div>
  )
}

export default RightPanel;
