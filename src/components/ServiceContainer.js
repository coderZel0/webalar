import React from 'react'

const ServiceContainer = ({logo,title}) => {
  return (
    <div className='service flex flex-col justify-between p-1  space-y-12'>
        <div className='flex justify-center md:justify-start'>{logo}</div>
        <div className='flex flex-col space-y-4'>
            <div className='text-xl text-white '>{title}</div>
            <p className='text-sm text-left  text-white'> Lorem Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque
                Lorem Lorem Lorem Lorem ipsum dolor sit a
            </p>
        </div>
       
    </div>
  )
}

export default ServiceContainer