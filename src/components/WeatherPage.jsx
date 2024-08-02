import React from 'react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function WeatherPage() {
  return (
    <div>
      <div className='w-[20vw]'>
        <LeftPanel />
      </div>
      <div className='w-[70vw]'>
        <RightPanel />
      </div>
    </div>
  )
}

export default WeatherPage;