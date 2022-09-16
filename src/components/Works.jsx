import React from 'react'
import ProjectContainer from './ProjectContainer'

const Works = () => {
  return (
    <div className='flex flex-col items-center p-6 space-y-12 mx-auto'>
        <div className='text-6xl text-grayishBlue font-medium'>Our Works</div>
        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-6'>
            <ProjectContainer name={"Project 1"}/>
            <ProjectContainer name={"Project 2"}/>
            <ProjectContainer name={"Project 3"}/>
        </div>
        <div className='flex justify-center items-center p-6 mt-10'>
            <a className='px-8 py-2 bg-cyan text-bold rounded-full font-medium text-lg'>View More</a>
        </div>
    </div>
  )
}

export default Works