import React from 'react'

const ProjectContainer = ({name}) => {
  return (
    <div className='projectContainer flex flex-col space-y-2 rounded-lg'>
        <div style={{borderRadius:"8px 8px 0px 0px"}} className='w-full bg-gray-400 h-80'></div>
        <div className='flex p-6'>
            <div className='flex flex-col justify-between px-3 space-y-4 w-50'>
                <h3 className='text-bold text-xl font-medium'>{name}</h3>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum consequatur sequi aut incidunt magni adipisci.</p>
            </div>
            <div className='flex justify-end mr-2 items-center w-1/2'>
                    <div className='flex items-center justify-center' style={{width:"64px",height:"64px",borderRadius:"50%",border:"1px solid black"}}>
                        <svg style={{transform:"scale(0.5)",rotate:"45deg"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/></svg>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer