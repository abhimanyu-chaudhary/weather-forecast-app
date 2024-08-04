import React from 'react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function WeatherPage() {
  return (
    <div className='flex bg-zinc-900'>
      <div className='w-[20vw]'>
        <LeftPanel />
      </div>
      <div className='w-[80vw]'>
        <RightPanel />
      </div>
    </div>
  )
}

export default WeatherPage;
