import React from 'react'

function LeftPanel() {
  return (
    <div className='h-[100vh]'>
      <div className=''>
        <input type="text" placeholder='Location' className='w-48 h-8'  />
      </div>
      <div className='h-36 bg-orange-400'>
        <h5 className='text-7xl font-semibold'>11°C</h5>
      </div>
      <div>
        <span>💨</span>
        <span>Northeast</span>
        <span>38.9 km/h</span>
      </div>
      
    </div>
  )
}

export default LeftPanel;
